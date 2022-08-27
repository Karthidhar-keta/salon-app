package com.salon.api.salonapi.model;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConstructorBinding;

import lombok.Data;

@Data
@ConstructorBinding
@ConfigurationProperties("salon.detail")
public class SalonDetails {
    private String name;
    private String address;
    private String city;
    private String state;
    private String zipcode;
    private String phone;
}
