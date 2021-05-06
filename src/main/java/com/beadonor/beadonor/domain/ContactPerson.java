package com.beadonor.beadonor.domain;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Embeddable
public class ContactPerson {
    @ManyToOne
    @JoinColumn(name = "area_id")
    private Area area;

    private String address;
    private String phoneNo;
}
