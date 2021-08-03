package com.beadonor.beadonor.service;

import java.io.File;
import java.sql.Timestamp;
import java.util.List;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;

import com.beadonor.beadonor.Exception.ApiRequestException;
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
        User user = userRepository.findUserByEmail( LoggedIn.getEmail() );
        return user;
    }
    public Page<User> getModerators(String status, Integer pageNo, Integer pageSize){
        Pageable pageable = Paging.getPageable(pageNo, pageSize);
        if(status.equalsIgnoreCase("ACTIVE")){
            return userRepository.findActiveModerators(pageable);
        }
        return userRepository.findDisabledModerators(pageable);        
    }

    public List<?> findUserByRank(){
        Timestamp timestamp = new Timestamp(System.currentTimeMillis() - 30*24*60*60*(long)1000);
        System.out.println(timestamp);
        return userRepository.findUserByRank(timestamp);
    }

    public void changeState(Integer id){
        User user = userRepository.findUserById(id);
        System.out.println(user.getEmail());
        user.setDisabled(!user.getDisabled());
        userRepository.save(user);
    }

    @Transactional
    public void save(User user) { 
        String error = "";

        Pattern EMAIL_REGEX = Pattern.compile("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", Pattern.CASE_INSENSITIVE);
        
        User exisiting = userRepository.findUserByEmail(user.getEmail());
        if(exisiting != null){
            error += "Email already exists |";    
        }

        if(user.getEmail() == null || user.getEmail() == "" || 
            ! EMAIL_REGEX.matcher(user.getEmail()).matches()){
            error += "Invalid Email | ";
        }
        if(user.getPassword() == null || user.getPassword() == ""){
            error += "Password cannot be empty |";
        }
        if(error.length() > 0){
            System.out.println("Error thrown");
            throw new ApiRequestException(error);
        }
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
