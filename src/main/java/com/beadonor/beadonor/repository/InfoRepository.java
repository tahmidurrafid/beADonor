package com.beadonor.beadonor.repository;

import java.util.List;

import com.beadonor.beadonor.domain.Info;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InfoRepository extends JpaRepository<Info, Integer>{
    public List<Info> findAll(); 
}
