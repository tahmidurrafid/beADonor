package com.beadonor.beadonor.restcontroller;

import java.util.List;

import com.beadonor.beadonor.domain.Info;
import com.beadonor.beadonor.service.InfoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/info")
public class InfoRestController {

    @Autowired
    InfoService infoService;

    @GetMapping("")
    public List<Info> findAll(){
        return infoService.findAll();
    }

    @PostMapping("")
    public void save(@RequestBody Info info){
        // Info info = new Info();
        infoService.save(info);
    }
}
