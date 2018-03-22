package com.example.service;

import java.util.List;

import com.example.model.Sink;

public interface SinkService {
	
	List<Sink> findAllSink();

	boolean isSinkExist(Sink sink);

	void saveSink(Sink Sink);

	Sink findById(long id);

	void updateSink(Sink currentSink);

	void deleteSinkById(long id);

	void deleteAllSink();

}
