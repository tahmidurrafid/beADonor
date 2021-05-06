package com.beadonor.beadonor.domain;
import java.util.Set;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class District {
    @Id
    private String name;

    @OneToMany(mappedBy = "district")
    private Set<Area> areas;
}
