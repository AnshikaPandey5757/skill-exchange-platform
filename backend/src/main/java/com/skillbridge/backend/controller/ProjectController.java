package com.skillbridge.backend.controller;

import com.skillbridge.backend.model.Project;
import com.skillbridge.backend.model.Task;
import com.skillbridge.backend.model.User;
import com.skillbridge.backend.repository.ProjectRepository;
import com.skillbridge.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private UserRepository userRepository;

    // Fetch all projects
    @GetMapping
    public ResponseEntity<List<Project>> getAllProjects() {
        return ResponseEntity.ok(projectRepository.findAll());
    }

    // Create a project listing
    @PostMapping("/create")
    public ResponseEntity<?> createProject(@RequestBody Project project) {
        if (project.getTitle() == null || project.getTitle().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Project Title cannot be empty!");
        }
        
        project.setStatus("Open");
        
        // Add a default unassigned setup task
        Task initialTask = Task.builder()
                .title("Initial codebase configuration & architectural blueprint")
                .assignedTo("Unassigned")
                .status("Todo")
                .xpReward(50)
                .project(project)
                .build();
                
        project.getTasks().add(initialTask);
        Project saved = projectRepository.save(project);
        return ResponseEntity.ok(saved);
    }

    // Join a startup team cofounder/dev roster
    @PostMapping("/join")
    public ResponseEntity<?> joinProject(@RequestBody Map<String, Object> payload) {
        Long projectId = Long.parseLong(payload.get("projectId").toString());
        Long userId = Long.parseLong(payload.get("userId").toString());
        String roleChosen = payload.getOrDefault("role", "Developer").toString();

        Optional<Project> projOpt = projectRepository.findById(projectId);
        if (!projOpt.isPresent()) {
            return ResponseEntity.badRequest().body("Project not found!");
        }

        Optional<User> userOpt = userRepository.findById(userId);
        if (!userOpt.isPresent()) {
            return ResponseEntity.badRequest().body("User not found!");
        }

        Project proj = projOpt.get();
        User user = userOpt.get();

        String members = proj.getMembers();
        String memberName = user.getName() + " (" + roleChosen + ")";
        
        if (members == null || members.trim().isEmpty()) {
            proj.setMembers(memberName);
        } else if (members.contains(user.getName())) {
            return ResponseEntity.badRequest().body("You are already a member of this project!");
        } else {
            proj.setMembers(members + ", " + memberName);
        }

        proj.setStatus("In-Progress");
        projectRepository.save(proj);

        // Gamify: Award 100 XP for joining a team
        user.setXp(user.getXp() + 100);
        userRepository.save(user);

        return ResponseEntity.ok(proj);
    }

    // Update Scrum task state
    @PostMapping("/task/update")
    public ResponseEntity<?> updateTask(@RequestBody Map<String, Object> payload) {
        Long projectId = Long.parseLong(payload.get("projectId").toString());
        Long taskId = Long.parseLong(payload.get("taskId").toString());
        String newStatus = payload.get("status").toString(); // Todo, In Progress, Done
        String assignedUser = payload.getOrDefault("username", "Unassigned").toString();

        Optional<Project> projOpt = projectRepository.findById(projectId);
        if (!projOpt.isPresent()) {
            return ResponseEntity.badRequest().body("Project not found!");
        }

        Project proj = projOpt.get();
        Task targetTask = null;

        for (Task t : proj.getTasks()) {
            if (t.getId().equals(taskId)) {
                t.setStatus(newStatus);
                t.setAssignedTo(assignedUser);
                targetTask = t;
                break;
            }
        }

        if (targetTask == null) {
            return ResponseEntity.badRequest().body("Task not found in this project!");
        }

        projectRepository.save(proj);

        // Gamify: If task is completed, reward user XP
        if ("Done".equalsIgnoreCase(newStatus)) {
            Optional<User> userOpt = userRepository.findAll().stream()
                    .filter(u -> u.getName().equalsIgnoreCase(assignedUser))
                    .findFirst();
            if (userOpt.isPresent()) {
                User u = userOpt.get();
                u.setXp(u.getXp() + targetTask.getXpReward());
                // Reward Skill Coins (5 Skill Coins per completed task!)
                u.setCoins(u.getCoins() + 5);
                userRepository.save(u);
            }
        }

        Map<String, String> resp = new HashMap<>();
        resp.put("message", "Task successfully updated. Progress persisted.");
        return ResponseEntity.ok(resp);
    }
}
