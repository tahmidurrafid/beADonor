package com.beadonor.beadonor.service;

import java.util.List;

import com.beadonor.beadonor.domain.Gift;
import com.beadonor.beadonor.repository.GiftRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GiftService {
    @Autowired
    GiftRepository giftRepository;

    public List<Gift> findAll(){
        return giftRepository.findAll();
    }

    public void save(Gift gift){
        giftRepository.save(gift);
    }
}
