package com.beadonor.beadonor.repository;

import com.beadonor.beadonor.domain.User;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserRepository extends PagingAndSortingRepository<User, Integer>{

    public User findUserByEmail(String email);

    public User findUserById(Integer id);

    @Query("SELECT p from User p WHERE p.userType = com.beadonor.beadonor.domain.UserRole.MODERATOR AND "+ 
    "(p.disabled = null OR p.disabled = false)")
    public Page<User> findActiveModerators(Pageable pageable);

    @Query("SELECT p from User p WHERE p.userType = com.beadonor.beadonor.domain.UserRole.MODERATOR AND "+ 
    "p.disabled = true")
    public Page<User> findDisabledModerators(Pageable pageable);
}
