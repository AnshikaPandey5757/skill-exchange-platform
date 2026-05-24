package com.skillbridge.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    private String role; // user, mentor, admin
    private String bio;

    @Column(length = 1000)
    private String skillsToTeach; // comma-separated

    @Column(length = 1000)
    private String skillsToLearn; // comma-separated

    // Gamification
    private Integer xp = 0;
    private Integer streak = 0;
    private Integer level = 1;
    private Integer coins = 100;
    private Integer points = 50;

    // AI Detected
    private String learningStyle = "Practical";
    private String aiPersonality = "Analytical";

    @Lob
    private String resumeSummary;
    
    @Lob
    private String portfolioData;

    private Integer certificatesCount = 0;

    @Column(length = 2000)
    private String badges = "👣";

    // Constructors
    public User() {}

    public User(Long id, String name, String email, String password, String role, String bio, 
                String skillsToTeach, String skillsToLearn, Integer xp, Integer streak, 
                Integer level, Integer coins, Integer points, String learningStyle, 
                String aiPersonality, String resumeSummary, String portfolioData, 
                Integer certificatesCount, String badges) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.bio = bio;
        this.skillsToTeach = skillsToTeach;
        this.skillsToLearn = skillsToLearn;
        this.xp = xp;
        this.streak = streak;
        this.level = level;
        this.coins = coins;
        this.points = points;
        this.learningStyle = learningStyle;
        this.aiPersonality = aiPersonality;
        this.resumeSummary = resumeSummary;
        this.portfolioData = portfolioData;
        this.certificatesCount = certificatesCount;
        this.badges = badges;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public String getBio() { return bio; }
    public void setBio(String bio) { this.bio = bio; }

    public String getSkillsToTeach() { return skillsToTeach; }
    public void setSkillsToTeach(String skillsToTeach) { this.skillsToTeach = skillsToTeach; }

    public String getSkillsToLearn() { return skillsToLearn; }
    public void setSkillsToLearn(String skillsToLearn) { this.skillsToLearn = skillsToLearn; }

    public Integer getXp() { return xp; }
    public void setXp(Integer xp) { this.xp = xp; }

    public Integer getStreak() { return streak; }
    public void setStreak(Integer streak) { this.streak = streak; }

    public Integer getLevel() { return level; }
    public void setLevel(Integer level) { this.level = level; }

    public Integer getCoins() { return coins; }
    public void setCoins(Integer coins) { this.coins = coins; }

    public Integer getPoints() { return points; }
    public void setPoints(Integer points) { this.points = points; }

    public String getLearningStyle() { return learningStyle; }
    public void setLearningStyle(String learningStyle) { this.learningStyle = learningStyle; }

    public String getAiPersonality() { return aiPersonality; }
    public void setAiPersonality(String aiPersonality) { this.aiPersonality = aiPersonality; }

    public String getResumeSummary() { return resumeSummary; }
    public void setResumeSummary(String resumeSummary) { this.resumeSummary = resumeSummary; }

    public String getPortfolioData() { return portfolioData; }
    public void setPortfolioData(String portfolioData) { this.portfolioData = portfolioData; }

    public Integer getCertificatesCount() { return certificatesCount; }
    public void setCertificatesCount(Integer certificatesCount) { this.certificatesCount = certificatesCount; }

    public String getBadges() { return badges; }
    public void setBadges(String badges) { this.badges = badges; }

    // Static Builder Class
    public static class UserBuilder {
        private Long id;
        private String name;
        private String email;
        private String password;
        private String role;
        private String bio;
        private String skillsToTeach;
        private String skillsToLearn;
        private Integer xp = 0;
        private Integer streak = 0;
        private Integer level = 1;
        private Integer coins = 100;
        private Integer points = 50;
        private String learningStyle = "Practical";
        private String aiPersonality = "Analytical";
        private String resumeSummary;
        private String portfolioData;
        private Integer certificatesCount = 0;
        private String badges = "👣";

        public UserBuilder id(Long id) { this.id = id; return this; }
        public UserBuilder name(String name) { this.name = name; return this; }
        public UserBuilder email(String email) { this.email = email; return this; }
        public UserBuilder password(String password) { this.password = password; return this; }
        public UserBuilder role(String role) { this.role = role; return this; }
        public UserBuilder bio(String bio) { this.bio = bio; return this; }
        public UserBuilder skillsToTeach(String skillsToTeach) { this.skillsToTeach = skillsToTeach; return this; }
        public UserBuilder skillsToLearn(String skillsToLearn) { this.skillsToLearn = skillsToLearn; return this; }
        public UserBuilder xp(Integer xp) { this.xp = xp; return this; }
        public UserBuilder streak(Integer streak) { this.streak = streak; return this; }
        public UserBuilder level(Integer level) { this.level = level; return this; }
        public UserBuilder coins(Integer coins) { this.coins = coins; return this; }
        public UserBuilder points(Integer points) { this.points = points; return this; }
        public UserBuilder learningStyle(String learningStyle) { this.learningStyle = learningStyle; return this; }
        public UserBuilder aiPersonality(String aiPersonality) { this.aiPersonality = aiPersonality; return this; }
        public UserBuilder resumeSummary(String resumeSummary) { this.resumeSummary = resumeSummary; return this; }
        public UserBuilder portfolioData(String portfolioData) { this.portfolioData = portfolioData; return this; }
        public UserBuilder certificatesCount(Integer certificatesCount) { this.certificatesCount = certificatesCount; return this; }
        public UserBuilder badges(String badges) { this.badges = badges; return this; }

        public User build() {
            return new User(id, name, email, password, role, bio, skillsToTeach, skillsToLearn, xp, streak, level, coins, points, learningStyle, aiPersonality, resumeSummary, portfolioData, certificatesCount, badges);
        }
    }

    public static UserBuilder builder() {
        return new UserBuilder();
    }
}
