package com.beadonor.beadonor.restcontroller;

import com.beadonor.beadonor.domain.Payment;
import com.beadonor.beadonor.service.PaymentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1")
public class PaymentRestController {
    @Autowired
    PaymentService paymentService;

    // @GetMapping("payments")
    // public List<Payment> findAll(){
    //     return paymentService.findAll();
    // }

    @GetMapping("payments")
    public Page<Payment> getAll(@RequestParam(value = "status", required = false) String status ,
            @RequestParam(value = "pageNo", required = false) Integer pageNo, 
            @RequestParam(value = "pageSize", required = false) Integer pageSize){
        return paymentService.findByFilteringAndPaging(status, pageNo, pageSize);
    }

    @GetMapping("user/payments")
    public Page<Payment> getAllUser(@RequestParam(value = "status", required = false) String status ,
            @RequestParam(value = "pageNo", required = false) Integer pageNo, 
            @RequestParam(value = "pageSize", required = false) Integer pageSize){
        return paymentService.findForUser(status, pageNo, pageSize);
    }

    @PostMapping("user/payment")
    public void save(@RequestBody Payment payment){
        paymentService.save(payment);
    }
}
