package com.beadonor.beadonor.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.view.RedirectView;

@Controller
@RequestMapping("admin")
public class AdminController {

    public final String DASHBOARD = "admin/dashboard";

    Map<String, String> redirects = new HashMap<>();

    AdminController(){
        redirects.put("moderators", "moderators/active/1");
    }

    @GetMapping("/{base}/{state}/{page}")
    public String request(ModelMap model, @PathVariable String base , @PathVariable String state, @PathVariable String page){
        model.put("link", base);
        model.put("state", state);
        model.put("page", page);
        return DASHBOARD;
    }

    @GetMapping("/profile")
    public String profile(ModelMap model){
        model.put("link", "profile");
        model.put("state", "profile");
        model.put("page", "profile");
        return DASHBOARD;
    }

    @GetMapping("/{base}")
    public RedirectView redirect(@PathVariable("base") String base){
        if(redirects.get(base) != null){
            return new RedirectView(redirects.get(base));
        }
        return new RedirectView("moderators/active/1");        
    }

    @GetMapping("/{base}/{state}")
    public RedirectView redirectState(@PathVariable String state){
        return new RedirectView(state + "/1");
    }

    // @GetMapping("/payments/{state}/{page}")
    // public String payments(ModelMap model){
    //     model.put("link", "payments");
    //     return DASHBOARD;
    // }

    // @GetMapping("/items")
    // public String items(ModelMap model){
    //     model.put("link", "items");
    //     return DASHBOARD;
    // }

}
