package com.beadonor.beadonor.repository;

import java.util.List;

import com.beadonor.beadonor.domain.HelpCategory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HelpCategoryRepository extends JpaRepository<HelpCategory, Integer>{
    public List<HelpCategory> findAll();
}
