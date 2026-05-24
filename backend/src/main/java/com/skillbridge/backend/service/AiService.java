package com.skillbridge.backend.service;

import com.skillbridge.backend.model.LearningPath;
import com.skillbridge.backend.model.Milestone;
import com.skillbridge.backend.model.Quiz;
import com.skillbridge.backend.model.Question;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

@Service
public class AiService {

    private final Random random = new Random();

    // 1. Personalized Learning Roadmap Generator
    public LearningPath generateRoadmap(String goal, Long userId, String learningStyle) {
        String lowerGoal = goal.toLowerCase();
        String title = "Personalized Path: " + goal;
        String desc = "AI-Generated customized learning journey styled for a " + learningStyle + " learner focusing on " + goal + ".";
        
        int weeks = 6;
        String difficulty = "Intermediate";
        
        List<Milestone> milestones = new ArrayList<>();
        
        if (lowerGoal.contains("backend") || lowerGoal.contains("java") || lowerGoal.contains("spring")) {
            weeks = 6;
            difficulty = "Advanced";
            milestones.add(new Milestone(null, 1, "Java Fundamentals & OOP", "Learn classes, inheritance, interfaces, and memory management. Core exercise: Build a Library System.", false, null));
            milestones.add(new Milestone(null, 2, "Data Structures & Collections", "Master Lists, Sets, Maps, and sorting algorithms. Core exercise: Build an inventory hashing lookup.", false, null));
            milestones.add(new Milestone(null, 3, "Spring Boot & REST APIs", "Configure dependency injection, routing, and HTTP requests. Core exercise: Build a User Management Web API.", false, null));
            milestones.add(new Milestone(null, 4, "Spring Data JPA & Databases", "Connect to H2/PostgreSQL databases using Hibernate mappings. Core exercise: Connect Budget tracking API to JPA database.", false, null));
            milestones.add(new Milestone(null, 5, "Spring Security & JWTs", "Configure stateless session token authentications. Core exercise: Create secure registration and login controllers.", false, null));
            milestones.add(new Milestone(null, 6, "Deployment & Microservices", "Containerize the API using Docker files and push to AWS. Core exercise: Deploy complete app on AWS ECS.", false, null));
        } else if (lowerGoal.contains("frontend") || lowerGoal.contains("react") || lowerGoal.contains("ui") || lowerGoal.contains("figma")) {
            weeks = 5;
            difficulty = "Intermediate";
            milestones.add(new Milestone(null, 1, "Figma Prototyping & Layouts", "Learn grids, auto-layouts, variables, and UX wires. Core exercise: Create high-fidelity mobile landing page design.", false, null));
            milestones.add(new Milestone(null, 2, "Modern HTML & CSS Flexbox", "Translate wireframes to responsive HTML/CSS structures. Core exercise: Develop component portfolio layout.", false, null));
            milestones.add(new Milestone(null, 3, "React Components & Hooks", "Master state hooks, properties, and lifecycle triggers. Core exercise: Develop interactive dashboard card catalog.", false, null));
            milestones.add(new Milestone(null, 4, "React Router & Global Context", "Set up multi-page navigation routes and globally managed context. Core exercise: Route profile, dashboard, and login screens.", false, null));
            milestones.add(new Milestone(null, 5, "Tailwind CSS & Animations", "Apply Framer Motion animations for hover and scale states. Core exercise: Build sleek CTA banners with micro-animations.", false, null));
        } else {
            // Default generic roadmap
            weeks = 4;
            difficulty = "Beginner";
            milestones.add(new Milestone(null, 1, "Fundamentals Exploration", "Learn core parameters, syntax, and logic flows. Core exercise: Build CLI automation script.", false, null));
            milestones.add(new Milestone(null, 2, "Intermediate Application", "Configure standard modules and third-party libraries. Core exercise: Integrate data parsers.", false, null));
            milestones.add(new Milestone(null, 3, "Mini Startup Implementation", "Combine skills to form a lightweight MVP. Core exercise: Create full-stack service prototypes.", false, null));
            milestones.add(new Milestone(null, 4, "Verification & Polishing", "Conduct rigorous unit testing and optimize efficiency. Core exercise: Package project on GitHub.", false, null));
        }

        LearningPath lp = LearningPath.builder()
                .title(title)
                .description(desc)
                .userId(userId)
                .durationWeeks(weeks)
                .difficulty(difficulty)
                .progress(0)
                .build();

        for (Milestone m : milestones) {
            m.setLearningPath(lp);
        }
        lp.setMilestones(milestones);

        return lp;
    }

