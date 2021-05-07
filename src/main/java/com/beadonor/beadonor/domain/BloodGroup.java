package com.beadonor.beadonor.domain;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class BloodGroup {
    @Id
    private String bloodgroup;

    public String getBloodgroup() {
        return bloodgroup;
    }

    public void setBloodgroup(String bloodgroup) {
        this.bloodgroup = bloodgroup;
    }
    
}
