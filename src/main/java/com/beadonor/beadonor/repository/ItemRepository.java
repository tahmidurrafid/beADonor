package com.beadonor.beadonor.repository;

import java.util.List;

import com.beadonor.beadonor.domain.Item;

import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends IssueAbstractRepository<Item>{
    public List<Item> findAll();
}