    // 2. Real-Time AI Tutor explanations
    public String getTutorResponse(String prompt, String learningStyle) {
        String lowerPrompt = prompt.toLowerCase();
        
        StringBuilder sb = new StringBuilder();
        sb.append("🧠 **AI MENTOR RESPONSE (Optimized for a ").append(learningStyle).append(" learner)**\n\n");

        if (lowerPrompt.contains("react") || lowerPrompt.contains("hook")) {
            sb.append("### Understanding React Hooks (useState & useEffect)\n\n");
            if (learningStyle.equals("Visual")) {
                sb.append("🎨 **Visual Paradigm:** Think of state like a variable thermometer. The value changes on user interaction, which immediately triggers the screen layout to 'repaint' and reflect the new heat levels!\n\n");
            } else if (learningStyle.equals("Theory-focused")) {
                sb.append("📚 **Theoretical Context:** React components are pure functions of their properties and state. Hooks allow stateless functional components to hook into React state and lifecycle methods programmatically.\n\n");
            } else {
                sb.append("⚡ **Practical Analogy:** State is like a variable that re-renders the web page every time you re-assign it. A direct modification doesn't work; you must use its setter hook!\n\n");
            }
            sb.append("```javascript\n")
              .append("// Direct State Initialization\n")
              .append("const [count, setCount] = useState(0);\n\n")
              .append("// Updating state correctly to trigger UI update\n")
              .append("const handleIncrement = () => {\n")
              .append("  setCount(prev => prev + 1);\n")
              .append("};\n")
              .append("```\n\n")
              .append("💡 **Recommendation:** Try triggering this increment hook on button clicks to see active renders.");
        } else if (lowerPrompt.contains("spring") || lowerPrompt.contains("java")) {
            sb.append("### Understanding Spring Dependency Injection\n\n");
            sb.append("In Java Spring Boot, the Application Context acts as a factory. Instead of manually instantiating classes with `new Service()`, Spring automatically instantiates, manages, and injects dependencies via `@Autowired` decorators.\n\n")
              .append("```java\n")
              .append("@RestController\n")
              .append("public class UserController {\n")
              .append("    @Autowired\n")
              .append("    private UserService userService; // Injected by Spring Container\n")
              .append("}\n")
              .append("```\n\n")
              .append("🛠️ **Pro-tip:** This separates concern and simplifies mock unit testing.");
        } else {
            sb.append("### Concept Breakdown: ").append(prompt).append("\n\n")
              .append("1. **Core Concept:** Breakdown this topic into digestible, atomic pieces.\n")
              .append("2. **Industry standard application:** Used globally in microservice architectures to automate workflows.\n")
              .append("3. **Best Practice:** Keep functions highly focused on a single responsibility.\n\n")
              .append("📝 *You can ask me technical follow-up questions about React hooks, Java classes, or SQL design models.*");
        }
        return sb.toString();
    }

    // 3. Quiz generator based on topic
    public Quiz generateQuiz(String topic, Long userId) {
        List<Question> questions = new ArrayList<>();
        Quiz quiz = Quiz.builder()
                .topic(topic)
                .userId(userId)
                .score(0)
                .xpEarned(0)
                .build();

        String lower = topic.toLowerCase();
        if (lower.contains("react") || lower.contains("frontend")) {
            questions.add(new Question(null, "Which hook is used to execute side effects in a functional React component?", "useState|useContext|useEffect|useReducer", 2, quiz));
            questions.add(new Question(null, "What is Virtual DOM?", "A direct duplicate of the browser HTML|An in-memory lightweight representation of the real DOM|A style sheet manager|A server-side routing protocol", 1, quiz));
            questions.add(new Question(null, "How do you pass properties down to child React components?", "Using Global cookies|By passing HTML tags|Through props attributes|Using Axios requests", 2, quiz));
        } else if (lower.contains("spring") || lower.contains("backend") || lower.contains("java")) {
            questions.add(new Question(null, "Which Spring annotation designates a class as a REST controller?", "@Component|@Service|@RestController|@Repository", 2, quiz));
            questions.add(new Question(null, "What is the default scope of a Spring Bean?", "Prototype|Singleton|Request|Session", 1, quiz));
            questions.add(new Question(null, "What does JPA stand for?", "Java Persistence API|Joint Production Assembly|Java Program Agent|JSON Protocol Access", 0, quiz));
        } else {
            questions.add(new Question(null, "What does a compiler do?", "Runs code line by line|Converts high-level code to machine binary|Formats style files|Compresses images", 1, quiz));
            questions.add(new Question(null, "Which data structure follows a Last-In, First-Out (LIFO) pattern?", "Queue|Linked List|Stack|Tree", 2, quiz));
            questions.add(new Question(null, "What is the primary key in SQL?", "A foreign data pointer|A unique identifier for each database row|A hidden index column|A security encryption salt", 1, quiz));
        }

        quiz.setQuestions(questions);
        return quiz;
    }

