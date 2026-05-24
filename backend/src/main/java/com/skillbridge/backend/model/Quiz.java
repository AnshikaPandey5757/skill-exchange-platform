package com.skillbridge.backend.model;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "quizzes")
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String topic;
    private Integer score = 0;
    private Integer xpEarned = 0;
    private Long userId;

    @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<Question> questions = new ArrayList<>();

    public Quiz() {}

    public Quiz(Long id, String topic, Integer score, Integer xpEarned, Long userId, List<Question> questions) {
        this.id = id;
        this.topic = topic;
        this.score = score;
        this.xpEarned = xpEarned;
        this.userId = userId;
        this.questions = questions != null ? questions : new ArrayList<>();
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTopic() { return topic; }
    public void setTopic(String topic) { this.topic = topic; }

    public Integer getScore() { return score; }
    public void setScore(Integer score) { this.score = score; }

    public Integer getXpEarned() { return xpEarned; }
    public void setXpEarned(Integer xpEarned) { this.xpEarned = xpEarned; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public List<Question> getQuestions() { return questions; }
    public void setQuestions(List<Question> questions) { this.questions = questions; }

    // Static Builder
    public static class QuizBuilder {
        private Long id;
        private String topic;
        private Integer score = 0;
        private Integer xpEarned = 0;
        private Long userId;
        private List<Question> questions = new ArrayList<>();

        public QuizBuilder id(Long id) { this.id = id; return this; }
        public QuizBuilder topic(String topic) { this.topic = topic; return this; }
        public QuizBuilder score(Integer score) { this.score = score; return this; }
        public QuizBuilder xpEarned(Integer xpEarned) { this.xpEarned = xpEarned; return this; }
        public QuizBuilder userId(Long userId) { this.userId = userId; return this; }
        public QuizBuilder questions(List<Question> questions) { this.questions = questions; return this; }

        public Quiz build() {
            return new Quiz(id, topic, score, xpEarned, userId, questions);
        }
    }

    public static QuizBuilder builder() {
        return new QuizBuilder();
    }
}
