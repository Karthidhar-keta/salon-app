package com.salon.api.salonapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.salon.api.salonapi.model.SalonServiceDetail;
import com.salon.api.salonapi.repositories.SalonServiceDetailRepository;

@Service
public class SalonServiceDetailsServiceImpl implements SalonServiceDetailsService{
    @Autowired
    private SalonServiceDetailRepository salonServiceDetailRepository;

    @Override
    public Iterable<SalonServiceDetail> retrieveAvailableSalonServices() {
        return salonServiceDetailRepository.findAll();
    }
    
}
