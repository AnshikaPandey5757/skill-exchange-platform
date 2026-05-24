package com.skillbridge.backend.model;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "learning_paths")
public class LearningPath {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private Long userId;
    private Integer durationWeeks;
    private String difficulty;
    private Integer progress = 0;

    @OneToMany(mappedBy = "learningPath", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<Milestone> milestones = new ArrayList<>();

    public LearningPath() {}

    public LearningPath(Long id, String title, String description, Long userId, Integer durationWeeks, String difficulty, Integer progress, List<Milestone> milestones) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.userId = userId;
        this.durationWeeks = durationWeeks;
        this.difficulty = difficulty;
        this.progress = progress;
        this.milestones = milestones != null ? milestones : new ArrayList<>();
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public Integer getDurationWeeks() { return durationWeeks; }
    public void setDurationWeeks(Integer durationWeeks) { this.durationWeeks = durationWeeks; }

    public String getDifficulty() { return difficulty; }
    public void setDifficulty(String difficulty) { this.difficulty = difficulty; }

    public Integer getProgress() { return progress; }
    public void setProgress(Integer progress) { this.progress = progress; }

    public List<Milestone> getMilestones() { return milestones; }
    public void setMilestones(List<Milestone> milestones) { this.milestones = milestones; }

    // Static Builder
    public static class LearningPathBuilder {
        private Long id;
        private String title;
        private String description;
        private Long userId;
        private Integer durationWeeks;
        private String difficulty;
        private Integer progress = 0;
        private List<Milestone> milestones = new ArrayList<>();

        public LearningPathBuilder id(Long id) { this.id = id; return this; }
        public LearningPathBuilder title(String title) { this.title = title; return this; }
        public LearningPathBuilder description(String description) { this.description = description; return this; }
        public LearningPathBuilder userId(Long userId) { this.userId = userId; return this; }
        public LearningPathBuilder durationWeeks(Integer durationWeeks) { this.durationWeeks = durationWeeks; return this; }
        public LearningPathBuilder difficulty(String difficulty) { this.difficulty = difficulty; return this; }
        public LearningPathBuilder progress(Integer progress) { this.progress = progress; return this; }
        public LearningPathBuilder milestones(List<Milestone> milestones) { this.milestones = milestones; return this; }

        public LearningPath build() {
            return new LearningPath(id, title, description, userId, durationWeeks, difficulty, progress, milestones);
        }
    }

    public static LearningPathBuilder builder() {
        return new LearningPathBuilder();
    }
}
