package com.beadonor.beadonor.restcontroller;

import java.util.List;

import com.beadonor.beadonor.domain.Info;
import com.beadonor.beadonor.service.InfoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("api/v1")
public class InfoRestController {

    @Autowired
    InfoService infoService;

    @GetMapping("info")
    public Page<Info> getAll(@RequestParam(value = "status", required = false) String status ,
            @RequestParam(value = "pageNo", required = false) Integer pageNo, 
            @RequestParam(value = "pageSize", required = false) Integer pageSize){
        return infoService.findByFilteringAndPaging(status, pageNo, pageSize);
    }

    @GetMapping("user/info")
    public Page<Info> getAllForUser(@RequestParam(value = "status", required = false) String status ,
            @RequestParam(value = "pageNo", required = false) Integer pageNo, 
            @RequestParam(value = "pageSize", required = false) Integer pageSize){
        return infoService.findForUser(status, pageNo, pageSize);
    }


    @RequestMapping(value = "user/info", method = RequestMethod.POST, consumes = {"multipart/form-data"})
    public void saveRequest(@RequestPart("request") Info request, 
            @RequestParam(name =  "files", required = false) MultipartFile[] files){
        infoService.save(request, files);
    }
}
