package com.salon.api.salonapi.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.salon.api.salonapi.service.SalonServiceDetail;

@Repository
public interface SalonServiceDetailRepository extends CrudRepository<SalonServiceDetail,Long>{
    
}
