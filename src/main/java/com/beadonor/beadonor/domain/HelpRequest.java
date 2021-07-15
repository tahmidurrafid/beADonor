package com.beadonor.beadonor.domain;

import javax.persistence.AssociationOverride;
import javax.persistence.AssociationOverrides;
import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrimaryKeyJoinColumn;

@Entity
@PrimaryKeyJoinColumn(name = "id")
public class HelpRequest extends Issue{
    private String title;
    @ManyToOne
    @JoinColumn(name = "category_id")
    private HelpCategory helpCategory;
    @Column(columnDefinition = "TEXT")
    private String description;

    private Double amount;

    @Embedded
    private ContactPerson contact;
    @Embedded
    @AttributeOverrides({
        @AttributeOverride( name = "area", column = @Column(name = "g_area")),
        @AttributeOverride( name = "address", column = @Column(name = "g_address")),
        @AttributeOverride( name = "phoneNo", column = @Column(name = "g_phoneNo")),
        @AttributeOverride( name = "contactName", column = @Column(name = "g_conatctName"))
    })
    @AssociationOverrides({
        @AssociationOverride( name = "area", joinColumns = @JoinColumn( name = "g_area_id" ))
    })    
    private ContactPerson guardianContact;
    private Double paid;
    
    public Double getPaid() {
        if(paid == null)
            return 0.0;
        return paid;
    }
    public void setPaid(Double paid) {
        this.paid = paid;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public HelpCategory getHelpCategory() {
        return helpCategory;
    }
    public void setHelpCategory(HelpCategory helpCategory) {
        this.helpCategory = helpCategory;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Double getAmount() {
        return amount;
    }
    public void setAmount(Double amount) {
        this.amount = amount;
    }
    public ContactPerson getContact() {
        return contact;
    }
    public void setContact(ContactPerson contact) {
        this.contact = contact;
    }
    public ContactPerson getGuardianContact() {
        return guardianContact;
    }
    public void setGuardianContact(ContactPerson guardianContact) {
        this.guardianContact = guardianContact;
    }
    @Override
    public String toString() {
        return super.toString() + " = = " + "HelpRequest [amount=" + amount + ", contact=" + contact + ", description=" + description
                + ", guardianContact=" + guardianContact + ", helpCategory=" + helpCategory + ", title=" + title + "]";
    }


    

}
