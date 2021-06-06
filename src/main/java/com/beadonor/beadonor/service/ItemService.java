package com.beadonor.beadonor.service;

import java.util.List;

import com.beadonor.beadonor.domain.Item;
import com.beadonor.beadonor.repository.IssueAbstractRepository;
import com.beadonor.beadonor.repository.ItemRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemService extends IssueService<Item>{
    @Autowired
    ItemRepository itemRepository;

    public List<Item> findAll(){
        return itemRepository.findAll();
    }

    public IssueAbstractRepository<Item> getRepository(){
        return itemRepository;
    }
}
