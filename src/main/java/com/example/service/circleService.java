package com.example.service;

import java.util.List;

import com.example.model.Circle;

public interface circleService {

	Circle findById(Long id);

	List<Circle> findAllCircle();

	boolean isCircleExist(Circle circle);

	void saveCircle(Circle circle);

	void updateCircle(Circle currentCircle);

	void deleteCircleById(long id);

	void deleteAllCircle();
}
