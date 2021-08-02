package com.beadonor.beadonor.repository;

import java.util.List;
import java.util.Optional;

import com.beadonor.beadonor.domain.Area;
import com.beadonor.beadonor.domain.BloodDonation;
import com.beadonor.beadonor.domain.BloodGroup;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface BloodDonationRepository extends PagingAndSortingRepository<BloodDonation, Integer>{
    public List<BloodDonation> findAll();

    @Query("SELECT b FROM BloodDonation b WHERE b.bloodGroup = :bgroup AND " + 
    "b.contact.area = :area AND b.status = com.beadonor.beadonor.domain.IssueStatus.PENDING AND " +
    "b.user.id <> :uId")
    public Page<BloodDonation> findAllMatch(@Param("bgroup") BloodGroup bgroup,
        @Param("area") Area area,
        @Param("uId") Integer uId, org.springframework.data.domain.Pageable pageable);
        
    public Optional<BloodDonation> findById(Integer id);
}
