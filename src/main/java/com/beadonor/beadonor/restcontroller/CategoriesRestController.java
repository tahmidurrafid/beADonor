package com.beadonor.beadonor.restcontroller;

import java.util.List;

import com.beadonor.beadonor.domain.HelpCategory;
import com.beadonor.beadonor.domain.HelpRequest;
import com.beadonor.beadonor.service.CategoryServices;
import com.beadonor.beadonor.service.HelpRequestService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/categories")
public class CategoriesRestController {

    @Autowired
    CategoryServices categoryServices;

    @GetMapping("helpRequest")
    public List<HelpCategory> getRequests(){
        return categoryServices.allHelpCategories();
    }
}