package com.example.service;

import java.util.List;

import com.example.model.Document;

public interface documentService {

	void saveDocument(Document document);

	List<Document> findAll();

	Document findById(long id);
	
	//boolean isFilenameExist(Document document);
	
	
    
}
