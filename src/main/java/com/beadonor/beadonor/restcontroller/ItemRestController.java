package com.beadonor.beadonor.restcontroller;

import java.util.List;

import com.beadonor.beadonor.domain.Item;
import com.beadonor.beadonor.service.ItemService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/items")
public class ItemRestController {
    @Autowired
    ItemService itemService;
    
    @GetMapping("/")
    public List<Item> findAll(){
        return itemService.findAll();
    }

    @PostMapping("/")
    public void save(@RequestBody Item item){
        itemService.save(item);
    }

}
