package com.beadonor.beadonor.service;

import java.util.List;

import com.beadonor.beadonor.domain.Info;
import com.beadonor.beadonor.repository.InfoRepository;
import com.beadonor.beadonor.repository.IssueAbstractRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InfoService extends IssueService<Info>{
    @Autowired
    InfoRepository infoRepository;

    public List<Info> findAll(){
        return infoRepository.findAll();
    } 

    public void save(Info info){
        infoRepository.save(info);
    }

    public IssueAbstractRepository<Info> getRepository(){
        return infoRepository;
    }
}
