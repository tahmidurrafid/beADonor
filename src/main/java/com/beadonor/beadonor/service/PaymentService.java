package com.beadonor.beadonor.service;

import java.util.List;

import com.beadonor.beadonor.domain.Payment;
import com.beadonor.beadonor.repository.PaymentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {
    @Autowired
    PaymentRepository paymentRepository;

    public List<Payment> findAll(){
        return paymentRepository.findAll();
    }

    public void save(Payment payment){
        paymentRepository.save(payment);
    }
}
