package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Drawer;
@Repository
public interface DrawerRepository extends JpaRepository<Drawer, Long> {
	public Drawer findByid(long id);
}
