package com.beadonor.beadonor.service;

import java.io.File;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;

import com.beadonor.beadonor.Utils.LoggedIn;
import com.beadonor.beadonor.Utils.Paging;
import com.beadonor.beadonor.domain.User;
import com.beadonor.beadonor.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    HttpServletRequest request;

    public User getLoggedinUser(){
        User user = userRepository.findUserByEmail( LoggedIn.getEmail() ) ;
        return user;
    }
    public Page<User> getModerators(String status, Integer pageNo, Integer pageSize){
        Pageable pageable = Paging.getPageable(pageNo, pageSize);
        if(status.equalsIgnoreCase("ACTIVE")){
            return userRepository.findActiveModerators(pageable);
        }
        return userRepository.findDisabledModerators(pageable);        
    }

    public void changeState(Integer id){
        User user = userRepository.findUserById(id);
        System.out.println(user.getEmail());
        user.setDisabled(!user.getDisabled());
        userRepository.save(user);
    }

    @Transactional
    public void save(User user) {  
        userRepository.save(user);
    }

    @Transactional
    public void update(User user) {  
        User original = getLoggedinUser();
        original.setEmail(user.getEmail());
        original.setName(user.getName());
        original.setBirthDate(user.getBirthDate());
        original.setBloodGroup(user.getBloodGroup());
        original.setContact(user.getContact());
        // System.out.println(user.getEmail());
        userRepository.save(original);
    }

    public User findUserByEmail(String email){
        return userRepository.findUserByEmail(email);
    }

    public User saveProfilePhoto(MultipartFile file){
        User user = getLoggedinUser();
        user.setDpLocation("/attachments/dp/" + user.getId() + ".jpg");
        save(user);
        String filePath = request.getServletContext().getRealPath(user.getDpLocation());         
        try{
            file.transferTo(new File(filePath));
        }catch(Exception e){
            e.printStackTrace();
        }
        return user;
    }
}
