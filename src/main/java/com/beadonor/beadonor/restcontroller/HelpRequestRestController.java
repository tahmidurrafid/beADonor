package com.beadonor.beadonor.restcontroller;

import java.util.List;

import com.beadonor.beadonor.domain.HelpRequest;
import com.beadonor.beadonor.service.HelpRequestService;

import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping("")
    public List<HelpRequest> getAll(){
        return helpRequestService.findAll();
    }

    @RequestMapping(value = "", method = RequestMethod.POST, consumes = {"multipart/form-data"})
    public void saveRequest(@RequestPart("request") HelpRequest request, 
        @RequestParam(name =  "files", required = false) MultipartFile[] files){
        helpRequestService.save(request, files);
    }
}
