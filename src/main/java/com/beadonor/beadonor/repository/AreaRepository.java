package com.beadonor.beadonor.repository;

import java.util.List;

import com.beadonor.beadonor.domain.Area;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AreaRepository extends JpaRepository<Area, Integer>{
    public List<Area> findByDistrictName(String name);
}
