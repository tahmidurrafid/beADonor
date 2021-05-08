package com.beadonor.beadonor.repository;

import java.util.List;

import com.beadonor.beadonor.domain.HelpRequest;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HelpRequestRepository extends JpaRepository<HelpRequest, Integer>{
    public List<HelpRequest> findAll();
}
