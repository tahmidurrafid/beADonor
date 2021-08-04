package com.beadonor.beadonor.service;

import java.util.List;

import com.beadonor.beadonor.Exception.ApiRequestException;
import com.beadonor.beadonor.domain.Gift;
import com.beadonor.beadonor.domain.GiftCategory;
import com.beadonor.beadonor.domain.User;
import com.beadonor.beadonor.repository.GiftCategoryRepository;
import com.beadonor.beadonor.repository.GiftRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GiftService extends IssueService<Gift>{
    @Autowired
    GiftRepository giftRepository;
    @Autowired
    UserService userService;
    @Autowired
    GiftCategoryRepository giftCategoryRepository;

    public List<Gift> findAll(){
        return giftRepository.findAll();
    }

    public void saveGift(Gift gift){
        String error = "";
        if(gift.getGiftCategory() == null){
            error += "Select a category |";
        }
        if(error.length() > 0){
            throw new ApiRequestException(error);   
        }
        save(gift);
        User user = getLoggedinUser();
        GiftCategory category = giftCategoryRepository.findById(gift.getGiftCategory().getId()).get();
        user.setPoints(user.getPoints() - category.getPoints());
        userService.save(user);
    }
}
