package com.salon.api.salonapi.service;

import java.time.LocalDateTime;

import com.salon.api.salonapi.model.Slot;

public interface SlotsService {
    public Iterable<Slot> getAllAvailableSlotsByIdandDate(Long id,LocalDateTime slotFor);
    public Iterable<Slot> getAllAvailableSlotsByIdAndDate(LocalDateTime slotForStart,LocalDateTime slotForEnd);
    public Iterable<Slot> getAvailableSlotsByAvailableSlotsIdAndBetweenSlotFor(Long id,LocalDateTime slotForStart,LocalDateTime slotForEnd);
}
