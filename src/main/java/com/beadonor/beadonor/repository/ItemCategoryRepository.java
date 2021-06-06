package com.beadonor.beadonor.repository;

import java.util.List;

import com.beadonor.beadonor.domain.ItemCategory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemCategoryRepository extends JpaRepository<ItemCategory, Integer> {

    List<ItemCategory> findAll();
    
}
