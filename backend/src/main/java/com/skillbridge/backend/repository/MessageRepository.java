package com.skillbridge.backend.repository;

import com.skillbridge.backend.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
    List<Message> findBySpaceIdOrderByTimestampAsc(String spaceId);
    List<Message> findBySenderAndRecipientOrRecipientAndSenderOrderByTimestampAsc(
            String sender1, String recipient1, String sender2, String recipient2);
}
