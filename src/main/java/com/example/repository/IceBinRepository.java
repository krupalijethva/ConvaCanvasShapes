package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Icebin;

@Repository
public interface IceBinRepository extends JpaRepository<Icebin, Long> {
	public Icebin findByid(long id);
}
