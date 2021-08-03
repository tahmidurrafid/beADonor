package com.beadonor.beadonor.service;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.beadonor.beadonor.Utils.LoggedIn;
import com.beadonor.beadonor.Utils.Paging;
import com.beadonor.beadonor.domain.Attachment;
import com.beadonor.beadonor.domain.Info;
import com.beadonor.beadonor.domain.Issue;
import com.beadonor.beadonor.domain.IssueStatus;
import com.beadonor.beadonor.domain.Item;
import com.beadonor.beadonor.domain.Payment;
import com.beadonor.beadonor.domain.User;
import com.beadonor.beadonor.repository.IssueAbstractRepository;
import com.beadonor.beadonor.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
        Pageable pageable = Paging.getPageable(pageNo, pageSize, Sort.by("date").descending());
        User user = getLoggedinUser();
        if(status == null){
            status = "ALL";
        }
        if(status.equalsIgnoreCase("MARKED")){
            return getRepository().findForMarked(user.getId() , pageable);
        }
        List<IssueStatus> list = IssueStatus.getList(status);

        return getRepository().findByStatusIn(list , pageable);
    }

    public Page<T> findForUser(String status, Integer pageNo, Integer pageSize){
        Pageable pageable = Paging.getPageable(pageNo, pageSize, Sort.by("date").descending());
        User user = getLoggedinUser();
        if(status == null){
            status = "ALL";
        }
        List<IssueStatus> list = IssueStatus.getList(status);
        return getRepository().findForUser(list , user.getId(), pageable);
    }

    public void save(T request, MultipartFile[] files){
        request.setUser(getLoggedinUser());
        List<Attachment> attachments = attachmentService.saveAttachments(files);
        if(request.getDate() == null){
            request.setDate( new Timestamp(System.currentTimeMillis()) );
        }
        request.setAttachments(attachments);
        getRepository().save(request);
        attachmentService.setIssue(attachments, request);
    }

    public void save(T request){
        request.setUser(getLoggedinUser());
        if(request.getDate() == null){
            request.setDate( new Timestamp(System.currentTimeMillis()) );
        }
        getRepository().save(request);
    }

    public Map<String, Object> changeStatus(Integer id, Map<String, Object> req){
        Map<String, Object> back = new HashMap<>();
        T res = getRepository().findById(id).get();
        IssueStatus status = IssueStatus.valueOf((String)req.get("status")) ;
        boolean confirm = false;
        if(req.containsKey("confirm") && ((String)req.get("confirm")).equalsIgnoreCase("YES") ){
            confirm = true;
        }

        User loggedIn = getLoggedinUser();
        User issueUser = res.getUser();
        if(res.getStatus() == IssueStatus.PENDING){
            res.setMarkedByUser(null);
        }
        if(res.getMarkedByUser() != null  && 
            res.getMarkedByUser().getId() != loggedIn.getId() && !confirm){
            back.put("success", 0);
            return back;
        }
        // System.out.println(T instanceof HelpRequest);
        res.setMarkedByUser(loggedIn);
        if(status == IssueStatus.APPROVED){
            if(res instanceof Payment){
                issueUser.setPoints(issueUser.getPoints() + 10);
            }
            if(res instanceof Item){
                issueUser.setPoints(issueUser.getPoints() + 10);                
            }
            if(res instanceof Info){
                issueUser.setPoints(issueUser.getPoints() + 5);                
            }
            userRepository.save(issueUser);
        }
        res.setStatus(status);
        getRepository().save(res);
        back.put("success", 1);
        return back;
    }

    public IssueAbstractRepository<T> getRepository(){
        return issueAbstractRepository;
    }

}
