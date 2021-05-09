package com.beadonor.beadonor.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/moderator")
public class ModeratorController {

    public final String DASHBOARD = "moderator/dashboard";

    @GetMapping("/requests")
    public String request(ModelMap model){
        model.put("link", "requests");
        return DASHBOARD;
    }

    @GetMapping("/payments")
    public String payments(ModelMap model){
        model.put("link", "payments");
        return DASHBOARD;
    }
}
