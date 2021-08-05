package com.beadonor.beadonor.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


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

    @GetMapping("campaign/{page}")
    public String campaign(ModelMap model, @PathVariable String page){
        model.put("pageNo", page);        
        return "campaign";
    }

    @GetMapping("gallery/{page}")
    public String gallery(ModelMap model, @PathVariable String page){
        model.put("pageNo", page);
        return "gallery";
    }

    @GetMapping("donors")
    public String donors(){
        return "donors";
    }

    @GetMapping("about")
    public String about(){
        return "about";
    }

    @GetMapping("bloodDonate")
    public String bloodDonate(){
        return "bloodDonate";
    }

    @GetMapping("campaign/help")
    public String campaignHelp(){
        return "campaignHelp";
    }


}