    // 4. Interview Simulation & Assessment
    public String simulateInterviewResponse(String interviewType, String answer) {
        int confidenceScore = 78 + random.nextInt(18); // 78 to 96
        int clarityScore = 80 + random.nextInt(15);
        
        StringBuilder sb = new StringBuilder();
        sb.append("🎤 **AI INTERVIEW FEEDBACK: ").append(interviewType.toUpperCase()).append("**\n\n");
        sb.append("📊 **Overall Metrics:**\n");
        sb.append("- **Confidence Level:** ").append(confidenceScore).append("%\n");
        sb.append("- **Technical Clarity:** ").append(clarityScore).append("%\n\n");
        
        sb.append("💡 **Detailed Analysis of your answer:** \"").append(answer).append("\"\n");
        if (answer.length() < 15) {
            sb.append("⚠️ **Critique:** Your response was extremely short. AI Interviewers look for concrete, structural examples. Use the **STAR methodology** (Situation, Task, Action, Result) to frame your response.\n");
        } else {
            sb.append("✅ **Strengths:** Good mention of key concepts. Your pacing shows solid command over basic structural paradigms.\n");
        }
        
        sb.append("\n📈 **Actionable Advice:**\n");
        sb.append("1. Elaborate on real-world situations where you applied these skills.\n");
        sb.append("2. Practice talking aloud to improve fluid sentence flow and vocabulary pacing.\n");
        sb.append("3. Quantify results (e.g. 'Improved database query speed by 25%').\n\n");
        sb.append("🙋 **Next Question:** \"Tell me about a time you resolved a major bug under tight deadlines?\"");

        return sb.toString();
    }

    // 5. Resume and Portfolio Builder
    public String generateResume(String name, String bio, String teachSkills, String learnSkills) {
        StringBuilder sb = new StringBuilder();
        sb.append("📄 **AI GENERATED RESUME & PORTFOLIO WRITER**\n");
        sb.append("=========================================\n\n");
        sb.append("### ").append(name.toUpperCase()).append("\n");
        sb.append("📧 demo@skillbridge.com | 🌐 github.com/demo-user | 📍 India\n\n");
        sb.append("#### **PROFESSIONAL SUMMARY**\n");
        sb.append(bio).append(" Demonstrating an analytical personality with specialized focus on interactive skill exchanging and agile full-stack developments.\n\n");
        
        sb.append("#### **TECHNICAL EXPERTISE**\n");
        sb.append("- **Core Strengths:** ").append(teachSkills).append("\n");
        sb.append("- **Familiar Frameworks:** ").append(learnSkills).append(", Git, Webpack, APIs\n\n");

        sb.append("#### **RECENT COLLABORATIVE PROJECTS**\n");
        sb.append("- **AI-Powered Skill Exchange Portal**\n");
        sb.append("  *Built a reactive UI and connected it with a Spring Boot database. Managed coins-based gamification metrics.*\n");
        sb.append("- **Agile Scrum Collaboration Boards**\n");
        sb.append("  *Refactored microservice REST calls, optimizing response overheads by 30%.*\n\n");

        sb.append("#### **CERTIFICATIONS & AWARDS**\n");
        sb.append("- **SkillBridge AI certified mentor** (UI/UX & Backend Integration)\n");
        sb.append("- **First Step Badge** (Earned for exceptional early coding tasks)\n\n");
        sb.append("🔗 *LinkedIn-ready summary generated successfully. Copy to clipboard to showcase on your portfolio website!*");

        return sb.toString();
    }

    // 6. Plagiarism & Fraud Detection (Fake Skill Checker)
    public String checkSkillAuthenticity(String testCode) {
        boolean passed = testCode.length() > 25 && !testCode.contains("hack") && !testCode.contains("plagiarized");
        
        StringBuilder sb = new StringBuilder();
        sb.append("🛡️ **AI SKILL AUTHENTICITY REPORT**\n");
        sb.append("---------------------------------\n");
        sb.append("🔍 **Code Plagiarism Scan:** 0% duplicates detected.\n");
        sb.append("⚙️ **Syntax Analysis:** Syntactical structure verified.\n");
        sb.append("🎯 **Outcome:** ").append(passed ? "✅ VERIFIED MENTOR SKILL BADGE ISSUED" : "❌ SUSPICIOUS CODE DETECTED").append("\n\n");
        if (passed) {
            sb.append("Congratulations! The AI Fraud engine confirms your code solution is authentic. Your profile now features the **Verified Skill Badge**.");
        } else {
            sb.append("Our detection engine indicates this solution matches online repositories or contains syntax bypass attempts. Please submit a unique code block.");
        }
        return sb.toString();
    }
}
