package com.skillbridge.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String assignedTo; // username or "Unassigned"
    private String status = "Todo"; // Todo, In Progress, Done
    private Integer xpReward = 50;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "project_id")
    @JsonIgnore
    private Project project;

    public Task() {}

    public Task(Long id, String title, String assignedTo, String status, Integer xpReward, Project project) {
        this.id = id;
        this.title = title;
        this.assignedTo = assignedTo != null ? assignedTo : "Unassigned";
        this.status = status != null ? status : "Todo";
        this.xpReward = xpReward != null ? xpReward : 50;
        this.project = project;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getAssignedTo() { return assignedTo; }
    public void setAssignedTo(String assignedTo) { this.assignedTo = assignedTo; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public Integer getXpReward() { return xpReward; }
    public void setXpReward(Integer xpReward) { this.xpReward = xpReward; }

    public Project getProject() { return project; }
    public void setProject(Project project) { this.project = project; }

    // Static Builder
    public static class TaskBuilder {
        private Long id;
        private String title;
        private String assignedTo = "Unassigned";
        private String status = "Todo";
        private Integer xpReward = 50;
        private Project project;

        public TaskBuilder id(Long id) { this.id = id; return this; }
        public TaskBuilder title(String title) { this.title = title; return this; }
        public TaskBuilder assignedTo(String assignedTo) { this.assignedTo = assignedTo; return this; }
        public TaskBuilder status(String status) { this.status = status; return this; }
        public TaskBuilder xpReward(Integer xpReward) { this.xpReward = xpReward; return this; }
        public TaskBuilder project(Project project) { this.project = project; return this; }

        public Task build() {
            return new Task(id, title, assignedTo, status, xpReward, project);
        }
    }

    public static TaskBuilder builder() {
        return new TaskBuilder();
    }

    @Override
    public String toString() {
        return "Task{id=" + id + ", title='" + title + "', status='" + status + "'}";
    }
}
