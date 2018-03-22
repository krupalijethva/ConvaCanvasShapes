package com.example.controller;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;
import com.example.model.Circle;
import com.example.model.Document;
import com.example.model.Drawer;
import com.example.model.Icebin;
import com.example.model.Rectangle;
import com.example.model.Sink;
import com.example.service.DrawerService;
import com.example.service.IceBinService;
import com.example.service.ShapeService;
import com.example.service.SinkService;
import com.example.service.circleService;
import com.example.service.documentService;

@RestController
public class ShapeRestController {

	@Autowired
	ShapeService service;// Service which will do all data retrieval/manipulation work

	@Autowired
	circleService circleservice;

	@Autowired
	DrawerService DrawerService;

	@Autowired
	IceBinService IceBinService;

	@Autowired
	SinkService SinkService;

	@Autowired
	documentService documentService;

	Document document = new Document();
    Rectangle rectangle=new Rectangle();
	// ------------------- Delete all Drawer
	// --------------------------------------------------------

	@RequestMapping(value = "/deleteAllDrawer/", method = RequestMethod.DELETE)
	public ResponseEntity<Drawer> deleteAllDrawer() {
		DrawerService.deleteDrawerAll();
		System.out.println("Delete All Data");
		return new ResponseEntity<Drawer>(HttpStatus.NO_CONTENT);
	}

	@RequestMapping(value = "/deleteAllCircle/", method = RequestMethod.DELETE)
	public ResponseEntity<Drawer> deleteAllCircle() {
		circleservice.deleteAllCircle();
		System.out.println("Delete All Data");
		return new ResponseEntity<Drawer>(HttpStatus.NO_CONTENT);
	}

	@RequestMapping(value = "/deleteAllSink/", method = RequestMethod.DELETE)
	public ResponseEntity<Drawer> deleteAllSink() {
		SinkService.deleteAllSink();
		System.out.println("Delete All Data");
		return new ResponseEntity<Drawer>(HttpStatus.NO_CONTENT);
	}

	@RequestMapping(value = "/deleteAllIcebin/", method = RequestMethod.DELETE)
	public ResponseEntity<Drawer> deleteAllIcebin() {
		IceBinService.deleteAllIcebin();
		System.out.println("Delete All Data");
		return new ResponseEntity<Drawer>(HttpStatus.NO_CONTENT);
	}

	@RequestMapping(value = "/deleteAllRect/", method = RequestMethod.DELETE)
	public ResponseEntity<Drawer> deleteAllRect() {
		service.deleteAllRect();
		System.out.println("Delete All Data");
		return new ResponseEntity<Drawer>(HttpStatus.NO_CONTENT);
	}
	// ------------------- Delete a Drawer
	// --------------------------------------------------------

	@RequestMapping(value = "/drawer/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Drawer> deleteDrawer(@PathVariable("id") long id) {
		System.out.println("Fetching & Deleting Drawer with id " + id);

		Drawer drawer = DrawerService.findById(id);
		if (drawer == null) {
			System.out.println("Unable  to delete. drawer with id " + id + " not found");
			return new ResponseEntity<Drawer>(HttpStatus.NOT_FOUND);
		}
		DrawerService.deleteDrawerById(id);
		return new ResponseEntity<Drawer>(HttpStatus.NO_CONTENT);
	}

	// ------------------- Delete a bin
	// --------------------------------------------------------

	@RequestMapping(value = "/Icebin/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Icebin> deleteIcebin(@PathVariable("id") long id) {
		System.out.println("Fetching & Deleting Rect with id " + id);

		Icebin bin = IceBinService.findById(id);
		if (bin == null) {
			System.out.println("Unable  to delete. Rect with id " + id + " not found");
			return new ResponseEntity<Icebin>(HttpStatus.NOT_FOUND);
		}
		IceBinService.deleteIcebinById(id);
		return new ResponseEntity<Icebin>(HttpStatus.NO_CONTENT);
	}

	// ------------------- Delete a Rect
	// --------------------------------------------------------

	@RequestMapping(value = "/rect/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Rectangle> deleteRect(@PathVariable("id") long id) {
		System.out.println("Fetching & Deleting Rect with id " + id);

		Rectangle rectangle = service.findById(id);
		if (rectangle == null) {
			System.out.println("Unable  to delete. Rect with id " + id + " not found");
			return new ResponseEntity<Rectangle>(HttpStatus.NOT_FOUND);
		}

		service.deleteRectById(id);
		return new ResponseEntity<Rectangle>(HttpStatus.NO_CONTENT);
	}

