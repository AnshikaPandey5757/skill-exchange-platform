package com.skillbridge.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "milestones")
public class Milestone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "milestone_id")
    private Long id;

    private Integer week;
    private String title;
    
    @Column(length = 1000)
    private String description;
    
    private Boolean completed = false;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "learning_path_id")
    @JsonIgnore
    private LearningPath learningPath;

    public Milestone() {}

    public Milestone(Long id, Integer week, String title, String description, Boolean completed, LearningPath learningPath) {
        this.id = id;
        this.week = week;
        this.title = title;
        this.description = description;
        this.completed = completed != null ? completed : false;
        this.learningPath = learningPath;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Integer getWeek() { return week; }
    public void setWeek(Integer week) { this.week = week; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Boolean getCompleted() { return completed; }
    public void setCompleted(Boolean completed) { this.completed = completed; }

    public LearningPath getLearningPath() { return learningPath; }
    public void setLearningPath(LearningPath learningPath) { this.learningPath = learningPath; }

    @Override
    public String toString() {
        return "Milestone{id=" + id + ", week=" + week + ", title='" + title + "'}";
    }
}
