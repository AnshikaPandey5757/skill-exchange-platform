package com.skillbridge.backend.controller;

import com.skillbridge.backend.model.LearningPath;
import com.skillbridge.backend.model.Milestone;
import com.skillbridge.backend.model.User;
import com.skillbridge.backend.repository.LearningPathRepository;
import com.skillbridge.backend.repository.UserRepository;
import com.skillbridge.backend.service.AiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/learning-paths")
public class LearningPathController {

    @Autowired
    private LearningPathRepository learningPathRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AiService aiService;

    // Fetch user paths
    @GetMapping("/user")
    public ResponseEntity<?> getUserPaths(@RequestParam(name = "userId", defaultValue = "1") Long userId) {
        List<LearningPath> paths = learningPathRepository.findByUserId(userId);
        return ResponseEntity.ok(paths);
    }

    // Generate personalized roadmaps via AI
    @PostMapping("/generate")
    public ResponseEntity<?> generateRoadmap(@RequestBody Map<String, String> payload) {
        Long userId = Long.parseLong(payload.getOrDefault("userId", "1"));
        String goal = payload.get("goal");
        
        if (goal == null || goal.trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Goal description cannot be empty!");
        }

        Optional<User> userOpt = userRepository.findById(userId);
        String style = "Practical";
        if (userOpt.isPresent()) {
            style = userOpt.get().getLearningStyle();
        }

        LearningPath generated = aiService.generateRoadmap(goal, userId, style);
        LearningPath saved = learningPathRepository.save(generated);
        return ResponseEntity.ok(saved);
    }

    // Complete milestone
    @PostMapping("/milestone/complete")
    public ResponseEntity<?> completeMilestone(@RequestBody Map<String, Long> payload) {
        Long pathId = payload.get("pathId");
        Long milestoneId = payload.get("milestoneId");

        Optional<LearningPath> pathOpt = learningPathRepository.findById(pathId);
        if (!pathOpt.isPresent()) {
            return ResponseEntity.badRequest().body("Learning path not found!");
        }

        LearningPath path = pathOpt.get();
        List<Milestone> milestones = path.getMilestones();
        
        Milestone targetMilestone = null;
        for (Milestone m : milestones) {
            if (m.getId().equals(milestoneId)) {
                m.setCompleted(true);
                targetMilestone = m;
                break;
            }
        }

        if (targetMilestone == null) {
            return ResponseEntity.badRequest().body("Milestone not found in this path!");
        }

        // Calculate progress
        long completedCount = milestones.stream().filter(Milestone::getCompleted).count();
        int progress = (int) (((double) completedCount / milestones.size()) * 100);
        path.setProgress(progress);
        learningPathRepository.save(path);

        // Gamify: Add 50 XP to the user
        Optional<User> userOpt = userRepository.findById(path.getUserId());
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            user.setXp(user.getXp() + 50);
            
            // Check Level Up
            int newLevel = (user.getXp() / 500) + 1;
            if (newLevel > user.getLevel()) {
                user.setLevel(newLevel);
                user.setBadges(user.getBadges() + ",🏆"); // Reward a milestone champion badge
            }
            
            userRepository.save(user);
        }

        Map<String, Object> resp = new HashMap<>();
        resp.put("progress", progress);
        resp.put("message", "Milestone marked completed. +50 XP rewarded!");
        return ResponseEntity.ok(resp);
    }
}
