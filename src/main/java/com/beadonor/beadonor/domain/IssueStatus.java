package com.beadonor.beadonor.domain;

import java.util.ArrayList;
import java.util.List;

public enum IssueStatus {
    PENDING, // Just Created Issue. No Update from reviewers
    MARKED, // One reviewer just marked the issue to go with it further
    CAMPAIGN, // Campagning is started. Any user can view it and donate
    REJECTED, // Reviewer just rejected the issue
    APPROVED, // Reviewer approved the issue. It will not be campaigned.
    FINISHED; // Finished the issue

    public static List<IssueStatus> getList(String status){
        List<IssueStatus> list = new ArrayList<>();
        if(status.equalsIgnoreCase("PENDING")){
            list.add( IssueStatus.PENDING );
        }else if(status.equalsIgnoreCase("ONGOING")){
            list.add( IssueStatus.APPROVED );            
            list.add( IssueStatus.CAMPAIGN );            
        }else if(status.equalsIgnoreCase("ARCHIVED")){
            list.add( IssueStatus.FINISHED );
            list.add( IssueStatus.REJECTED );
        }else if(status.equalsIgnoreCase("CAMPAIGN")){
            list.add( IssueStatus.CAMPAIGN );
        }else if(status.equalsIgnoreCase("ALL")){
            list.add(IssueStatus.PENDING);
            list.add(IssueStatus.MARKED);
            list.add(IssueStatus.CAMPAIGN);
            list.add(IssueStatus.REJECTED);
            list.add(IssueStatus.APPROVED);
            list.add(IssueStatus.FINISHED);
        }
        return list;
    }
}
