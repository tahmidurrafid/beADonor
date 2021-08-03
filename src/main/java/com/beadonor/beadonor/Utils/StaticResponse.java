package com.beadonor.beadonor.Utils;

import java.util.HashMap;
import java.util.Map;

public class StaticResponse {
    public static Map<String, Object> getSuccess(){
        Map<String, Object> response = new HashMap<>();
        response.put("success", 1);
        return response;
    }
}
