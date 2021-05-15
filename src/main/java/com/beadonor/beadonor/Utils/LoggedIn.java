package com.beadonor.beadonor.Utils;

import com.beadonor.beadonor.domain.User;
import com.beadonor.beadonor.repository.UserRepository;
import com.beadonor.beadonor.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;

public class LoggedIn {
    @Autowired
    private static UserService userService;

    public static User getLoggedInUser(){
        System.out.println(SecurityContextHolder.getContext().getAuthentication().getName() + " ----- ");
        return userService.findUserByEmail(SecurityContextHolder.getContext().getAuthentication().getName());
    }    
}
