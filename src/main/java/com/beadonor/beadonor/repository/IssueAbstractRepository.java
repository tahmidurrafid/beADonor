package com.beadonor.beadonor.repository;

import java.util.List;

import com.beadonor.beadonor.domain.Issue;
import com.beadonor.beadonor.domain.IssueStatus;
import com.beadonor.beadonor.domain.User;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IssueAbstractRepository<T extends Issue> extends PagingAndSortingRepository<T, Integer>{

    @Query("SELECT p from #{#entityName} p WHERE p.status IN (:statuses) ")
    public Page<T> findByStatusIn(@Param("statuses") List<IssueStatus> statuses, Pageable page);

    @Query("SELECT p from #{#entityName} p WHERE p.status = com.beadonor.beadonor.domain.IssueStatus.MARKED AND " +
    "p.user.id = :userId" )
    public Page<T> findForMarked(@Param("userId") Integer userId, Pageable page);

    @Query("SELECT p from #{#entityName} p WHERE p.status IN (:statuses) AND user.id = :userId")
    public Page<T> findForUser(@Param("statuses") List<IssueStatus> statuses, 
                    @Param("userId") Integer userId , Pageable page);

}
