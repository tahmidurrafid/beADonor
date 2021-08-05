package com.beadonor.beadonor.service;

import java.util.HashSet;
import java.util.Set;

import com.beadonor.beadonor.domain.User;
import com.beadonor.beadonor.domain.UserRole;
import com.beadonor.beadonor.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthService implements UserDetailsService{

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Set<GrantedAuthority> grantedAuthorities = new HashSet<GrantedAuthority>();
        User user = userRepository.findUserByEmail(email);
        System.out.println(user.getEmail() + " - " + user.getPassword());
        if(user.getUserType() == UserRole.ADMIN){
            grantedAuthorities.add( new SimpleGrantedAuthority("USER") );
            grantedAuthorities.add( new SimpleGrantedAuthority("MODERATOR") );
            grantedAuthorities.add( new SimpleGrantedAuthority("ADMIN") );
        }else if(user.getUserType() == UserRole.MODERATOR){
            grantedAuthorities.add( new SimpleGrantedAuthority("USER") );
            grantedAuthorities.add( new SimpleGrantedAuthority("MODERATOR") );            
        }else{
            grantedAuthorities.add( new SimpleGrantedAuthority("USER") );            
        }
        return new org.springframework.security.core.userdetails.User(email, user.getPassword(), grantedAuthorities);

    }
    
}
