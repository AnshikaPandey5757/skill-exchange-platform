package com.skillbridge.backend.service;

import com.skillbridge.backend.model.User;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

@Service
public class MatchingService {

    public int calculateMatchScore(User user1, User user2) {
        if (user1.getId().equals(user2.getId())) {
            return 0;
        }

        Set<String> u1Teach = parseSkills(user1.getSkillsToTeach());
        Set<String> u1Learn = parseSkills(user1.getSkillsToLearn());
        Set<String> u2Teach = parseSkills(user2.getSkillsToTeach());
        Set<String> u2Learn = parseSkills(user2.getSkillsToLearn());

        int score = 40; // baseline compatibility

        // Intersection 1: User 1 teaches what User 2 wants to learn
        int matchCount1 = 0;
        for (String skill : u1Teach) {
            if (u2Learn.contains(skill)) {
                matchCount1++;
            }
        }

        // Intersection 2: User 1 wants to learn what User 2 teaches
        int matchCount2 = 0;
        for (String skill : u1Learn) {
            if (u2Teach.contains(skill)) {
                matchCount2++;
            }
        }

        score += (matchCount1 * 25) + (matchCount2 * 25);

        // Cap score at 98% (no perfect 100% to simulate AI evaluation margins)
        return Math.min(score, 98);
    }

    private Set<String> parseSkills(String skillStr) {
        Set<String> set = new HashSet<>();
        if (skillStr == null || skillStr.trim().isEmpty()) {
            return set;
        }
        String[] parts = skillStr.split(",");
        for (String part : parts) {
            set.add(part.trim().toLowerCase());
        }
        return set;
    }
}
