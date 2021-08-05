package com.beadonor.beadonor.repository;

import java.util.List;

import com.beadonor.beadonor.domain.HelpRequest;
import com.beadonor.beadonor.domain.Payment;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface HelpRequestRepository extends IssueAbstractRepository<HelpRequest>{

    public List<HelpRequest> findAll();

    public HelpRequest findHelpRequestById(Integer id);


    // @Query("SELECT p from HelpRequest p WHERE "+
    // "(:status is null OR (p.status = :status )" + 
    // "AND (p.status <> com.beadonor.beadonor.domain.IssueStatus.MARKED OR  markedByUser.id = :userId ) )" )
    // public Page<HelpRequest> findByFilteringAndPaging(@Param("status") IssueStatus status , 
    //         @Param("userId") Integer userId,
    //         Pageable pageable);

    @Query(value = "SELECT new Map(p as request, " + 
    "( SELECT SUM(x.amount) from Payment x WHERE x.refIssue.id = p.id) as paid) " +
    "from HelpRequest p WHERE p.status = com.beadonor.beadonor.domain.IssueStatus.CAMPAIGN ORDER BY p.date DESC",
    countQuery = "SELECT COUNT(p) from HelpRequest p WHERE p.status = com.beadonor.beadonor.domain.IssueStatus.CAMPAIGN")
    public Page<?> findCampaign(Pageable pageable);

}
