package com.beadonor.beadonor.restcontroller;


import javax.validation.Valid;

import com.beadonor.beadonor.domain.User;
import com.beadonor.beadonor.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value ="api/v1/users/")
public class UserRestController {
    @Autowired
    UserService userService;

    @PostMapping("/")
    public void save(@Valid @RequestBody User user){
        userService.save(user);
    }

    @GetMapping("/{email}")
    public User getEmail(@PathVariable String email){
        return userService.findUserByEmail(email);
    }
}
