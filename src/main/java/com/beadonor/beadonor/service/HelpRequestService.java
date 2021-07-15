package com.beadonor.beadonor.service;

import java.util.List;

import com.beadonor.beadonor.domain.HelpRequest;
import com.beadonor.beadonor.repository.HelpRequestRepository;
import com.beadonor.beadonor.repository.IssueAbstractRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
public class HelpRequestService extends IssueService< HelpRequest > {
    @Autowired
    HelpRequestRepository helpRequestRepository;
    @Autowired
    AttachmentService attachmentService;

    public List<HelpRequest> findAll(){
        return helpRequestRepository.findAll();
    }

    public IssueAbstractRepository<HelpRequest> getRepository(){
        return helpRequestRepository;
    }

    public Page<HelpRequest> getCampaign(Integer pageNo, Integer pageSize){
        return findByFilteringAndPaging("CAMPAIGN", pageNo, pageSize);
    }
    
}
