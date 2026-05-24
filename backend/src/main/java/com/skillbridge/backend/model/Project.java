package com.skillbridge.backend.model;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(length = 2000)
    private String description;

    private Long creatorId;
    private String requiredRoles;
    private String status = "Open";
    private String githubUrl;
    
    @Column(length = 1000)
    private String members;

    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<Task> tasks = new ArrayList<>();

    public Project() {}

    public Project(Long id, String title, String description, Long creatorId, String requiredRoles, String status, String githubUrl, String members, List<Task> tasks) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.creatorId = creatorId;
        this.requiredRoles = requiredRoles;
        this.status = status != null ? status : "Open";
        this.githubUrl = githubUrl;
        this.members = members;
        this.tasks = tasks != null ? tasks : new ArrayList<>();
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Long getCreatorId() { return creatorId; }
    public void setCreatorId(Long creatorId) { this.creatorId = creatorId; }

    public String getRequiredRoles() { return requiredRoles; }
    public void setRequiredRoles(String requiredRoles) { this.requiredRoles = requiredRoles; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getGithubUrl() { return githubUrl; }
    public void setGithubUrl(String githubUrl) { this.githubUrl = githubUrl; }

    public String getMembers() { return members; }
    public void setMembers(String members) { this.members = members; }

    public List<Task> getTasks() { return tasks; }
    public void setTasks(List<Task> tasks) { this.tasks = tasks; }

    // Static Builder
    public static class ProjectBuilder {
        private Long id;
        private String title;
        private String description;
        private Long creatorId;
        private String requiredRoles;
        private String status = "Open";
        private String githubUrl;
        private String members;
        private List<Task> tasks = new ArrayList<>();

        public ProjectBuilder id(Long id) { this.id = id; return this; }
        public ProjectBuilder title(String title) { this.title = title; return this; }
        public ProjectBuilder description(String description) { this.description = description; return this; }
        public ProjectBuilder creatorId(Long creatorId) { this.creatorId = creatorId; return this; }
        public ProjectBuilder requiredRoles(String requiredRoles) { this.requiredRoles = requiredRoles; return this; }
        public ProjectBuilder status(String status) { this.status = status; return this; }
        public ProjectBuilder githubUrl(String githubUrl) { this.githubUrl = githubUrl; return this; }
        public ProjectBuilder members(String members) { this.members = members; return this; }
        public ProjectBuilder tasks(List<Task> tasks) { this.tasks = tasks; return this; }

        public Project build() {
            return new Project(id, title, description, creatorId, requiredRoles, status, githubUrl, members, tasks);
        }
    }

    public static ProjectBuilder builder() {
        return new ProjectBuilder();
    }
}
