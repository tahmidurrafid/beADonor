package com.beadonor.beadonor.service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.beadonor.beadonor.domain.Attachment;
import com.beadonor.beadonor.domain.Issue;
import com.beadonor.beadonor.repository.AttachmentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class AttachmentService {
    @Autowired
    AttachmentRepository attachmentRepository;
    @Autowired
    HttpServletRequest request;

    public List<Attachment> saveAttachments(MultipartFile[] files){
        if(files == null){
            return null;
        }
        List<Attachment> attachments = new ArrayList<>();
        for(MultipartFile file : files){
            attachments.add(saveAttachment( file ));
        }
        return attachments;
    }

    public Attachment saveAttachment(MultipartFile file){
        Attachment attachment = new Attachment();
        attachment.setName(file.getOriginalFilename());
        attachmentRepository.save(attachment);
        attachment.setLocation("/attachments/" + attachment.getId() + "_" + attachment.getName());
        attachmentRepository.save(attachment);
        String filePath = request.getServletContext().getRealPath(attachment.getLocation()); 
        try{
            file.transferTo(new File(filePath));
        }catch(Exception e){
            e.printStackTrace();
        }
        return attachment;
    }

    public void setIssue(List<Attachment> attachments, Issue issue){
        if(attachments == null)
            return;
        for(Attachment attachment : attachments){
            attachment.setIssue(issue);
            attachmentRepository.save(attachment);
        }
    }
}
