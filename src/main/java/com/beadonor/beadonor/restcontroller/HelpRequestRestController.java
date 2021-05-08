package com.beadonor.beadonor.restcontroller;

import java.util.List;

import com.beadonor.beadonor.domain.HelpRequest;
import com.beadonor.beadonor.service.HelpRequestService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/")
public class HelpRequestRestController {
    @Autowired
    HelpRequestService helpRequestService;

    @GetMapping("helpRequests/")
    public List<HelpRequest> getAll(){
        return helpRequestService.findAll();
    }

    @PostMapping("helpRequest/")
    public void saveRequest(@RequestBody HelpRequest helpRequest){
        HelpRequest hp = new HelpRequest();
        hp.setAmount(100);
        helpRequestService.save(hp);
    }
}
