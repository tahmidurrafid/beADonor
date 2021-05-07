package com.beadonor.beadonor.restcontroller;

import java.util.List;

import com.beadonor.beadonor.domain.BloodGroup;
import com.beadonor.beadonor.service.BloodGroupService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/static/")
public class StaticRestController {
    @Autowired
    BloodGroupService bloodGroupService;

    @GetMapping("/bloodGroups/")
    public List<BloodGroup> bloodGroups(){
        return bloodGroupService.findAll();
    }
}
