package com.beadonor.beadonor.restcontroller;

import java.util.HashMap;
import java.util.Map;

import com.beadonor.beadonor.domain.BloodDonation;
import com.beadonor.beadonor.service.BloodDonationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("api/v1/bloodDonation")
public class BloodDonationRestController {
    @Autowired
    BloodDonationService bloodDonationService;

    // @GetMapping("all")
    // public Page<BloodDonation> findAll(){
    //     return bloodDonationService.getAll();
    // }

    @RequestMapping(value = "", method = RequestMethod.POST, consumes = {"multipart/form-data"})
    public void saveRequest(@RequestPart("request") BloodDonation request, 
            @RequestParam(name =  "files", required = false) MultipartFile[] files){
        bloodDonationService.save(request, files);
    }

    @GetMapping
    public Page<BloodDonation> findAllMatch(){
        return bloodDonationService.findAllMatch();
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    public void markByUser(@PathVariable("id") Integer id){
        bloodDonationService.markRequest(id);
    }

    @RequestMapping(value = "unmark/{id}", method = RequestMethod.PUT)
    public Map<String, Object> unMarkReuqest(@PathVariable("id") Integer id){
        bloodDonationService.unMarkRequest(id);
        Map<String, Object> result = new HashMap<>();
        result.put("success", 1);
        return result;
    }

}
