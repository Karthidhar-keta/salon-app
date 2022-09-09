package com.salon.api.salonapi.repositories;

import java.time.LocalDateTime;

import org.hibernate.type.TrueFalseType;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.salon.api.salonapi.model.Slot;

@Repository
public interface SlotRepository extends CrudRepository<Slot, Long> {
    @Query("Select s from Slot s where s.id=:id and s.slotFor=:slotFor")
    Iterable<Slot> findAllByIdAndSlotFor(@Param("id") Long id, @Param("slotFor") LocalDateTime slotFor);

    Iterable<Slot> findAllBySlotForBetween(
            LocalDateTime slotForStart,
            LocalDateTime slotForEnd);
    @Query(value = "Select a.* from slot a,slot_available_services b where b.available_services_id=?1 and a.id=b.slot_id and a.slot_for between ?2 and ?3",nativeQuery = true)
    Iterable<Slot> findAllByAvailableServicesIdAndSlotForBetween(Long id,LocalDateTime slotForStart,LocalDateTime slotForEnd);
}

