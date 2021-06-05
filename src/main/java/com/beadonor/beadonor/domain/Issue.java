package com.beadonor.beadonor.domain;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Issue implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String type;
    private Timestamp date;
    @ManyToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "issue", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Attachment> attachments;

    @Enumerated(EnumType.STRING)
    private IssueStatus status = IssueStatus.PENDING;

    @ManyToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "marked_user_id")
    private User markedByUser;

    public User getMarkedByUser() {
        return markedByUser;
    }
    public void setMarkedByUser(User markedByUser) {
        this.markedByUser = markedByUser;
    }
    public IssueStatus getStatus() {
        return status;
    }
    public void setStatus(IssueStatus status) {
        this.status = status;
    }
    public List<Attachment> getAttachments() {
        return attachments;
    }
    public void setAttachments(List<Attachment> attachments) {
        this.attachments = attachments;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
    public Timestamp getDate() {
        return date;
    }
    public void setDate(Timestamp date) {
        this.date = date;
    }
    
}
