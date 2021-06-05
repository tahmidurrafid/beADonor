package com.beadonor.beadonor.repository;

import java.util.List;

import com.beadonor.beadonor.domain.DonationCategory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DonationCategoryRepository extends JpaRepository<DonationCategory, Integer> {

    List<DonationCategory> findAll();
    
}
