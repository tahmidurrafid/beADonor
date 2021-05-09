package com.beadonor.beadonor.domain;
import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class District implements Serializable{
    @Id
    private String name;

    @OneToMany(mappedBy = "district", fetch = FetchType.LAZY)

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
}
