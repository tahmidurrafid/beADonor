package com.beadonor.beadonor.domain;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Gift extends Issue{
    private String size;
    @Embedded
    private ContactPerson contact;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private GiftCategory giftCategory;

    public GiftCategory getGiftCategory() {
        return giftCategory;
    }
    public void setGiftCategory(GiftCategory giftCategory) {
        this.giftCategory = giftCategory;
    }
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
