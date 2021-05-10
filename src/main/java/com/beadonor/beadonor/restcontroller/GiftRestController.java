package com.beadonor.beadonor.restcontroller;

import java.util.List;

import com.beadonor.beadonor.domain.Gift;
import com.beadonor.beadonor.service.GiftService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/gifts")
public class GiftRestController {
    @Autowired
    private GiftService giftService;
    @GetMapping("")
    public List<Gift> findAll(){
        return giftService.findAll();
    }

    @PostMapping("")
    public void save(@RequestBody Gift gift){
        // Gift gift = new Gift();
        giftService.save(gift);
    }
}
