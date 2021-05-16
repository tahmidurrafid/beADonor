package com.beadonor.beadonor.Utils;

import org.springframework.security.core.context.SecurityContextHolder;

public class LoggedIn {
    public static String getEmail(){
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }
}
