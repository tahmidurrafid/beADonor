package com.beadonor.beadonor.Utils;

import java.util.List;
import com.beadonor.beadonor.domain.IssueStatus;

import org.springframework.data.domain.Pageable;

public class IssueProps {
    public List<IssueStatus> statuses;
    public Pageable pageable;
}
