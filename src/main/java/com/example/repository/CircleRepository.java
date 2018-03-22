package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Circle;

@Repository
public interface CircleRepository extends JpaRepository<Circle, Long> {
		public Circle findByid(long id);
		List<Circle> findAll();
	
}
