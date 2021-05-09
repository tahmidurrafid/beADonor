package com.beadonor.beadonor.service;

import java.util.List;

import com.beadonor.beadonor.domain.Area;
import com.beadonor.beadonor.domain.District;
import com.beadonor.beadonor.repository.AreaRepository;
import com.beadonor.beadonor.repository.DistrictRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DistrictService {
    @Autowired
    DistrictRepository districtRepository;
    @Autowired
    AreaRepository areaRepository;

    public List<District> findAll(){
        return districtRepository.findAll();
    }

    public List<Area> findAreaByDistrictName(String district){
        return areaRepository.findByDistrictName(district);
    }

    public List<?> findALLNames(){
        return districtRepository.selectDistrictNames();
    }
}
