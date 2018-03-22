package com.example.service;

import java.util.List;
import com.example.model.Rectangle;

public interface ShapeService {
	
	List<Rectangle> findAllRect();
	
	Rectangle findById(long id); 
	
	public boolean isRectExists(Rectangle rect);

	void saveRectangle(Rectangle rectangle);

	void updateRect(Rectangle currentRect);

	void deleteRectById(long id);

	void deleteAllRect();
}
