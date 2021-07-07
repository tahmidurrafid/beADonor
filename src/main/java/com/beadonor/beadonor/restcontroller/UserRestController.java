package com.beadonor.beadonor.restcontroller;


import java.util.HashMap;

import javax.validation.Valid;

import com.beadonor.beadonor.domain.User;
import com.beadonor.beadonor.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(value ="api/v1/users")
public class UserRestController {
    @Autowired
    UserService userService;

    @PostMapping("/")
    public void save(@Valid @RequestBody User user){
        userService.save(user);
    }

    @PutMapping("/")
    public void update(@Valid @RequestBody User user){
        userService.update(user);
    }

    @GetMapping("/{email}")
    public User getEmail(@PathVariable String email){
        return userService.findUserByEmail(email);
    }

    @RequestMapping(value = "profilePhoto", method = RequestMethod.POST, consumes = {"multipart/form-data"})
    public User uploadPhoto( @RequestParam(name =  "file", required = false) MultipartFile file){
        // return new User();
        return userService.saveProfilePhoto(file);
    }
}
