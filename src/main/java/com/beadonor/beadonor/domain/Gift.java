package com.beadonor.beadonor.domain;

import javax.persistence.Embedded;
import javax.persistence.Entity;

@Entity
public class Gift extends Issue{
    private String size;
    @Embedded
    private ContactPerson contact;
    public String getSize() {
        return size;
    }
    public void setSize(String size) {
        this.size = size;
    }
    public ContactPerson getContact() {
        return contact;
    }
    public void setContact(ContactPerson contact) {
        this.contact = contact;
    }
    
}
