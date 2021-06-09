package com.beadonor.beadonor.repository;

import java.util.List;

import com.beadonor.beadonor.domain.HelpRequest;
import org.springframework.stereotype.Repository;


@Repository
public interface HelpRequestRepository extends IssueAbstractRepository<HelpRequest>{

    public List<HelpRequest> findAll();

    // @Query("SELECT p from HelpRequest p WHERE "+
    // "(:status is null OR (p.status = :status )" + 
    // "AND (p.status <> com.beadonor.beadonor.domain.IssueStatus.MARKED OR  markedByUser.id = :userId ) )" )
    // public Page<HelpRequest> findByFilteringAndPaging(@Param("status") IssueStatus status , 
    //         @Param("userId") Integer userId,
    //         Pageable pageable);

}
