package com.beadonor.beadonor.restcontroller;

import com.beadonor.beadonor.domain.Item;
import com.beadonor.beadonor.service.ItemService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("api/v1")
public class ItemRestController {
    @Autowired
    ItemService itemService;
    
    @GetMapping("items")
    public Page<Item> getAll(@RequestParam(value = "status", required = false) String status ,
            @RequestParam(value = "pageNo", required = false) Integer pageNo, 
            @RequestParam(value = "pageSize", required = false) Integer pageSize){
        return itemService.findByFilteringAndPaging(status, pageNo, pageSize);
    }
    
    @GetMapping("user/items")
    public Page<Item> getAllForUser(@RequestParam(value = "status", required = false) String status ,
            @RequestParam(value = "pageNo", required = false) Integer pageNo, 
            @RequestParam(value = "pageSize", required = false) Integer pageSize){
        return itemService.findForUser(status, pageNo, pageSize);
    }
    
    @RequestMapping(value = "user/items", method = RequestMethod.POST, consumes = {"multipart/form-data"})
    public void saveRequest(@RequestPart("request") Item request, 
            @RequestParam(name =  "files", required = false) MultipartFile[] files){
        itemService.save(request, files);
    }

}
