package com.salon.api.salonapi.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.salon.api.salonapi.model.Slot;
import com.salon.api.salonapi.repositories.SlotRepository;

@Service
public class SlotServiceImpl implements SlotsService{

    @Autowired
    private SlotRepository slotRepository;

    @Override
    public Iterable<Slot> getAllAvailableSlotsByIdandDate(Long id, LocalDateTime slotFor) {
        return slotRepository.findAllByIdAndSlotFor(id, slotFor);
    }

    @Override
    public Iterable<Slot> getAllAvailableSlotsByIdAndDate(LocalDateTime slotForStart, LocalDateTime slotForEnd) {
        return slotRepository.findAllBySlotForBetween(slotForStart, slotForEnd);
    }

    @Override
    public Iterable<Slot> getAvailableSlotsByAvailableSlotsIdAndBetweenSlotFor(Long id, LocalDateTime slotForStart,
            LocalDateTime slotForEnd) {
                return slotRepository.findAllByAvailableServicesIdAndSlotForBetween(id, slotForStart, slotForEnd);
    }

    
}
