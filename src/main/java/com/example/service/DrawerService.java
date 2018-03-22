package com.example.service;

import java.util.List;

import com.example.model.Drawer;


public interface DrawerService {
List<Drawer> findAllDrawer();
	
	boolean isDrawerExist(Drawer drawer);
	
	void saveDrawer(Drawer drawer);

	Drawer findById(long id);

	void updateDrawer(Drawer currentdrawer);

	void deleteDrawerById(long id);

	void deleteDrawerAll();

}
