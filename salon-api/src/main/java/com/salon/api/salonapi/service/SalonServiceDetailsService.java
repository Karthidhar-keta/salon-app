package com.salon.api.salonapi.service;

import com.salon.api.salonapi.model.SalonServiceDetail;

public interface SalonServiceDetailsService {
    public Iterable<SalonServiceDetail> retrieveAvailableSalonServices();
}
