package com.beadonor.beadonor.service;

import java.io.File;
import java.sql.Timestamp;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.beadonor.beadonor.Utils.Paging;
import com.beadonor.beadonor.domain.GalleryMedia;
import com.beadonor.beadonor.repository.GalleryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class GalleryService {
    @Autowired
    private GalleryRepository galleryRepository;
    @Autowired
    HttpServletRequest request;


    public Page<GalleryMedia> findAll(Integer pageNo, Integer pageSize){
        Pageable pageable = Paging.getPageable(pageNo, pageSize, Sort.by("date").descending());
        return galleryRepository.findAll(pageable);
    }

    public void save(GalleryMedia galleryMedia){
        if(galleryMedia.getDate() == null){
            galleryMedia.setDate( new Timestamp(System.currentTimeMillis()) );
        }
        galleryRepository.save(galleryMedia);
    }

    public void saveMedia(GalleryMedia galleryMedia, MultipartFile[] files){
        if(galleryMedia.getDate() == null){
            galleryMedia.setDate( new Timestamp(System.currentTimeMillis()) );
        }

        GalleryMedia media = galleryRepository.save(galleryMedia);
        MultipartFile file = files[0];
        String fileLocation = "/attachments/gallery/" + media.getId() + "_" + file.getOriginalFilename();
        String originalFilePath = request.getServletContext().getRealPath(fileLocation);

        try{
            file.transferTo(new File(originalFilePath));
        }catch(Exception e){
            System.out.println(e);
        }
        media.setLocation(fileLocation);        
        galleryRepository.save(media);
    }
}
