package com.beadonor.beadonor.restcontroller;

import java.util.List;

import com.beadonor.beadonor.domain.Area;
import com.beadonor.beadonor.service.DistrictService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/location")
public class LocationRestController {
    @Autowired
    DistrictService districtService;
    
    @GetMapping("/districts")
    public List<?> allDistricts(){
        return districtService.findALLNames();
    }
    @GetMapping("/districts/{district}/areas")
    public List<Area> allAreasByDistricts(@PathVariable String district){
        return districtService.findAreaByDistrictName(district);
    }
}
