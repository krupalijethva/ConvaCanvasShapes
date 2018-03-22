package com.example.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Rectangle;

@Repository
public interface ShapeRepository extends JpaRepository<Rectangle, Long> {
	
	public Rectangle findByid(long id);

	
}
