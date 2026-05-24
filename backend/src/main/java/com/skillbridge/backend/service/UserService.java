package com.skillbridge.backend.service;

import com.skillbridge.backend.model.User;
import com.skillbridge.backend.model.Project;
import com.skillbridge.backend.model.Task;
import com.skillbridge.backend.model.Internship;
import com.skillbridge.backend.model.Message;
import com.skillbridge.backend.repository.UserRepository;
import com.skillbridge.backend.repository.ProjectRepository;
import com.skillbridge.backend.repository.InternshipRepository;
import com.skillbridge.backend.repository.MessageRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private InternshipRepository internshipRepository;

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User registerUser(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email already registered!");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    public User save(User user) {
        return userRepository.save(user);
    }

    @PostConstruct
    public void seedDatabase() {
        // Only seed if empty
        if (userRepository.count() > 0) {
            return;
        }

        // 1. Seed Demo User
        User demoUser = User.builder()
                .name("Anshika Pandey")
                .email("demo@skillbridge.com")
                .password(passwordEncoder.encode("password123"))
                .role("user")
                .bio("Aspiring developer eager to learn Full-Stack technologies and exchange Python skills.")
                .skillsToTeach("Python,Data Science,SQL")
                .skillsToLearn("React,Figma,UI/UX,Spring Boot")
                .xp(240)
                .streak(5)
                .level(1)
                .coins(120)
                .points(60)
                .learningStyle("Practical")
                .aiPersonality("Pragmatic")
                .badges("👣,🔥")
                .certificatesCount(1)
                .build();
        userRepository.save(demoUser);

        // 2. Seed Mentors / Learning Partners
        User mentor1 = User.builder()
                .name("Sarah Chen")
                .email("sarah@skillbridge.com")
                .password(passwordEncoder.encode("password123"))
                .role("mentor")
                .bio("Senior Product Designer passionate about clean UI, Design Systems, and Figma mentorship.")
                .skillsToTeach("UI/UX,Figma,Design Systems,Responsive Design")
                .skillsToLearn("Python,Machine Learning,Node.js")
                .xp(1850)
                .streak(12)
                .level(4)
                .coins(340)
                .points(190)
                .learningStyle("Visual")
                .aiPersonality("Creative")
                .badges("👣,🏆,⭐")
                .certificatesCount(5)
                .build();
        userRepository.save(mentor1);

        User mentor2 = User.builder()
                .name("Alex Kumar")
                .email("alex@skillbridge.com")
                .password(passwordEncoder.encode("password123"))
                .role("mentor")
                .bio("Full Stack Engineer specializing in Spring Boot microservices and React web architectures.")
                .skillsToTeach("React,Spring Boot,Java,Microservices,Docker")
                .skillsToLearn("UI/UX,Figma,Bhojpuri")
                .xp(2900)
                .streak(28)
                .level(6)
                .coins(450)
                .points(280)
                .learningStyle("Practical")
                .aiPersonality("Analytical")
                .badges("👣,🔥,💪,⭐,🏆")
                .certificatesCount(8)
                .build();
        userRepository.save(mentor2);

        User mentor3 = User.builder()
                .name("Emma Davis")
                .email("emma@skillbridge.com")
                .password(passwordEncoder.encode("password123"))
                .role("mentor")
                .bio("DevOps Engineer and System Architect helping teams set up high scalability cloud infrastructure.")
                .skillsToTeach("Kubernetes,Docker,CI/CD,AWS,System Design")
                .skillsToLearn("Python,React")
                .xp(1200)
                .streak(3)
                .level(3)
                .coins(210)
                .points(110)
                .learningStyle("Theory-focused")
                .aiPersonality("Pragmatic")
                .badges("👣,⭐")
                .certificatesCount(3)
                .build();
        userRepository.save(mentor3);

        // 3. Seed Projects (Marketplace)
        Project proj1 = Project.builder()
                .title("AI-Powered Budget Tracker")
                .description("Building a smart web application that categorizes user expenses using machine learning embeddings and displays modern dashboards in React.")
                .creatorId(2L) // Sarah Chen
                .requiredRoles("React Developer, ML Engineer, Backend Developer")
                .status("Open")
                .githubUrl("https://github.com/sarah-design/ai-budget-tracker")
                .members("Sarah Chen (UI/UX), Emma Davis (DevOps)")
                .build();
        proj1 = projectRepository.save(proj1);

        Task task1 = Task.builder().title("Design Figma mockups and color palette").assignedTo("Sarah Chen").status("Done").xpReward(40).project(proj1).build();
        Task task2 = Task.builder().title("Set up React Boilerplate with Tailwind CSS").assignedTo("Unassigned").status("Todo").xpReward(50).project(proj1).build();
        Task task3 = Task.builder().title("Implement Spring Boot transactional database").assignedTo("Unassigned").status("Todo").xpReward(60).project(proj1).build();
        proj1.getTasks().add(task1);
        proj1.getTasks().add(task2);
        proj1.getTasks().add(task3);
        projectRepository.save(proj1);

        Project proj2 = Project.builder()
                .title("Blockchain Certificate Verifier")
                .description("A decentralized application built on Ethereum smart contracts that issues and verifies digital diplomas securely.")
                .creatorId(3L) // Alex Kumar
                .requiredRoles("Solidity Developer, Frontend Engineer, Tester")
                .status("Open")
                .githubUrl("https://github.com/alex-code/blockchain-verifier")
                .members("Alex Kumar (Backend)")
                .build();
        proj2 = projectRepository.save(proj2);
        Task task4 = Task.builder().title("Write ERC-721 smart contract for certificates").assignedTo("Alex Kumar").status("In Progress").xpReward(70).project(proj2).build();
        Task task5 = Task.builder().title("Build integration hook using Web3.js").assignedTo("Unassigned").status("Todo").xpReward(60).project(proj2).build();
        proj2.getTasks().add(task4);
        proj2.getTasks().add(task5);
        projectRepository.save(proj2);

        // 4. Seed Internships
        internshipRepository.save(Internship.builder()
                .title("Figma Component Catalog Creator")
                .company("DesignCraft Labs")
                .description("Create a fully responsive, pixel-perfect Tailwind component catalog mapped directly to standard Figma design variables.")
                .stipend(150)
                .duration("2 weeks")
                .skillsRequired("Figma, Tailwind CSS")
                .status("Open")
                .rating(4.9)
                .build());

        internshipRepository.save(Internship.builder()
                .title("Spring Boot CRUD API Refactoring")
                .company("Codex Solutions")
                .description("Optimize database queries, configure proper indexing, and document existing endpoints using Swagger OpenAPIs.")
                .stipend(300)
                .duration("3 weeks")
                .skillsRequired("Spring Boot, Java, JPA")
                .status("Open")
                .rating(4.7)
                .build());

        internshipRepository.save(Internship.builder()
                .title("SEO Optimization & Blog Integration")
                .company("EduTech Startup")
                .description("Improve page loading speed, set up structured JSON-LD schemas, and build static Markdown blog content modules.")
                .stipend(100)
                .duration("1 week")
                .skillsRequired("Next.js, SEO Basics")
                .status("Open")
                .rating(4.8)
                .build());

        // 5. Seed Space Messages
        messageRepository.save(Message.builder()
                .sender("Sarah Chen")
                .content("Welcome to the Web Dev Space! Let's share React and CSS styling tricks here.")
                .spaceId("WebDev")
                .timestamp(LocalDateTime.now().minusHours(4))
                .build());

        messageRepository.save(Message.builder()
                .sender("Alex Kumar")
                .content("Hey Sarah! Excited to be here. I'm ready to explain Spring Boot microservices configuration.")
                .spaceId("WebDev")
                .timestamp(LocalDateTime.now().minusHours(3))
                .build());

        messageRepository.save(Message.builder()
                .sender("Emma Davis")
                .content("Does anyone have a good guide for setting up CI/CD workflows for React on GitHub Actions?")
                .spaceId("WebDev")
                .timestamp(LocalDateTime.now().minusHours(1))
                .build());

        messageRepository.save(Message.builder()
                .sender("Alex Kumar")
                .content("We can easily generate quiz questionnaires on the Quiz dashboard tab. Give it a shot!")
                .spaceId("AI/ML")
                .timestamp(LocalDateTime.now().minusHours(2))
                .build());
    }
}
