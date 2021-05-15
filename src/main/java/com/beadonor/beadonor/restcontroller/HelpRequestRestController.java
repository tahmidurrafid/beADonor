package com.beadonor.beadonor.restcontroller;

import java.util.List;

import com.beadonor.beadonor.Utils.LoggedIn;
import com.beadonor.beadonor.domain.HelpRequest;
import com.beadonor.beadonor.service.HelpRequestService;
import com.beadonor.beadonor.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/v1/helpRequests")
public class HelpRequestRestController {
    @Autowired
    HelpRequestService helpRequestService;
    @Autowired
    UserService userService;

    @GetMapping("")
    public Page<HelpRequest> getAll(@RequestParam(value = "status", required = false) String status ,
            @RequestParam(value = "pageNo", required = false) Integer pageNo, 
            @RequestParam(value = "pageSize", required = false) Integer pageSize){
        System.out.println(userService.findUserByEmail(SecurityContextHolder.getContext().getAuthentication().getName()));
        return helpRequestService.findByFilteringAndPaging(status, pageNo, pageSize);
    }

    @RequestMapping(value = "", method = RequestMethod.POST, consumes = {"multipart/form-data"})
    public void saveRequest(@RequestPart("request") HelpRequest request, 
        @RequestParam(name =  "files", required = false) MultipartFile[] files){
        helpRequestService.save(request, files);
    }
}
