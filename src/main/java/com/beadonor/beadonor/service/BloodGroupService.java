package com.beadonor.beadonor.service;

import java.util.List;

import com.beadonor.beadonor.domain.BloodGroup;
import com.beadonor.beadonor.repository.BloodGroupRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BloodGroupService {
    @Autowired
    BloodGroupRepository bloodGroupRepository;

    public List<BloodGroup> findAll(){
        return bloodGroupRepository.findAll();
    }
}
