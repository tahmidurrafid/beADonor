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
    private UserRole userType = UserRole.USER;

    private String dpLocation;

    private Integer points;

    private Boolean disabled;

    public Integer getPoints() {
        if(points == null){
            points = 0;
        }
        return points;
    }
    public Boolean getDisabled() {
        if(disabled == null)
            return false;
        return disabled;
    }
    public void setDisabled(Boolean disabled) {
        if(disabled == null)
            disabled = false;
        this.disabled = disabled;
    }
    public void setPoints(Integer points) {
        this.points = points;
    }
    public String getDpLocation() {
        return dpLocation;
    }
    public void setDpLocation(String dpLocation) {
        this.dpLocation = dpLocation;
    }
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

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        User other = (User) obj;
        if (birthDate == null) {
            if (other.birthDate != null)
                return false;
        } else if (!birthDate.equals(other.birthDate))
            return false;
        if (bloodGroup == null) {
            if (other.bloodGroup != null)
                return false;
        } else if (!bloodGroup.equals(other.bloodGroup))
            return false;
        if (contact == null) {
            if (other.contact != null)
                return false;
        } else if (!contact.equals(other.contact))
            return false;
        if (dpLocation == null) {
            if (other.dpLocation != null)
                return false;
        } else if (!dpLocation.equals(other.dpLocation))
            return false;
        if (email == null) {
            if (other.email != null)
                return false;
        } else if (!email.equals(other.email))
            return false;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (name == null) {
            if (other.name != null)
                return false;
        } else if (!name.equals(other.name))
            return false;
        if (password == null) {
            if (other.password != null)
                return false;
        } else if (!password.equals(other.password))
            return false;
        if (userType != other.userType)
            return false;
        return true;
    }
    
}
