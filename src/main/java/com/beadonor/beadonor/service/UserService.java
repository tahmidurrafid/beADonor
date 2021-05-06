package com.beadonor.beadonor.service;

import javax.transaction.Transactional;

import com.beadonor.beadonor.domain.User;
import com.beadonor.beadonor.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    @Transactional
    public void save(User user) {  
        userRepository.save(user);
    }

    public User findUserByEmail(String email){
        return userRepository.findUserByEmail(email);
    }

}