	// ------------------- Delete a Sink
	// --------------------------------------------------------

	@RequestMapping(value = "/sink/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Sink> deleteSink(@PathVariable("id") long id) {
		System.out.println("Fetching & Deleting Sink with id " + id);

		Sink sink = SinkService.findById(id);
		if (sink == null) {
			System.out.println("Unable  to delete. Circle with id " + id + " not found");
			return new ResponseEntity<Sink>(HttpStatus.NOT_FOUND);
		}

		SinkService.deleteSinkById(id);
		return new ResponseEntity<Sink>(HttpStatus.NO_CONTENT);
	}

	// ------------------- Delete a Circle
	// --------------------------------------------------------

	@RequestMapping(value = "/circle/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Circle> deleteCircle(@PathVariable("id") long id) {
		System.out.println("Fetching & Deleting User with id " + id);

		Circle circle = circleservice.findById(id);
		if (circle == null) {
			System.out.println("Unable  to delete. Circle with id " + id + " not found");
			return new ResponseEntity<Circle>(HttpStatus.NOT_FOUND);
		}

		circleservice.deleteCircleById(id);
		return new ResponseEntity<Circle>(HttpStatus.NO_CONTENT);
	}

	// ------------------- Update a circle
	// --------------------------------------------------------
	@RequestMapping(value = "/circle/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Circle> updateCircle(@PathVariable("id") long id, @RequestBody Circle circle) {
		System.out.println("Updating Circle" + id);

		Circle currentCircle = circleservice.findById(id);

		if (currentCircle == null) {
			System.out.println("Circle with id " + id + " not found");
			return new ResponseEntity<Circle>(HttpStatus.NOT_FOUND);
		}

		currentCircle.setCx(circle.getCx());
		currentCircle.setCy(circle.getCy());
		currentCircle.setRadius(circle.getRadius());

		circleservice.updateCircle(currentCircle);
		return new ResponseEntity<Circle>(currentCircle, HttpStatus.OK);
	}

	// ------------------- Update a Rect
	// --------------------------------------------------------

	@RequestMapping(value = "/rect/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Rectangle> updateRect(@PathVariable("id") long id, @RequestBody Rectangle Rectangle) {
		System.out.println("Updating Rectangle" + id);
		Rectangle currentRect = service.findById(id);
		if (currentRect == null) {
			System.out.println("Rectangle with id " + id + " not found");
			return new ResponseEntity<Rectangle>(HttpStatus.NOT_FOUND);
		}
		currentRect.setRx(Rectangle.getRx());
		currentRect.setRy(Rectangle.getRy());
		currentRect.setWidth(Rectangle.getWidth());
		currentRect.setLength(Rectangle.getLength());
		service.updateRect(currentRect);
		return new ResponseEntity<Rectangle>(currentRect, HttpStatus.OK);
	}

	// ------------------- Update a Sink
	// --------------------------------------------------------
	@RequestMapping(value = "/sink/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Sink> updateSink(@PathVariable("id") long id, @RequestBody Sink sink) {
		System.out.println("Updating Sink" + id);
		Sink currentSink = SinkService.findById(id);
		if (currentSink == null) {
			System.out.println("Rectangle with id " + id + " not found");
			return new ResponseEntity<Sink>(HttpStatus.NOT_FOUND);
		}
		currentSink.setSx(sink.getSx());
		currentSink.setSy(sink.getSy());
		currentSink.setWidth(sink.getWidth());
		currentSink.setLength(sink.getLength());
		SinkService.updateSink(currentSink);
		return new ResponseEntity<Sink>(currentSink, HttpStatus.OK);
	}

	// ------------------- Update a Icebin
	// --------------------------------------------------------
	@RequestMapping(value = "/Icebin/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Icebin> updateIcebin(@PathVariable("id") long id, @RequestBody Icebin Icebin) {
		System.out.println("Updating Sink" + id);
		Icebin currentIcebin = IceBinService.findById(id);
		if (currentIcebin == null) {
			System.out.println("Icebin with id " + id + " not found");
			return new ResponseEntity<Icebin>(HttpStatus.NOT_FOUND);
		}
		currentIcebin.setIx(Icebin.getIx());
		currentIcebin.setIy(Icebin.getIy());
		currentIcebin.setWidth(Icebin.getWidth());
		currentIcebin.setLength(Icebin.getLength());
		IceBinService.updateIcebin(currentIcebin);
		return new ResponseEntity<Icebin>(currentIcebin, HttpStatus.OK);
	}

