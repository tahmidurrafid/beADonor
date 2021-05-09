package com.beadonor.beadonor.repository;

import java.util.List;

import com.beadonor.beadonor.domain.Payment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer>{
    public List<Payment> findAll();
}
