package com.skillbridge.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "internships")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Internship {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String company;
    
    @Column(length = 2000)
    private String description;
    
    private Integer stipend; // in Skill Coins
    private String duration; // e.g. "2 weeks", "1 month"
    private String skillsRequired; // e.g. "React, Figma"
    private String status = "Open"; // Open, Applied, Completed
    private Double rating = 5.0;
}
