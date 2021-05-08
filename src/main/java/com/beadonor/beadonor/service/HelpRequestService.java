package com.beadonor.beadonor.service;

import java.util.List;

import com.beadonor.beadonor.domain.HelpRequest;
import com.beadonor.beadonor.repository.HelpRequestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HelpRequestService {
    @Autowired
    HelpRequestRepository helpRequestRepository;

    public List<HelpRequest> findAll(){
        return helpRequestRepository.findAll();
    }

    public void save(HelpRequest helpRequest){
        helpRequestRepository.save(helpRequest);
    }
}
