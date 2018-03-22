package com.example.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Circle;
import com.example.repository.CircleRepository;

@Service("circleService2")
@Transactional
public class circleServiceImpl implements circleService {

	@Autowired
	CircleRepository CircleRepository;

	@Override
	public List<Circle> findAllCircle() {
		List<Circle> circle = CircleRepository.findAll();
		return circle;
	}

	@Override
	public boolean isCircleExist(Circle circle) {
		return CircleRepository.exists(circle.getId());
	}

	@Override
	public void saveCircle(Circle circle) {
		CircleRepository.save(circle);
	}

	@Override
	public Circle findById(Long id) {
		// TODO Auto-generated method stub
		return CircleRepository.findByid(id);
	}

	@Override
	public void updateCircle(Circle currentCircle) {
		CircleRepository.save(currentCircle);
		
	}

	@Override
	public void deleteCircleById(long id) {
		// TODO Auto-generated method stub
		CircleRepository.delete(id);
	}

	@Override
	public void deleteAllCircle() {
		// TODO Auto-generated method stub
		CircleRepository.deleteAll();
	}

	
}
