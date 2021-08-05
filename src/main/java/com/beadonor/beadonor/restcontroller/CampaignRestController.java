package com.beadonor.beadonor.restcontroller;

import com.beadonor.beadonor.domain.HelpRequest;
import com.beadonor.beadonor.service.HelpRequestService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/campaign")
public class CampaignRestController {
    @Autowired
    HelpRequestService helpRequestService;

    @GetMapping("")
    public Page<?> getCampaigns(@RequestParam(value = "pageNo", required = false) Integer pageNo, 
        @RequestParam(value = "pageSize", required = false) Integer pageSize){
        return helpRequestService.getCampaign(pageNo, pageSize);
    }

    @GetMapping("{id}")
    public HelpRequest getRequest(@PathVariable("id") Integer id){
        return helpRequestService.findForCampaign(id);
    }

}
