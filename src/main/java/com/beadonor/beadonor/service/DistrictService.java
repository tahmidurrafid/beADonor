package com.beadonor.beadonor.service;

import java.util.List;

import com.beadonor.beadonor.domain.District;
import com.beadonor.beadonor.repository.DistrictRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DistrictService {
    @Autowired
    DistrictRepository districtRepository;

    public List<District> findAll(){
        return districtRepository.findAll();
    }

    public District findByName(String district){
        return districtRepository.findByName(district);
    }

    public List<?> findALLNames(){
        return districtRepository.selectDistrictNames();
    }
}
