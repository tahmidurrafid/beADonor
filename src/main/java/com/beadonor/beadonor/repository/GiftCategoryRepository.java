package com.beadonor.beadonor.repository;

import java.util.List;

import com.beadonor.beadonor.domain.GiftCategory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GiftCategoryRepository extends JpaRepository<GiftCategory, Integer>{
    public List<GiftCategory> findAll();
}
