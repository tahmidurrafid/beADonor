package com.beadonor.beadonor.repository;

import java.util.List;

import com.beadonor.beadonor.domain.BloodGroup;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BloodGroupRepository extends JpaRepository<BloodGroup, String>{
    public List<BloodGroup> findAll();
}
