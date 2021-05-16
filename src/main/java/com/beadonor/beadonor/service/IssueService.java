package com.beadonor.beadonor.service;

import java.util.List;

import com.beadonor.beadonor.Utils.LoggedIn;
import com.beadonor.beadonor.Utils.Paging;
import com.beadonor.beadonor.domain.Attachment;
import com.beadonor.beadonor.domain.HelpRequest;
import com.beadonor.beadonor.domain.Issue;
import com.beadonor.beadonor.domain.IssueStatus;
import com.beadonor.beadonor.domain.User;
import com.beadonor.beadonor.repository.IssueAbstractRepository;
import com.beadonor.beadonor.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class IssueService<T extends Issue> {
    @Autowired
    private UserRepository userRepository;

    @Autowired 
    IssueAbstractRepository<T> issueAbstractRepository;

    @Autowired
    AttachmentService attachmentService;

    public User getLoggedinUser(){
        User user = userRepository.findUserByEmail( LoggedIn.getEmail() ) ;
        return user;
    }

    public Page<T> findByFilteringAndPaging(String status, Integer pageNo, Integer pageSize){
        Pageable pageable = Paging.getPageable(pageNo, pageSize);
        User user = getLoggedinUser();
        if(status.equalsIgnoreCase("MARKED")){
            return issueAbstractRepository.findForMarked(user.getId() , pageable);
        }
        List<IssueStatus> list = IssueStatus.getList(status);
        return issueAbstractRepository.findByStatusIn(list , pageable);
    }

    public void save(T request, MultipartFile[] files){
        List<Attachment> attachments = attachmentService.saveAttachments(files);
        request.setAttachments(attachments);
        issueAbstractRepository.save(request);
        attachmentService.setIssue(attachments, request);
    }

}
