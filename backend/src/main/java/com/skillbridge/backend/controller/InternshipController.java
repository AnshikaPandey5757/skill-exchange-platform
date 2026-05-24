package com.skillbridge.backend.controller;

import com.skillbridge.backend.model.Internship;
import com.skillbridge.backend.model.User;
import com.skillbridge.backend.repository.InternshipRepository;
import com.skillbridge.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/internships")
public class InternshipController {

    @Autowired
    private InternshipRepository internshipRepository;

    @Autowired
    private UserRepository userRepository;

    // Get all gigs
    @GetMapping
    public ResponseEntity<List<Internship>> getInternships() {
        return ResponseEntity.ok(internshipRepository.findAll());
    }

    // Apply for internship
    @PostMapping("/apply")
    public ResponseEntity<?> applyInternship(@RequestBody Map<String, Long> payload) {
        Long internshipId = payload.get("internshipId");
        Optional<Internship> internOpt = internshipRepository.findById(internshipId);
        
        if (!internOpt.isPresent()) {
            return ResponseEntity.badRequest().body("Internship gig not found!");
        }

        Internship intern = internOpt.get();
        intern.setStatus("Applied");
        internshipRepository.save(intern);

        Map<String, String> res = new HashMap<>();
        res.put("message", "Application submitted successfully to corporate managers.");
        return ResponseEntity.ok(res);
    }

    // Complete internship & reward stipend + certificate
    @PostMapping("/complete")
    public ResponseEntity<?> completeInternship(@RequestBody Map<String, Object> payload) {
        Long internshipId = Long.parseLong(payload.get("internshipId").toString());
        Long userId = Long.parseLong(payload.get("userId").toString());

        Optional<Internship> internOpt = internshipRepository.findById(internshipId);
        Optional<User> userOpt = userRepository.findById(userId);

        if (!internOpt.isPresent() || !userOpt.isPresent()) {
            return ResponseEntity.badRequest().body("Invalid internship or user parameters!");
        }

        Internship intern = internOpt.get();
        User user = userOpt.get();

        if ("Completed".equalsIgnoreCase(intern.getStatus())) {
            return ResponseEntity.badRequest().body("Internship already completed and rewarded!");
        }

        intern.setStatus("Completed");
        internshipRepository.save(intern);

        // Reward Stipend in Skill Coins
        user.setCoins(user.getCoins() + intern.getStipend());
        // Increment Verifiable Certificates
        user.setCertificatesCount(user.getCertificatesCount() + 1);
        // Reward 200 XP for internship completion
        user.setXp(user.getXp() + 200);

        userRepository.save(user);

        Map<String, Object> resp = new HashMap<>();
        resp.put("stipendRewarded", intern.getStipend());
        resp.put("certificatesCount", user.getCertificatesCount());
        resp.put("message", "Congratulations! Earned " + intern.getStipend() + " Skill Coins and a blockchain-verifiable certificate! ⛓️");
        return ResponseEntity.ok(resp);
    }
}
