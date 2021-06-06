package com.beadonor.beadonor.service;

import java.util.List;

import com.beadonor.beadonor.domain.DonationCategory;
import com.beadonor.beadonor.domain.HelpCategory;
import com.beadonor.beadonor.domain.ItemCategory;
import com.beadonor.beadonor.repository.DonationCategoryRepository;
import com.beadonor.beadonor.repository.HelpCategoryRepository;
import com.beadonor.beadonor.repository.ItemCategoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryServices {
    @Autowired
    HelpCategoryRepository helpCategoryRepository;

    @Autowired
    DonationCategoryRepository donationCategoryRepository;

    @Autowired
    ItemCategoryRepository itemCategoryRepository;

    public List<HelpCategory> allHelpCategories(){
        return helpCategoryRepository.findAll();
    }

    public List<DonationCategory> allDonationCategories(){
        return donationCategoryRepository.findAll();
    }

    public List<ItemCategory> allItemCategories(){
        return itemCategoryRepository.findAll();
    }
}
