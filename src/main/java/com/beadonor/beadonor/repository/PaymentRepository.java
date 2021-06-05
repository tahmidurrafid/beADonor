package com.beadonor.beadonor.repository;

import java.util.List;

import com.beadonor.beadonor.domain.Payment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends IssueAbstractRepository<Payment>{

    public List<Payment> findAll();
}
