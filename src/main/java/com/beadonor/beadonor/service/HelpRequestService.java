package com.beadonor.beadonor.service;

import java.util.List;

import com.beadonor.beadonor.domain.Attachment;
import com.beadonor.beadonor.domain.HelpRequest;
import com.beadonor.beadonor.repository.HelpRequestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class HelpRequestService {
    @Autowired
    HelpRequestRepository helpRequestRepository;
    @Autowired
    AttachmentService attachmentService;

    public List<HelpRequest> findAll(){
        return helpRequestRepository.findAll();
    }

    public void save(HelpRequest helpRequest, MultipartFile[] files){
        List<Attachment> attachments = attachmentService.saveAttachments(files);
        helpRequest.setAttachments(attachments);
        helpRequestRepository.save(helpRequest);
        attachmentService.setIssue(attachments, helpRequest);
    }
}
