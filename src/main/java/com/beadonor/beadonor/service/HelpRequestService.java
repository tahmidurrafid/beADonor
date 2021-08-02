package com.beadonor.beadonor.service;

import java.util.List;

import com.beadonor.beadonor.domain.HelpRequest;
import com.beadonor.beadonor.repository.HelpRequestRepository;
import com.beadonor.beadonor.repository.IssueAbstractRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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

    @Override
    public void save(HelpRequest request, MultipartFile[] files) {
        if(request.getAmount() == 0.0){
            request.setAmount(0.0);
        }
        super.save(request, files);
    }
}
