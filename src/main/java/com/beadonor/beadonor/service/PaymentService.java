package com.beadonor.beadonor.service;

import java.util.List;

import com.beadonor.beadonor.Exception.ApiRequestException;
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


    @Override
    public void save(Payment request) {
        String error = "";
        if(request.getAmount() == null || request.getAmount() == 0){
            error += "Amount cannot be 0 |";
        }
        if(error.length() > 0){
            throw new ApiRequestException(error);
        }
        super.save(request);
    }

    public IssueAbstractRepository<Payment> getRepository(){
        return paymentRepository;
    }
}
