package com.beadonor.beadonor.restcontroller;

import com.beadonor.beadonor.Utils.LoggedIn;
import com.beadonor.beadonor.domain.User;
import com.beadonor.beadonor.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/auth")
public class AuthRestController {
    @Autowired
    UserService userService;

    @GetMapping("me")
    public User getMe(){
        return userService.findUserByEmail(LoggedIn.getEmail());
    }
}
