package com.beadonor.beadonor.service;

import java.util.List;

import com.beadonor.beadonor.Utils.Paging;
import com.beadonor.beadonor.domain.BloodDonation;
import com.beadonor.beadonor.domain.IssueStatus;
import com.beadonor.beadonor.domain.User;
import com.beadonor.beadonor.repository.BloodDonationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class BloodDonationService extends HelpRequestService{
    @Autowired 
    BloodDonationRepository bloodDonationRepository;

    public void markRequest(Integer id){
        BloodDonation request = bloodDonationRepository.findById(id).get();
        User user = getLoggedinUser();
        request.setMarkedByUser(user);
        request.setStatus(IssueStatus.MARKED);
        bloodDonationRepository.save(request);
    }

    public void unMarkRequest(Integer id){
        BloodDonation request = bloodDonationRepository.findById(id).get();
        request.setMarkedByUser(null);
        request.setStatus(IssueStatus.PENDING);
        bloodDonationRepository.save(request);        
    }

    public List<BloodDonation> getAll(){
        return bloodDonationRepository.findAll();
    }

    public Page<BloodDonation> findAllMatch(){
        Pageable pageable = Paging.getPageable(1, 20, Sort.by("date").descending());
        User user = getLoggedinUser();
        System.out.println(user.getEmail());
        return bloodDonationRepository.findAllMatch(user.getBloodGroup(), user.getContact().getArea(),
        user.getId(), pageable);
    }

    public void save(BloodDonation bloodDonation){
        bloodDonationRepository.save(bloodDonation);
    }
    public void save(BloodDonation request, MultipartFile[] files){
        if(request.getAmount() == 0.0){
            request.setAmount(0.0);
        }
        request = bloodDonationRepository.save(request);
        super.save(request, files);
    }
}
