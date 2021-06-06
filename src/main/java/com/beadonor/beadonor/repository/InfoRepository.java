package com.beadonor.beadonor.repository;

import java.util.List;

import com.beadonor.beadonor.domain.Info;

import org.springframework.stereotype.Repository;

@Repository
public interface InfoRepository extends IssueAbstractRepository<Info>{
    public List<Info> findAll(); 
}
