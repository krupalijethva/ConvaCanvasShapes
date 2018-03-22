package com.example.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Document")
public class Document {

	@Id
	@Column(name = "doc_Id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long docId;
	
	@OneToMany(mappedBy = "document", fetch = FetchType.LAZY)
	private Set<Circle> circle=new HashSet<>();


	public Set<Circle> getCircle() {
		return circle;
	}

	public void setCircle(Set<Circle> circle) {
		this.circle = circle;
	}

	private String filename;
	

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "document")
	private Set<Sink> sink = new HashSet<>();
	

	public Set<Sink> getSink() {
		return sink;
	}

	public void setSink(Set<Sink> sink) {
		this.sink = sink;
	}

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "document")
	private Set<Drawer> drawers = new HashSet<>();

	
	public Set<Drawer> getDrawers() {
		return drawers;
	}

	public void setDrawers(Set<Drawer> drawers) {
		this.drawers = drawers;
	}

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "document")
	private Set<Icebin> iceBin = new HashSet<>();
	
	public Set<Icebin> getIceBin() {
		return iceBin;
	}

	public void setIceBin(Set<Icebin> iceBin) {
		this.iceBin = iceBin;
	}

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "document")
	private Set<Rectangle> rectangle = new HashSet<>();
	
	public Set<Rectangle> getRectangle() {
		return rectangle;
	}

	public void setRectangle(Set<Rectangle> rectangle) {
		this.rectangle = rectangle;
	}

	public Document() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getFilename() {
		return filename;
	}

	public void setFilename(String filename) {
		this.filename = filename;
	}

	public long getDocId() {
		return docId;
	}

	public void setDocId(long docId) {
		this.docId = docId;
	}

}
