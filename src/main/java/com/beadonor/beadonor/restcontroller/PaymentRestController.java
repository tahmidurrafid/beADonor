package com.beadonor.beadonor.restcontroller;

import java.util.List;

import com.beadonor.beadonor.domain.Payment;
import com.beadonor.beadonor.service.PaymentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1")
public class PaymentRestController {
    @Autowired
    PaymentService paymentService;

    @GetMapping("payments")
    public List<Payment> findAll(){
        return paymentService.findAll();
    }

    @PostMapping("payment")
    public void save(@RequestBody Payment payment){
        paymentService.save(payment);
    }
}
