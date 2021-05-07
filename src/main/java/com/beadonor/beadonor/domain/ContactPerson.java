package com.beadonor.beadonor.domain;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Embeddable
public class ContactPerson implements Serializable{
    @ManyToOne
    @JoinColumn(name = "area_id")
    private Area area;

    private String address;
    private String phoneNo;
    public Area getArea() {
        return area;
    }
    public void setArea(Area area) {
        this.area = area;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getPhoneNo() {
        return phoneNo;
    }
    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

}
