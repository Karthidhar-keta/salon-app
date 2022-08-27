package com.salon.api.salonapi.properties;

import org.springframework.boot.context.properties.ConstructorBinding;
import org.springframework.stereotype.Service;

import com.salon.api.salonapi.model.SalonDetails;

import lombok.Data;

@Service
@Data
@ConstructorBinding
public class SalonDetailProperties {
    private final SalonDetails salonDetails;

}