	// ------------------- Update a Drawer
	// --------------------------------------------------------
	@RequestMapping(value = "/drawer/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Drawer> updateDrawer(@PathVariable("id") long id, @RequestBody Drawer drawer) {
		System.out.println("Updating Sink" + id);
		Drawer currentdrawer = DrawerService.findById(id);
		if (currentdrawer == null) {
			System.out.println("Icebin with id " + id + " not found");
			return new ResponseEntity<Drawer>(HttpStatus.NOT_FOUND);
		}
		currentdrawer.setDx(drawer.getDx());
		currentdrawer.setDy(drawer.getDy());
		currentdrawer.setWidth(drawer.getWidth());
		currentdrawer.setLength(drawer.getLength());
		DrawerService.updateDrawer(currentdrawer);
		return new ResponseEntity<Drawer>(currentdrawer, HttpStatus.OK);
	}

	// -------------------Retrieve
	// AllRect--------------------------------------------------------
	@RequestMapping(value = "/AllSink/", method = RequestMethod.GET)
	public ResponseEntity<List<Sink>> listAllSink() {
		List<Sink> sinks = SinkService.findAllSink();
		if (sinks.isEmpty()) {
			return new ResponseEntity<List<Sink>>(HttpStatus.NO_CONTENT);// You many decide to return
			// HttpStatus.NOT_FOUND
		}
		return new ResponseEntity<List<Sink>>(sinks, HttpStatus.OK);
	}

	// -------------------Retrieve
	// AllDrawer--------------------------------------------------------
	@RequestMapping(value = "/AllDrawer/", method = RequestMethod.GET)
	public ResponseEntity<List<Drawer>> listAllDrawer() {
		List<Drawer> drawers = DrawerService.findAllDrawer();
		if (drawers.isEmpty()) {
			return new ResponseEntity<List<Drawer>>(HttpStatus.NO_CONTENT);// You many decide to return
			// HttpStatus.NOT_FOUND
		}
		return new ResponseEntity<List<Drawer>>(drawers, HttpStatus.OK);
	}

	// -------------------Retrieve
	// AllIcebin--------------------------------------------------------
	@RequestMapping(value = "/AllIcebin/", method = RequestMethod.GET)
	public ResponseEntity<List<Icebin>> listAllIcebin() {
		List<Icebin> Icebins = IceBinService.findAllIcebin();
		if (Icebins.isEmpty()) {
			return new ResponseEntity<List<Icebin>>(HttpStatus.NO_CONTENT);// You many decide to return
			// HttpStatus.NOT_FOUND
		}
		return new ResponseEntity<List<Icebin>>(Icebins, HttpStatus.OK);
	}

	// -------------------Retrieve
	// AllRect--------------------------------------------------------
	@RequestMapping(value = "/AllRect/", method = RequestMethod.GET)
	public ResponseEntity<List<Rectangle>> listAllRect() {
		List<Rectangle> rectangle = service.findAllRect();
		if (rectangle.isEmpty()) {
			return new ResponseEntity<List<Rectangle>>(HttpStatus.NO_CONTENT);// You many decide to return
			// HttpStatus.NOT_FOUND
		}
		return new ResponseEntity<List<Rectangle>>(rectangle, HttpStatus.OK);
	}

	// -------------------Retrieve
	// AllCircle--------------------------------------------------------
	@RequestMapping(value = "/AllCircle/", method = RequestMethod.GET)
	public ResponseEntity<List<Circle>> listAllCircle() {
		List<Circle> circle = circleservice.findAllCircle();
		if (circle.isEmpty()) {
			return new ResponseEntity<List<Circle>>(HttpStatus.NO_CONTENT);// You many decide to return
																			// HttpStatus.NOT_FOUND
		}
		return new ResponseEntity<List<Circle>>(circle, HttpStatus.OK);
	}
	/*
	 * //-------------------Retrieve Single
	 * User--------------------------------------------------------
	 * 
	 * @RequestMapping(value = "/shape/{id}", method = RequestMethod.GET, produces =
	 * MediaType.APPLICATION_JSON_VALUE) public ResponseEntity<Rectangle>
	 * getUser(@PathVariable("id") long id) {
	 * System.out.println("Fetching rectangle with id " + id); Rectangle rectangle =
	 * service.findById(id); if (rectangle == null) {
	 * System.out.println("rectangle with id " + id + " not found"); return new
	 * ResponseEntity<Rectangle>(HttpStatus.NOT_FOUND); } return new
	 * ResponseEntity<Rectangle>(rectangle, HttpStatus.OK); }
	 */

