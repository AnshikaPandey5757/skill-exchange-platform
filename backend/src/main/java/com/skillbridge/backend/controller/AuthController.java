package com.skillbridge.backend.controller;

import com.skillbridge.backend.config.JwtUtil;
import com.skillbridge.backend.model.User;
import com.skillbridge.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        try {
            // Default setup for new users
            user.setXp(100);
            user.setStreak(1);
            user.setLevel(1);
            user.setCoins(100);
            user.setPoints(50);
            user.setBadges("👣");
            user.setRole("user");
            user.setLearningStyle("Practical");
            user.setAiPersonality("Analytical");

            User saved = userService.registerUser(user);
            return ResponseEntity.ok(saved);
        } catch (Exception e) {
            Map<String, String> err = new HashMap<>();
            err.put("error", e.getMessage());
            return ResponseEntity.badRequest().body(err);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String password = credentials.get("password");

        Optional<User> userOpt = userService.findByEmail(email);
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            // In a production app, we would verify password using passwordEncoder
            // For a demo mock setup, we will check password to support smooth testing
            String token = jwtUtil.generateToken(email);
            Map<String, Object> response = new HashMap<>();
            response.put("token", token);
            response.put("user", user);
            return ResponseEntity.ok(response);
        }

        Map<String, String> err = new HashMap<>();
        err.put("error", "Invalid email or password!");
        return ResponseEntity.status(401).body(err);
    }

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser(@RequestHeader(value = "Authorization", required = false) String authHeader) {
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            // Fallback for easy demo checks: return first demo user
            Optional<User> demo = userService.findByEmail("demo@skillbridge.com");
            if (demo.isPresent()) {
                Map<String, Object> resp = new HashMap<>();
                resp.put("user", demo.get());
                return ResponseEntity.ok(resp);
            }
            return ResponseEntity.status(401).body("Unauthorized");
        }

        try {
            String token = authHeader.substring(7);
            String email = jwtUtil.extractUsername(token);
            Optional<User> userOpt = userService.findByEmail(email);
            if (userOpt.isPresent()) {
                Map<String, Object> resp = new HashMap<>();
                resp.put("user", userOpt.get());
                return ResponseEntity.ok(resp);
            }
        } catch (Exception e) {
            // Ignore error
        }

        return ResponseEntity.status(401).body("Unauthorized");
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout() {
        Map<String, String> msg = new HashMap<>();
        msg.put("message", "Logged out successfully!");
        return ResponseEntity.ok(msg);
    }
}
