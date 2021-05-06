package com.beadonor.beadonor.repository;

import com.beadonor.beadonor.domain.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer>{

}
