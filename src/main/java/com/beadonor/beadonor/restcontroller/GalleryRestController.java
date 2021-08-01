package com.beadonor.beadonor.restcontroller;

import com.beadonor.beadonor.domain.GalleryMedia;
import com.beadonor.beadonor.service.GalleryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/gallery")
public class GalleryRestController {
    @Autowired GalleryService galleryService;

    @GetMapping("")
    public Page<GalleryMedia> getAllUser(@RequestParam(value = "status", required = false) String status ,
            @RequestParam(value = "pageNo", required = false) Integer pageNo, 
            @RequestParam(value = "pageSize", required = false) Integer pageSize){
        return galleryService.findAll(pageNo, pageSize);
    }
}