	@RequestMapping(value = "/AllDocument/", method = RequestMethod.GET)
	public ResponseEntity<List<Document>> getdocuments() {
		List<Document> documents = documentService.findAll();
		return new ResponseEntity<List<Document>>(documents, HttpStatus.OK);
	}

	// -------------------Create a
	// Rectangle--------------------------------------------------------
	@RequestMapping(value = "/Rect/", method = RequestMethod.POST)
	public ResponseEntity<Void> createRect(@RequestBody Rectangle rectangle, UriComponentsBuilder ucBuilder) {
	
		if (service.isRectExists(rectangle)) {
			System.out.println("A Rectangle with ID " + rectangle.getId() + " already exist");
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		} else {			
			
			service.saveRectangle(rectangle);
			
			System.out.println("Creating Rectangle " + rectangle.getId());
			HttpHeaders headers = new HttpHeaders();
			headers.setLocation(ucBuilder.path("/Rect/{id}").buildAndExpand(rectangle.getId()).toUri());
			return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
		}
	}

	// -------------------Create a
	// Circle--------------------------------------------------------
	@RequestMapping(value = "/Circle/", method = RequestMethod.POST)
	public ResponseEntity<Void> createCircle(@RequestBody Circle circle, UriComponentsBuilder ucBuilder) {
		System.out.println("Creating Circle " + circle.getId());
		if (circleservice.isCircleExist(circle)) {
			System.out.println("A Circle with ID " + circle.getId() + " already exist");
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
		circleservice.saveCircle(circle);
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/Circle/{id}").buildAndExpand(circle.getId()).toUri());
		return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}

	// -------------------Create a
	// Document--------------------------------------------------------
	@RequestMapping(value = "/Document/", method = RequestMethod.POST)
	public ResponseEntity<Void> createDocument(@RequestBody Document document, UriComponentsBuilder ucBuilder) {
		
//		if (documentService.isFilenameExist(document)) {			
//			System.out.println("A document with name " + document.getDocId() + " already exist");
//			return new ResponseEntity<Void>(HttpStatus.OK);
//		}
		//else
		//{
		    document.getRectangle().add(rectangle);
			documentService.saveDocument(document);
			//rectangle.setDocument(document);
			System.out.println("Creating Document " + document.getFilename());
			HttpHeaders headers = new HttpHeaders();
			headers.setLocation(ucBuilder.path("/Document/{id}").buildAndExpand(document.getDocId()).toUri());
			return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
		//}
		
	}

	// -------------------Create a
	// sink--------------------------------------------------------
	@RequestMapping(value = "/Sink/", method = RequestMethod.POST)
	public ResponseEntity<Void> createSink(@RequestBody Sink sink, UriComponentsBuilder ucBuilder) {
		System.out.println("Creating Rectangle " + sink.getId());
		if (SinkService.isSinkExist(sink)) {
			System.out.println("A Sink with ID " + sink.getId() + " already exist");
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
		SinkService.saveSink(sink);
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/Sink/{id}").buildAndExpand(sink.getId()).toUri());
		return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}

	// -------------------Create a
	// Drawer--------------------------------------------------------
	@RequestMapping(value = "/Drawer/", method = RequestMethod.POST)
	public ResponseEntity<Void> createDrawer(@RequestBody Drawer drawer, UriComponentsBuilder ucBuilder) {
		System.out.println("Creating Drawer " + drawer.getId());
		if (DrawerService.isDrawerExist(drawer)) {
			System.out.println("A Drawer with ID " + drawer.getId() + " already exist");
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
		DrawerService.saveDrawer(drawer);
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/Drawer/{id}").buildAndExpand(drawer.getId()).toUri());
		return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}

	// -------------------Create a
	// Icebin--------------------------------------------------------
	@RequestMapping(value = "/Icebin/", method = RequestMethod.POST)
	public ResponseEntity<Void> createIcebin(@RequestBody Icebin Icebin, UriComponentsBuilder ucBuilder) {
		System.out.println("Creating Icebin " + Icebin.getId());
		if (IceBinService.isIcebinExist(Icebin)) {
			System.out.println("A Icebin with ID " + Icebin.getId() + " already exist");
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
		IceBinService.saveIcebin(Icebin);
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/Icebin/{id}").buildAndExpand(Icebin.getId()).toUri());
		return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}

}
