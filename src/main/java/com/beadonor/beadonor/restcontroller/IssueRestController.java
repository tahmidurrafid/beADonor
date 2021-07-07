package com.beadonor.beadonor.restcontroller;

import java.util.Map;

import com.beadonor.beadonor.domain.Issue;
import com.beadonor.beadonor.domain.User;
import com.beadonor.beadonor.service.IssueService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class IssueRestController {

    @Autowired
    IssueService<Issue> issueService;

    @GetMapping("issue")
    public User getAll(){
        return issueService.getLoggedinUser();
    }

    @RequestMapping(value = "issue/status/{id}", method = RequestMethod.PUT)
    public Map<String, Object> updateStatus(@PathVariable("id") Integer id, @RequestBody Map<String, Object> request){
        return issueService.changeStatus(id, request);
    }
}
