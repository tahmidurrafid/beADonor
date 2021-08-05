package com.beadonor.beadonor.restcontroller;

import java.util.List;
import java.util.Map;

import com.beadonor.beadonor.domain.BloodGroup;
import com.beadonor.beadonor.domain.HelpRequest;
import com.beadonor.beadonor.service.BloodGroupService;
import com.beadonor.beadonor.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/static")
public class StaticRestController {
    @Autowired
    BloodGroupService bloodGroupService;
    @Autowired UserService userService;

    @GetMapping("bloodGroups")
    public List<BloodGroup> bloodGroups(){
        return bloodGroupService.findAll();
    }

    @GetMapping("rank")
    public List<?> findUserByRank(){
        return userService.findUserByRank();
    }

}
