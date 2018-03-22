package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Sink;

@Repository
public interface SinkRepository extends JpaRepository<Sink, Long> {
	public Sink findByid(long id);
}
