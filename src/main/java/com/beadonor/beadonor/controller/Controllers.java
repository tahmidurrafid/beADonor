package com.beadonor.beadonor.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class Controllers {

    @GetMapping("/")
    public String HomePage(){
        return "home";
    }
    @GetMapping("auth/login")
    public String login(){
        // userRepository.save(user);
        return "auth/login";
    }
    
    @GetMapping("auth/registration")
    public String registration(){
        return "auth/registration";
    }

    @GetMapping("campaign")
    public String campaign(){
        return "campaign";
    }

    @GetMapping("campaign/help")
    public String campaignHelp(){
        return "campaignHelp";
    }


}
