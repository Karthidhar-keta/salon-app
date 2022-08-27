package com.salon.api.salonapi.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.salon.api.salonapi.model.Slot;

@Repository
public interface SlotRepository extends CrudRepository<Slot,Long>{
    
}
