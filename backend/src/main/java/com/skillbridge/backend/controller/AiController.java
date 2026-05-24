package com.skillbridge.backend.controller;

import com.skillbridge.backend.model.Quiz;
import com.skillbridge.backend.model.User;
import com.skillbridge.backend.repository.QuizRepository;
import com.skillbridge.backend.repository.UserRepository;
import com.skillbridge.backend.service.AiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/ai")
public class AiController {

    @Autowired
    private AiService aiService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private QuizRepository quizRepository;

    // AI Tutor Explainer Endpoint
    @PostMapping("/tutor")
    public ResponseEntity<?> askTutor(@RequestBody Map<String, String> payload) {
        Long userId = Long.parseLong(payload.getOrDefault("userId", "1"));
        String prompt = payload.get("prompt");

        if (prompt == null || prompt.trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Prompt query cannot be empty!");
        }

        Optional<User> userOpt = userRepository.findById(userId);
        String learningStyle = "Practical";
        if (userOpt.isPresent()) {
            learningStyle = userOpt.get().getLearningStyle();
        }

        String aiResponse = aiService.getTutorResponse(prompt, learningStyle);
        Map<String, String> res = new HashMap<>();
        res.put("response", aiResponse);
        return ResponseEntity.ok(res);
    }

    // Dynamic Quiz Generator Endpoint
    @PostMapping("/quiz/generate")
    public ResponseEntity<?> generateQuiz(@RequestBody Map<String, String> payload) {
        Long userId = Long.parseLong(payload.getOrDefault("userId", "1"));
        String topic = payload.getOrDefault("topic", "React Basics");

        Quiz quiz = aiService.generateQuiz(topic, userId);
        Quiz saved = quizRepository.save(quiz);
        return ResponseEntity.ok(saved);
    }

    // Resume / Portfolio Builder Endpoint
    @PostMapping("/resume/generate")
    public ResponseEntity<?> buildResume(@RequestBody Map<String, String> payload) {
        Long userId = Long.parseLong(payload.getOrDefault("userId", "1"));
        Optional<User> userOpt = userRepository.findById(userId);
        if (!userOpt.isPresent()) {
            return ResponseEntity.badRequest().body("User not found!");
        }

        User user = userOpt.get();
        String resume = aiService.generateResume(
                user.getName(),
                user.getBio() != null ? user.getBio() : "Aspiring technology learner.",
                user.getSkillsToTeach() != null ? user.getSkillsToTeach() : "Software engineering",
                user.getSkillsToLearn() != null ? user.getSkillsToLearn() : "UI/UX, Frontend basics"
        );

        user.setResumeSummary(resume);
        userRepository.save(user);

        Map<String, String> resp = new HashMap<>();
        resp.put("resume", resume);
        return ResponseEntity.ok(resp);
    }

    // Interview Simulator Endpoint
    @PostMapping("/interview/simulate")
    public ResponseEntity<?> simulateInterview(@RequestBody Map<String, String> payload) {
        String interviewType = payload.getOrDefault("interviewType", "Technical");
        String answer = payload.getOrDefault("answer", "");

        String feedback = aiService.simulateInterviewResponse(interviewType, answer);
        Map<String, String> resp = new HashMap<>();
        resp.put("feedback", feedback);
        return ResponseEntity.ok(resp);
    }

    // Anti-Fraud / Skill Duplications scan endpoint
    @PostMapping("/fraud/detect")
    public ResponseEntity<?> scanFraudCode(@RequestBody Map<String, String> payload) {
        String code = payload.getOrDefault("code", "");
        
        String report = aiService.checkSkillAuthenticity(code);
        Map<String, String> resp = new HashMap<>();
        resp.put("report", report);
        return ResponseEntity.ok(resp);
    }
}
