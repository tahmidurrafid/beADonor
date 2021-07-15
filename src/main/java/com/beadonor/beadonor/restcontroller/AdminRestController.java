package com.beadonor.beadonor.restcontroller;

import com.beadonor.beadonor.domain.User;
import com.beadonor.beadonor.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/admin")
public class AdminRestController {
    @Autowired UserService userService;

    @GetMapping("moderators")
    public Page<User> getInstructors(@RequestParam(value = "status", required = false) String status, 
    @RequestParam(value = "pageNo", required = false) Integer pageNo, 
    @RequestParam(value = "pageSize", required = false) Integer pageSize){
        return userService.getModerators(status, pageNo, pageSize);
    }

    @RequestMapping(value = "userState", method = RequestMethod.PUT)
    public void upadateState( @RequestParam(name =  "id", required = false) Integer id){
        userService.changeState(id);
    }

}
