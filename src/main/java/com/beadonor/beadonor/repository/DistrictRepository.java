package com.beadonor.beadonor.repository;

import java.util.List;


import org.springframework.transaction.annotation.Transactional;
import com.beadonor.beadonor.domain.District;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
@Transactional(readOnly = true)
public interface DistrictRepository extends PagingAndSortingRepository<District, String>{

    public List<District> findAll();

    public District findByName(String name);

    @Modifying
    @Query("Select new map(d.name as name) from District d")
    public List<?> selectDistrictNames();
}
