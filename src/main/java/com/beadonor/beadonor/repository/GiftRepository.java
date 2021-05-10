package com.beadonor.beadonor.repository;

import java.util.List;

import com.beadonor.beadonor.domain.Gift;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GiftRepository extends JpaRepository<Gift, Integer>{
    public List<Gift> findAll();
}
