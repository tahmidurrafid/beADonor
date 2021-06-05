package com.beadonor.beadonor.service;

import java.util.List;
import com.beadonor.beadonor.domain.Payment;
import com.beadonor.beadonor.repository.IssueAbstractRepository;
import com.beadonor.beadonor.repository.PaymentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService extends IssueService< Payment >{
    @Autowired
    PaymentRepository paymentRepository;

    public List<Payment> findAll(){
        return paymentRepository.findAll();
    }

    public IssueAbstractRepository<Payment> getRepository(){
        return paymentRepository;
    }
}
