package com.beadonor.beadonor.service;

import java.util.List;

import com.beadonor.beadonor.domain.HelpCategory;
import com.beadonor.beadonor.repository.HelpCategoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryServices {
    @Autowired
    HelpCategoryRepository helpCategoryRepository;

    public List<HelpCategory> allHelpCategories(){
        return helpCategoryRepository.findAll();
    }
}
