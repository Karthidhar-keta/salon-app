package com.salon.api.salonapi.controllers;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.salon.api.salonapi.model.Slot;
import com.salon.api.salonapi.service.SlotsService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@Tag(name="RetrieveAvailableSlotsAPI",description = "this controller provides services to manage slot services")
public class SlotsController {


    @Autowired
    private SlotsService slotsService;

    @GetMapping("/api/services/retrieveAvailableSlots/{salonServiceld}/{formatteddate}")
    @ResponseStatus(code=HttpStatus.OK)
    @Operation(summary = "Provides a list of the available slots for the service on the specified date")
    public Iterable<Slot> getAvailableSlotsById(@PathVariable Long salonServiceld,@PathVariable String formatteddate){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String start = formatteddate+" 00:00:00";
        String end = formatteddate+" 23:59:59";
        LocalDateTime localStart = LocalDateTime.parse(start,formatter);
        LocalDateTime localEnd = LocalDateTime.parse(end,formatter);
        return slotsService.getAvailableSlotsByAvailableSlotsIdAndBetweenSlotFor(salonServiceld, localStart, localEnd);
    }
    
}
