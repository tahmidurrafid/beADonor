package com.beadonor.beadonor.restcontroller;

import java.util.List;
import java.util.Map;

import com.beadonor.beadonor.Utils.StaticResponse;
import com.beadonor.beadonor.domain.Gift;
import com.beadonor.beadonor.service.GiftService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1")
public class GiftRestController {
    @Autowired
    private GiftService giftService;

    @GetMapping("")
    public List<Gift> findAll(){
        return giftService.findAll();
    }


    @GetMapping("user/gifts")
    public Page<Gift> getAllUser(@RequestParam(value = "status", required = false) String status ,
            @RequestParam(value = "pageNo", required = false) Integer pageNo, 
            @RequestParam(value = "pageSize", required = false) Integer pageSize){
        return giftService.findForUser(status, pageNo, pageSize);
    }

    @GetMapping("gifts")
    public Page<Gift> getAll(@RequestParam(value = "status", required = false) String status ,
            @RequestParam(value = "pageNo", required = false) Integer pageNo, 
            @RequestParam(value = "pageSize", required = false) Integer pageSize){
        return giftService.findByFilteringAndPaging(status, pageNo, pageSize);
    }

    @PostMapping("gifts")
    public Map<String, Object> save(@RequestBody Gift gift){
        System.out.println("Ashche");
        giftService.saveGift(gift);
        return StaticResponse.getSuccess();
    }
}
