package com.beadonor.beadonor.repository;

import java.util.List;

import com.beadonor.beadonor.domain.Item;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends JpaRepository<Item, Integer>{
    public List<Item> findAll();
}
