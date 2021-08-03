package com.beadonor.beadonor.repository;

import java.util.List;

import com.beadonor.beadonor.domain.PaymentMethod;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentMethodRepository extends CrudRepository<PaymentMethod, String>{
    public List<PaymentMethod> findAll();
}
