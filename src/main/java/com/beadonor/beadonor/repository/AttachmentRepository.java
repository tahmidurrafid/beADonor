package com.beadonor.beadonor.repository;

import com.beadonor.beadonor.domain.Attachment;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AttachmentRepository extends JpaRepository<Attachment, Integer>{
        
}
