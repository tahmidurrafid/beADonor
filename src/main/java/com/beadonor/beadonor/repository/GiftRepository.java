package com.beadonor.beadonor.repository;

import java.util.List;

import com.beadonor.beadonor.domain.Gift;

import org.springframework.stereotype.Repository;

@Repository
public interface GiftRepository extends IssueAbstractRepository<Gift>{
    public List<Gift> findAll();
}
