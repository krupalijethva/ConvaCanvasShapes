package com.example.service;

import java.util.List;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Rectangle;
import com.example.repository.ShapeRepository;

@Service("shapeService2")
@Transactional
public class ShapeServiceImpl implements ShapeService {

	@Autowired
	ShapeRepository shapeRepository;
	
	@Override
	public Rectangle findById(long id) {
		// TODO Auto-generated method stub
		return shapeRepository.findOne(id);
	}
	@Override
	public boolean isRectExists(Rectangle rect) {
		// TODO Auto-generated method stub
		return shapeRepository.exists(rect.getId());
	}
	@Override
	public void saveRectangle(Rectangle rectangle) {
		
		//rectangle.setDocument(document);
		shapeRepository.save(rectangle);
		
	}
	@Override
	public List<Rectangle> findAllRect() {
		List<Rectangle> rectangle = shapeRepository.findAll();
		// TODO Auto-generated method stub
		return rectangle;
	}
	@Override
	public void updateRect(Rectangle currentRect) {
		// TODO Auto-generated method stub
		shapeRepository.save(currentRect);
	}
	@Override
	public void deleteRectById(long id) {
		// TODO Auto-generated method stub
		shapeRepository.delete(id);
	}
	@Override
	public void deleteAllRect() {
		// TODO Auto-generated method stub
		shapeRepository.deleteAll();
	}
}
