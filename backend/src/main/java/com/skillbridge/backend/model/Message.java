package com.skillbridge.backend.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "messages")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String sender;
    
    @Column(length = 2000)
    private String content;
    
    private LocalDateTime timestamp = LocalDateTime.now();
    
    private String spaceId; // e.g. "WebDev", "AI/ML", "DSA", "UI/UX", "Cybersecurity"
    
    private Boolean peerToPeer = false;
    private String recipient; // null for community spaces, username for P2P
}
