package com.skillbridge.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@RestController
@RequestMapping("/api/sessions")
public class SessionController {

    private final Map<String, String> canvasStateDb = new HashMap<>();
    private final Map<String, String> codeEditorDb = new HashMap<>();
    private final Random random = new Random();

    // Smart Scheduling auto-finder
    @PostMapping("/schedule")
    public ResponseEntity<?> scheduleSession(@RequestBody Map<String, Object> payload) {
        String partnerName = payload.getOrDefault("partnerName", "Expert Mentor").toString();
        
        // Simulating smart overlap calculation
        String[] timeSlots = {"10:00 AM - 11:00 AM", "2:30 PM - 3:30 PM", "5:00 PM - 6:00 PM"};
        String chosenSlot = timeSlots[random.nextInt(timeSlots.length)];
        
        Map<String, String> resp = new HashMap<>();
        resp.put("roomId", "room_" + (10000 + random.nextInt(90000)));
        resp.put("scheduledTime", "Tomorrow, " + chosenSlot);
        resp.put("timezone", "IST (UTC+05:30)");
        resp.put("message", "AI auto-scheduled session with " + partnerName + " based on optimal overlap.");
        
        return ResponseEntity.ok(resp);
    }

    // Sync Drawing Coordinates
    @PostMapping("/whiteboard/sync")
    public ResponseEntity<?> syncWhiteboard(@RequestBody Map<String, String> payload) {
        String roomId = payload.getOrDefault("roomId", "default_room");
        String canvasData = payload.getOrDefault("canvasData", "[]");

        canvasStateDb.put(roomId, canvasData);

        Map<String, String> resp = new HashMap<>();
        resp.put("status", "Synchronized");
        return ResponseEntity.ok(resp);
    }

    // Fetch Whiteboard Drawing Data
    @GetMapping("/whiteboard/state")
    public ResponseEntity<?> getWhiteboardState(@RequestParam(name = "roomId", defaultValue = "default_room") String roomId) {
        String canvasData = canvasStateDb.getOrDefault(roomId, "[]");
        Map<String, String> resp = new HashMap<>();
        resp.put("canvasData", canvasData);
        return ResponseEntity.ok(resp);
    }

    // Sync Code Editor text
    @PostMapping("/code/sync")
    public ResponseEntity<?> syncCode(@RequestBody Map<String, String> payload) {
        String roomId = payload.getOrDefault("roomId", "default_room");
        String code = payload.getOrDefault("code", "");

        codeEditorDb.put(roomId, code);

        Map<String, String> resp = new HashMap<>();
        resp.put("status", "Code Sync'd");
        return ResponseEntity.ok(resp);
    }

    // Fetch Code Text
    @GetMapping("/code/state")
    public ResponseEntity<?> getCodeState(@RequestParam(name = "roomId", defaultValue = "default_room") String roomId) {
        String code = codeEditorDb.getOrDefault(roomId, "// Start collaborative coding here...");
        Map<String, String> resp = new HashMap<>();
        resp.put("code", code);
        return ResponseEntity.ok(resp);
    }
}
