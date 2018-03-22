package com.example.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Drawer;
import com.example.repository.DrawerRepository;

@Service("DrawerService2")
@Transactional
public class DrawerServiceImpl implements DrawerService  {

	@Autowired
	DrawerRepository DrawerRepository;
	
	@Override
	public boolean isDrawerExist(Drawer drawer) {
		// TODO Auto-generated method stub
		return DrawerRepository.exists(drawer.getId());
	}

	@Override
	public void saveDrawer(Drawer drawer) {
		// TODO Auto-generated method stub
		DrawerRepository.save(drawer);
		
	}

	@Override
	public List<Drawer> findAllDrawer() {
		List<Drawer> drawers=DrawerRepository.findAll();
		return drawers;
	}

	@Override
	public Drawer findById(long id) {
		// TODO Auto-generated method stub
		return DrawerRepository.findByid(id);
	}

	@Override
	public void updateDrawer(Drawer currentdrawer) {
		// TODO Auto-generated method stub
		DrawerRepository.save(currentdrawer);
	}

	@Override
	public void deleteDrawerById(long id) {
		// TODO Auto-generated method stub
		DrawerRepository.delete(id);
	}

	@Override
	public void deleteDrawerAll() {
		// TODO Auto-generated method stub
		DrawerRepository.deleteAll();
	}

}
