package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.model.Document;

@Repository
public interface DocumentRepository extends JpaRepository<Document, Long> {
	
	List<Document> findAll();
	
	@Query(value = "SELECT filename FROM document where filename=:filename", nativeQuery = true)
    public String findFilename(@Param("filename") String filename);
    
    
	
//	public Document findByFilename(String filename);

}
