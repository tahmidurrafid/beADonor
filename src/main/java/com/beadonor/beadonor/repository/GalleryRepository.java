package com.beadonor.beadonor.repository;

import java.util.List;

import com.beadonor.beadonor.domain.GalleryMedia;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GalleryRepository extends PagingAndSortingRepository<GalleryMedia, Integer>{
    public Page<GalleryMedia> findAll(Pageable pageable);
}
