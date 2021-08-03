package com.beadonor.beadonor.restcontroller;

import com.beadonor.beadonor.Exception.ApiRequestException;
import com.beadonor.beadonor.domain.GalleryMedia;
import com.beadonor.beadonor.domain.User;
import com.beadonor.beadonor.domain.UserRole;
import com.beadonor.beadonor.service.GalleryService;
import com.beadonor.beadonor.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("api/v1/admin")
public class AdminRestController {
    @Autowired UserService userService;
    @Autowired
    GalleryService galleryService;

    @GetMapping("moderators")
    public Page<User> getInstructors(@RequestParam(value = "status", required = false) String status, 
    @RequestParam(value = "pageNo", required = false) Integer pageNo, 
    @RequestParam(value = "pageSize", required = false) Integer pageSize){
        return userService.getModerators(status, pageNo, pageSize);
    }

    @RequestMapping(value = "userState", method = RequestMethod.PUT)
    public void upadateModeratorState( @RequestParam(name =  "id", required = false) Integer id){
        userService.changeState(id);
    }

    @RequestMapping(value = "moderator", method = RequestMethod.POST)
    public void addModerator( @RequestBody User user ){
        String exception = "";
        if(user.getEmail() == null || user.getEmail() == ""){
            exception += "Email cannot be null | ";
        }
        if(user.getPassword() == null || user.getPassword() == ""){
            exception += "Password cannot be null";            
        }
        if(exception.length() > 0){
            throw new ApiRequestException(exception);
        }
        user.setUserType(UserRole.MODERATOR);
        userService.save(user);
    }

    @RequestMapping(value = "gallery", method = RequestMethod.POST, consumes = {"multipart/form-data"})
    public void saveRequest(@RequestPart("request") GalleryMedia request, 
            @RequestParam(name =  "files", required = false) MultipartFile[] files){
        System.out.println(files.length);
        galleryService.saveMedia(request, files);
    }

    @GetMapping("gallery")
    public Page<GalleryMedia> getAllUser(@RequestParam(value = "status", required = false) String status ,
            @RequestParam(value = "pageNo", required = false) Integer pageNo, 
            @RequestParam(value = "pageSize", required = false) Integer pageSize){
        return galleryService.findAll(pageNo, pageSize);
    }
    
}
