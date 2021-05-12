package com.beadonor.beadonor.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.view.RedirectView;

@Controller
@RequestMapping("/moderator")
public class ModeratorController {

    public final String DASHBOARD = "moderator/dashboard";

    Map<String, String> redirects = new HashMap<>();

    ModeratorController(){
        redirects.put("requests", "requests/pending/1");
        redirects.put("payments", "payments/pending/1");
        redirects.put("items", "items/pending/1");
        redirects.put("info", "info/pending/1");
        redirects.put("gifts", "gifts/pending/1");
    }

    @GetMapping("/{base}/{state}/{page}")
    public String request(ModelMap model, @PathVariable String base , @PathVariable String state, @PathVariable String page){
        model.put("link", base);
        model.put("state", state);
        model.put("page", page);
        return DASHBOARD;
    }

    @GetMapping("/{base}")
    public RedirectView redirect(@PathVariable("base") String base){
        if(redirects.get(base) != null){
            return new RedirectView(redirects.get(base));
        }
        return new RedirectView("requests/pending/1");        
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

    // @GetMapping("/info")
    // public String info(ModelMap model){
    //     model.put("link", "info");
    //     return DASHBOARD;
    // }

    // @GetMapping("/gifts")
    // public String gifts(ModelMap model){
    //     model.put("link", "gifts");
    //     return DASHBOARD;
    // }

    // @GetMapping("/form")
    // public String form(ModelMap model){
    //     model.put("link", "form");
    //     return DASHBOARD;
    // }
}
