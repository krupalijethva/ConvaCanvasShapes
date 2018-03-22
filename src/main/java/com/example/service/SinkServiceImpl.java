 package com.example.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Sink;
import com.example.repository.SinkRepository;

@Service("SinkService2")
@Transactional
public class SinkServiceImpl implements SinkService {

	@Autowired
	SinkRepository SinkRepository;
	
	@Override
	public List<Sink> findAllSink() {
		List<Sink> sinks=SinkRepository.findAll();
		// TODO Auto-generated method stub
		return sinks;
	}

	@Override
	public boolean isSinkExist(Sink sink) {		
		// TODO Auto-generated method stub
		return SinkRepository.exists(sink.getId());
	}

	@Override
	public void saveSink(Sink Sink) {
		// TODO Auto-generated method stub
		SinkRepository.save(Sink);
	}

	@Override
	public Sink findById(long id) {
		// TODO Auto-generated method stub
		return SinkRepository.findByid(id);
	}
	@Override
	public void updateSink(Sink currentSink) {
		// TODO Auto-generated method stub
		SinkRepository.save(currentSink);
	}

	@Override
	public void deleteSinkById(long id) {
		// TODO Auto-generated method stub
		SinkRepository.delete(id);
	}

	@Override
	public void deleteAllSink() {
		// TODO Auto-generated method stub
		SinkRepository.deleteAll();
	}

}
