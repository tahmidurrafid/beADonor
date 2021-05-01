package com.beadonor.beadonor.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Controllers {
    @GetMapping("/")
    public String HomePage(){
        return "home";
    }

    @GetMapping("moderator/dashboard")
    public String moderator(){
        return "moderator/dashboard";
    }
}
