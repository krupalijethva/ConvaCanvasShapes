package com.example.service;

import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.example.model.Document;
import com.example.model.Rectangle;
import com.example.repository.DocumentRepository;

@Service("documentService2")
@Transactional
public class documentServiceImpl implements documentService {

	@Autowired
	DocumentRepository documentrepository;

	@PersistenceContext
	public EntityManager em;
	
	@Override
	public void saveDocument(Document document) {
		
		String name=documentrepository.findFilename(document.getFilename());
		
		System.out.println(name);
		documentrepository.save(document);
		/*if(list.isEmpty())			
		{
			documentrepository.save(document);
//			System.out.println(document.getFilename());
//			System.out.println("data"+  documentrepository.findFilename());
		}
		else
		{
			
		}*/
	
	}

	@Override
	public List<Document> findAll() {
		// TODO Auto-generated method stub
		return documentrepository.findAll();
	}

	@Override
	public Document findById(long id) {
		// TODO Auto-generated method stub
		return documentrepository.findOne(id);
	}

//	@Override
//	public boolean isFilenameExist(Document document) {		
//		List<Object[]> list=documentrepository.findFilename();
//		if(list.contains(document.getFilename()))			
//		{
//			System.out.println(document.getFilename());
//			System.out.println("data"+  documentrepository.findFilename());
//			return true;
//		}
//		else
//		{
//			return false;
//		}		
//	}
	}
