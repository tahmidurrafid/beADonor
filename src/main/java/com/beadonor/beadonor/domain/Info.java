package com.beadonor.beadonor.domain;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Info extends Issue{
    private String title;
    @ManyToOne
    @JoinColumn(name = "category_id")
    private InfoCategory category;
    @Column(columnDefinition = "TEXT")
    private String description;

    @Embedded
    private ContactPerson contact;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public InfoCategory getCategory() {
        return category;
    }

    public void setCategory(InfoCategory category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ContactPerson getContact() {
        return contact;
    }

    public void setContact(ContactPerson contact) {
        this.contact = contact;
    }

    
}
