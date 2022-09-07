package com.salon.api.salonapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.salon.api.salonapi.model.SalonServiceDetail;
import com.salon.api.salonapi.service.SalonServiceDetailsService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/services/")
@Tag(name="RetrieveAvailableSalonServicesAPI",description = "this controller provides services to manage salon services")
public class SalonDetailsController {
    @Autowired
    private SalonServiceDetailsService salonServiceDetailsService;

    @GetMapping("retrieveAvailableSalonServices")

    @ResponseStatus(code=HttpStatus.OK)
    @Operation(summary = "Provides all services available for spa")
    public Iterable<SalonServiceDetail> getAllSalonServices(){
        return salonServiceDetailsService.retrieveAvailableSalonServices();
    }
}
