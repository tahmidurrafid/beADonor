package com.beadonor.beadonor.domain;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "User")
public class User implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id; 

    private String email;
    private String password;
    private String name;
    private Date birthDate;

    @ManyToOne
    @JoinColumn(name = "bloodGroup")
    private BloodGroup bloodGroup;

    @Embedded
    private ContactPerson contact;

    @Enumerated(EnumType.STRING)
    private UserRole userType;
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Date getBirthDate() {
        return birthDate;
    }
    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }
    public BloodGroup getBloodGroup() {
        return bloodGroup;
    }
    public void setBloodGroup(BloodGroup bloodGroup) {
        this.bloodGroup = bloodGroup;
    }
    public ContactPerson getContact() {
        return contact;
    }
    public void setContact(ContactPerson contact) {
        this.contact = contact;
    }
    public UserRole getUserType() {
        return userType;
    }
    public void setUserType(UserRole userType) {
        this.userType = userType;
    }
    
}
