package com.beadonor.beadonor.domain;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Payment extends Issue{
    private Integer amount;

    @ManyToOne()
    @JoinColumn(name = "methodName")
    private PaymentMethod method;

    private String transactionId;
    private String reference;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private DonationCategory category;
    
    @ManyToOne
    @JoinColumn(name = "ref_issue_id")
    private Issue refIssue;


    public DonationCategory getCategory() {
        return category;
    }
    public void setCategory(DonationCategory category) {
        this.category = category;
    }
    public Issue getRefIssue() {
        return refIssue;
    }
    public void setRefIssue(Issue refIssue) {
        this.refIssue = refIssue;
    }
    public Integer getAmount() {
        return amount;
    }
    public void setAmount(Integer amount) {
        this.amount = amount;
    }
    public PaymentMethod getMethod() {
        return method;
    }
    public void setMethod(PaymentMethod method) {
        this.method = method;
    }
    public String getTransactionId() {
        return transactionId;
    }
    public void setTransactionId(String transactionId) {
        this.transactionId = transactionId;
    }
    public String getReference() {
        return reference;
    }
    public void setReference(String reference) {
        this.reference = reference;
    }
    
}
