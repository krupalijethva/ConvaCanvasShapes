package com.example.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Icebin;
import com.example.repository.IceBinRepository;


@Service("IceBinService2")
@Transactional
public class IceBinServiceImpl implements IceBinService {

	@Autowired
	IceBinRepository IcebinRepository;
	
	@Override
	public List<Icebin> findAllIcebin() {
		// TODO Auto-generated method stub
		List<Icebin> binServices= IcebinRepository.findAll();
		return binServices;
	}

	@Override
	public void saveIcebin(Icebin bin) {
		IcebinRepository.save(bin);		
	}

	@Override
	public boolean isIcebinExist(Icebin bin) {
		// TODO Auto-generated method stub
		return IcebinRepository.exists(bin.getId());
	}

	@Override
	public Icebin findById(long id) {
		// TODO Auto-generated method stub
		return IcebinRepository.findByid(id);
	}

	@Override
	public void updateIcebin(Icebin currentIcebin) {
		// TODO Auto-generated method stub
		IcebinRepository.save(currentIcebin);
		
	}

	@Override
	public void deleteIcebinById(long id) {
		// TODO Auto-generated method stub
		IcebinRepository.delete(id);
	}

	@Override
	public void deleteAllIcebin() {
		// TODO Auto-generated method stub
		IcebinRepository.deleteAll();
	}

	

}
