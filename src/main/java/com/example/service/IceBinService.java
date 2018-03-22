package com.example.service;

import java.util.List;

import com.example.model.Icebin;

public interface IceBinService {
	List<Icebin> findAllIcebin();
	
	boolean isIcebinExist(Icebin bin);
	
	void saveIcebin(Icebin bin);

	Icebin findById(long id);

	void updateIcebin(Icebin currentIcebin);

	void deleteIcebinById(long id);

	void deleteAllIcebin();
}
