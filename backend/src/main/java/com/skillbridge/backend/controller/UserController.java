package com.skillbridge.backend.controller;

import com.skillbridge.backend.model.User;
import com.skillbridge.backend.repository.UserRepository;
import com.skillbridge.backend.service.MatchingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MatchingService matchingService;

    // Retrieve compatible mentor/peer matches
    @GetMapping("/matches")
    public ResponseEntity<?> getMatches(@RequestParam(name = "userId", defaultValue = "1") Long userId) {
        Optional<User> currentUserOpt = userRepository.findById(userId);
        if (!currentUserOpt.isPresent()) {
            return ResponseEntity.badRequest().body("User not found!");
        }

        User currentUser = currentUserOpt.get();
        List<User> allUsers = userRepository.findAll();
        List<Map<String, Object>> matchesList = new ArrayList<>();

        for (User u : allUsers) {
            if (u.getId().equals(currentUser.getId())) {
                continue;
            }
            int score = matchingService.calculateMatchScore(currentUser, u);
            Map<String, Object> map = new HashMap<>();
            map.put("user", u);
            map.put("matchScore", score);
            matchesList.add(map);
        }

        // Sort by matchScore descending
        matchesList.sort((m1, m2) -> Integer.compare((int) m2.get("matchScore"), (int) m1.get("matchScore")));

        return ResponseEntity.ok(matchesList);
    }

    // Update profile
    @PostMapping("/profile/update")
    public ResponseEntity<?> updateProfile(@RequestBody Map<String, String> data) {
        Long userId = Long.parseLong(data.getOrDefault("userId", "1"));
        Optional<User> userOpt = userRepository.findById(userId);
        if (!userOpt.isPresent()) {
            return ResponseEntity.badRequest().body("User not found!");
        }

        User user = userOpt.get();
        if (data.containsKey("bio")) user.setBio(data.get("bio"));
        if (data.containsKey("skillsToTeach")) user.setSkillsToTeach(data.get("skillsToTeach"));
        if (data.containsKey("skillsToLearn")) user.setSkillsToLearn(data.get("skillsToLearn"));
        if (data.containsKey("name")) user.setName(data.get("name"));

        User saved = userRepository.save(user);
        return ResponseEntity.ok(saved);
    }

    // AI personality and learning style detector
    @PostMapping("/personality")
    public ResponseEntity<?> detectPersonality(@RequestBody Map<String, String> payload) {
        Long userId = Long.parseLong(payload.getOrDefault("userId", "1"));
        Optional<User> userOpt = userRepository.findById(userId);
        if (!userOpt.isPresent()) {
            return ResponseEntity.badRequest().body("User not found!");
        }

        User user = userOpt.get();
        String bio = user.getBio() != null ? user.getBio().toLowerCase() : "";

        // Intelligent mock heuristic based on bio content
        if (bio.contains("design") || bio.contains("art") || bio.contains("figma") || bio.contains("creative")) {
            user.setLearningStyle("Visual");
            user.setAiPersonality("Creative");
        } else if (bio.contains("theory") || bio.contains("research") || bio.contains("math") || bio.contains("science")) {
            user.setLearningStyle("Theory-focused");
            user.setAiPersonality("Analytical");
        } else {
            user.setLearningStyle("Practical");
            user.setAiPersonality("Pragmatic");
        }

        User saved = userRepository.save(user);
        
        Map<String, String> response = new HashMap<>();
        response.put("learningStyle", saved.getLearningStyle());
        response.put("aiPersonality", saved.getAiPersonality());
        response.put("message", "AI successfully analyzed profile and updated learning style indices.");
        
        return ResponseEntity.ok(response);
    }
}
