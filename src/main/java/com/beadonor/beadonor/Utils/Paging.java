package com.beadonor.beadonor.Utils;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

public class Paging {
    public static Pageable getPageable(Integer pageNo, Integer pageSize){
        if(pageNo == null){
            pageNo = 1;
        }
        if(pageSize == null)
            pageSize = 10;
        Pageable pageable = PageRequest.of(pageNo-1, pageSize);
        return pageable;
    }
}
