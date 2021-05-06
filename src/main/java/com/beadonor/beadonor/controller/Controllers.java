package com.beadonor.beadonor.controller;

import java.util.ArrayList;
import java.util.List;

import com.beadonor.beadonor.domain.User;
import com.beadonor.beadonor.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class Controllers {

    @GetMapping("/")
    public String HomePage(){
        return "home";
    }
    @GetMapping("auth/login")
    public String login(){
        User user = new User(1, "Rhythm");
        // userRepository.save(user);
        return "auth/login";
    }
    
    @GetMapping("auth/registration")
    public String registration(){
        return "auth/registration";
    }

    @GetMapping("moderator/dashboard")
    public String moderator(ModelMap model){
        List<A> myList = new ArrayList<>();
        myList.add(new A("Rhythm", 23));
        myList.add(new A("Porag", 22));
        myList.add(new A("Tayeef", 22));
        model.put("list", myList);
        return "moderator/dashboard";
    }
}
