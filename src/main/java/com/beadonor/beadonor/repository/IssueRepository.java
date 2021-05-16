package com.beadonor.beadonor.repository;

import com.beadonor.beadonor.domain.Issue;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IssueRepository extends PagingAndSortingRepository<Issue, Integer>{

}
