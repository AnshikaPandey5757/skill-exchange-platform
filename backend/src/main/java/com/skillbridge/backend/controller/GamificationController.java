package com.skillbridge.backend.controller;

import com.skillbridge.backend.model.User;
import com.skillbridge.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/gamification")
public class GamificationController {

    @Autowired
    private UserRepository userRepository;

    // Leaderboard sorted by XP
    @GetMapping("/leaderboard")
    public ResponseEntity<List<User>> getLeaderboard() {
        List<User> users = userRepository.findAll();
        // Sort by XP descending
        users.sort((u1, u2) -> Integer.compare(u2.getXp(), u1.getXp()));
        return ResponseEntity.ok(users);
    }

    // Spend Skill Coins in Rewards Shop
    @PostMapping("/shop/buy")
    public ResponseEntity<?> buyReward(@RequestBody Map<String, Object> payload) {
        Long userId = Long.parseLong(payload.get("userId").toString());
        String item = payload.get("item").toString(); // premium_mentor, blockchain_cert, ai_tutor
        int price = Integer.parseInt(payload.get("price").toString());

        Optional<User> userOpt = userRepository.findById(userId);
        if (!userOpt.isPresent()) {
            return ResponseEntity.badRequest().body("User not found!");
        }

        User user = userOpt.get();
        if (user.getCoins() < price) {
            return ResponseEntity.badRequest().body("Insufficient Skill Coins! Teach others or complete internships to earn more coins.");
        }

        // Deduct coins
        user.setCoins(user.getCoins() - price);

        String badgeAwarded = "";
        if ("blockchain_cert".equalsIgnoreCase(item)) {
            user.setCertificatesCount(user.getCertificatesCount() + 1);
            badgeAwarded = "⛓️"; // Blockchain certificate badge
            user.setBadges(user.getBadges() + ",⛓️");
        } else if ("premium_mentor".equalsIgnoreCase(item)) {
            badgeAwarded = "🎓"; // Scholar/Mentor access badge
            user.setBadges(user.getBadges() + ",🎓");
        } else {
            badgeAwarded = "🤖"; // AI Assistant badge
            user.setBadges(user.getBadges() + ",🤖");
        }

        userRepository.save(user);

        Map<String, Object> resp = new HashMap<>();
        resp.put("remainingCoins", user.getCoins());
        resp.put("certificatesCount", user.getCertificatesCount());
        resp.put("badges", user.getBadges());
        resp.put("message", "Purchase successful! Unlocked premium item. " + (badgeAwarded.isEmpty() ? "" : "Earned badge " + badgeAwarded));
        return ResponseEntity.ok(resp);
    }

    // Add XP manually (e.g. hackathon sprint or quiz completed)
    @PostMapping("/add-xp")
    public ResponseEntity<?> addXP(@RequestBody Map<String, Object> payload) {
        Long userId = Long.parseLong(payload.get("userId").toString());
        int amount = Integer.parseInt(payload.get("amount").toString());

        Optional<User> userOpt = userRepository.findById(userId);
        if (!userOpt.isPresent()) {
            return ResponseEntity.badRequest().body("User not found!");
        }

        User user = userOpt.get();
        user.setXp(user.getXp() + amount);

        // Check level thresholds (500 XP per level)
        int newLevel = (user.getXp() / 500) + 1;
        boolean levelUp = false;
        if (newLevel > user.getLevel()) {
            user.setLevel(newLevel);
            levelUp = true;
            user.setBadges(user.getBadges() + ",⭐"); // Level up badge
        }

        userRepository.save(user);

        Map<String, Object> resp = new HashMap<>();
        resp.put("xp", user.getXp());
        resp.put("level", user.getLevel());
        resp.put("levelUp", levelUp);
        resp.put("message", "XP successfully incremented. " + (levelUp ? "LEVEL UP! 🎉" : ""));
        return ResponseEntity.ok(resp);
    }
}
