package com.beadonor.beadonor.repository;

import java.sql.Timestamp;
import java.util.List;

import com.beadonor.beadonor.domain.User;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends PagingAndSortingRepository<User, Integer>{

    public User findUserByEmail(String email);

    public User findUserById(Integer id);

    @Query("SELECT p from User p WHERE p.userType = com.beadonor.beadonor.domain.UserRole.MODERATOR AND "+ 
    "(p.disabled = null OR p.disabled = false)")
    public Page<User> findActiveModerators(Pageable pageable);

    @Query("SELECT p from User p WHERE p.userType = com.beadonor.beadonor.domain.UserRole.MODERATOR AND "+ 
    "p.disabled = true")
    public Page<User> findDisabledModerators(Pageable pageable);

    @Query("SELECT new Map(p as user, SUM(u.amount) as total, " +
    "(SELECT COUNT(x) from Item x WHERE x.user.id = p.id AND x.date > :timestamp) as items) " + 
    "from User p LEFT JOIN Payment u " + 
    "ON(p.id = u.user.id) "+ 
    "WHERE u.date > :timestamp GROUP BY p.id " + 
    "ORDER BY total DESC")
    public List<?> findUserByRank(@Param("timestamp") Timestamp timestamp);

}
