package com.beadonor.beadonor.domain;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Issue {
    @Id
    private Integer id;
    private String type;
}
