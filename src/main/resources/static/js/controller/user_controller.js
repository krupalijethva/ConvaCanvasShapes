'use strict';
angular
		.module('myApp')
		.controller(
				'ShapeController',
				[
						'$scope',
						'UserService',
						function($scope, UserService) {
							
							var self = this;
										
							// ---------- Fabric JS --------- //
							var canvas;
							canvas = this.__canvas = new fabric.Canvas('myCanvas');
							canvas.setHeight(1000);
							canvas.setWidth(1500);
							fabric.Object.prototype.transparentCorners = false;
							
							var scraperModal = document.getElementById('stack1');
							var tableModal = document.getElementById('stack2');
							var sinkModal = document.getElementById('stack3');
							var drawerModal = document.getElementById('stack4');
							var icebinModal = document.getElementById('stack5');

							var currentStatus = "Add";	// temp19
							
							var selectedTable = new fabric.Rect();						
							var selectedScraper = new fabric.Circle();						
							var selectedIcebin = new fabric.Rect();
							
							var databaseRectList = new Array();
							var existingscraperList = new Array();
							var existingsinkList = new Array();
							var existingdrawerList = new Array();
							var existingicebinList = new Array();

							var selectedOption = null;

							var tableId = parseInt("1");
							var circleId = parseInt("1");
							var sinkId = parseInt("1");
							// var sinkcircleId = parseInt("0");
							var drawerId = parseInt("1");
							var icebinId = parseInt("1");
							
							var allShapeDrag = new Array();
							var allUniqueShapeOnDrag=new Array();
						
							var min = null;
							var selectedShapeId = null;

							var currentTable =new Array();
							var CircleObj =new Array();
							var SinkObj =new Array();
							var DrawerObj =new Array();
							var IceBinObj =new Array();
														 
							var currentTable = null;
							var circleObj = null;
							var sinkobj = null;
							var drawerobj=null;
							var icebinobj=null;
							 		
							var width, height, xvalue, yValue, widthValue, lengthValue, widthInt, lengthInt;
							
							self.Document = {
									docId : null,
									filename : ''
								};
							
							self.Rect = {
								id : null,
								rx : '',
								ry : '',
								width : '',
								length : ''
							};
							
							// define Circle field
							self.Circle = {
								id : null,
								cx : '',
								cy : '',
								radius : ''
							};
							
							// define json Sink field
							self.Sink = {
								id : null,
								sx : '',
								sy : '',
								width : '',
								length : ''
							};
							
							// define json Drawer field
							self.Drawer = {
								id : null,
								dx : '',
								dy : '',
								width : '',
								length : ''
							};
							// define json IceBin field
							self.IceBin = {
								id : null,
								ix : '',
								iy : '',
								width : '',
								length : ''
							};

							self.Circles = [];
							self.Rects = [];
							self.Sinks = [];
							self.Drawers = [];
							self.IceBins = [];
							self.Documents =[];
							// for context menu on right click..
							$scope.myContextDiv = "<ul id='contextmenu-node'><li class='contextmenu-item' ng-click='EditClick()'> Edit </li><hr><li class='contextmenu-item' ng-click='DeleteClick()'> Delete </li><hr><li class='contextmenu-item' ng-click='clickedItem2()'>View </li></ul>";
							$scope.EditClick = function() {
								currentStatus = "Edit";
								if (selectedOption == 'Circle') {
										document.getElementById('x').style.display = 'block';
								        document.getElementById('y').style.display = 'block';
								        document.getElementById('radius').style.display = 'block';
								        
								        document.getElementById('x').value = selectedScraper.left;
								        document.getElementById('y').value = selectedScraper.top;
								        document.getElementById('radius').value = selectedScraper.radius;
								        scraperModal.style.display = "block";								    
									
								} else if (selectedOption == 'Table') {	
									
									 document.getElementById('xrect').style.display = 'block';
									 document.getElementById('yrect').style.display = 'block';
									 document.getElementById('length').style.display = 'block';
									 document.getElementById('width').style.display = 'block';
									 
									 document.getElementById('xrect').value = selectedTable.left;
									 document.getElementById('yrect').value = selectedTable.top;
									 document.getElementById('length').value = selectedTable.height;
									 document.getElementById('width').value = selectedTable.width;
									 tableModal.style.display = "block";	
									 
								} else if (selectedOption == 'Sink') {
									 document.getElementById('xsink').style.display = 'block';
								        document.getElementById('ysink').style.display = 'block';
								        document.getElementById('slength').style.display = 'block';
								        document.getElementById('swidth').style.display = 'block';

								        document.getElementById('xsink').value = Editsink.x();
								        document.getElementById('ysink').value = Editsink.y();
								        document.getElementById('slength').value = Editsink.height();
								        document.getElementById('swidth').value = Editsink.width();

								        sinkModal.style.display = "block";
									
								} else if (selectedOption == 'Drawer') {
							        document.getElementById('xdrawer').style.display = 'block';
							        document.getElementById('ydrawer').style.display = 'block';
							        document.getElementById('dlength').style.display = 'block';
							        document.getElementById('dwidth').style.display = 'block';

							        document.getElementById('xdrawer').value = Editdrawer.x();
							        document.getElementById('ydrawer').value = Editdrawer.y();
							        document.getElementById('dlength').value = Editdrawer.height();
							        document.getElementById('dwidth').value = Editdrawer.width();
							        drawerModal.style.display = "block";
									
								} else if (selectedOption == 'Icebin') {
									 	document.getElementById('xicebin').style.display = 'block';
								        document.getElementById('yicebin').style.display = 'block';
								        document.getElementById('ilength').style.display = 'block';
								        document.getElementById('iwidth').style.display = 'block';

								        document.getElementById('xicebin').value = selectedIcebin.left;
								        document.getElementById('yicebin').value = selectedIcebin.top;
								        document.getElementById('ilength').value = selectedIcebin.height;
								        document.getElementById('iwidth').value = selectedIcebin.width;
								        icebinModal.style.display = "block";
								
								}
							};
							
							function saperateShapeFormUnique()
							{
								for (var i = 0; i < allUniqueShapeOnDrag.length; i++) {
									 var tempObj = allUniqueShapeOnDrag[i];
									 var name=tempObj.name;	
									 if(name=="Sink")
									 {
										 SinkObj.push(tempObj);
									 }
									 else if(name=="Circle")
									 {
										 CircleObj.push(tempObj);
								     }
							        else if(name=="Rect")
								     {
							             currentTable.push(tempObj);
							         }	
							        else if (name=="Drawer")
							        {
							        	DrawerObj.push(tempObj);
							        }
							        else
							        {
							        	IceBinObj.push(tempObj);							       
							        }
								     // t.push({key:name, value:tempObj});
							       }
							}
							 // for allUpdate.
							 $scope.AllShapeUpdate=function()			 
							 {	// delete All Data from given table..
						     /*
								 * deleteAllDrawer(); deleteAllCircle();
								 * deleteAllSink(); deleteAllIcebin();
								 * deleteAllRect();
								 */	
								debugger
							   // alert(self.Document.filename);
								fetchAllDocument();
								//alert(self.Documents);
								createDocument(self.Document);
								 
								var allShapeArr = new Array();
							    allShapeArr = canvas.getObjects();							    
                                // code for getting document file name
							    for (var i = 0; i < allShapeArr.length; i++) {
						            var tableObj = allShapeArr[i];
						            if (tableObj.name == 'Table')
						            	{						            	
						                   	self.Rect = {
												id : null,
												rx : tableObj.left,
												ry : tableObj.top,
												width : tableObj.width,
												length : tableObj.height
											};
						                   	debugger
						            	createRect(self.Rect);
						           	   
						            	}	
						            else if (tableObj.name == 'Circle') {
						            	self.Circle = {
												id : null,
												cx : tableObj.left,
												cy : tableObj.top,
												radius : tableObj.radius												
											};
						            	createCircle(self.Circle);
									}
						            else if (tableObj.name == 'Icebin') {
						            	self.IceBin = {
												id : null,
												ix : tableObj.left,
												iy : tableObj.top,
												width : tableObj.width,	
												length : tableObj.height
											};
						            	createIceBin(self.IceBin);
									}						            
						        }
							    debugger
							  
						     }
							 $scope.AllShapeLoad=function()
							 {
								 debugger
								 fetchAllRect();
								 fetchAllCircle();							
								 fetchAllIceBin();								
								 
								 
							 }
							$scope.DeleteClick = function() {
								if (selectedOption == 'Circle') {
									 selectedScraper.destroy();
								} else if (selectedOption == 'rect') {
									  EditedTable.destroy();
								} else if ((selectedOption == 'Sink')) {
									   Editsink.destroy();
								} else if (selectedOption == 'Drawer') {
									Editdrawer.destroy();								
								} else if (selectedOption == 'Icebin') {
									 selectedIcebin.destroy();
								}
								layer.draw();
							};							
							// allDelete----------------------------
							function deleteAllDrawer() {
								UserService.deleteAllDrawer();									
							}
							function deleteAllCircle() {
								UserService.deleteAllCircle();									
							}
							function deleteAllSink() {
								UserService.deleteAllSink();									
							}
							function deleteAllIcebin() {
								UserService.deleteAllIcebin();									
							}
							function deleteAllRect() {
								UserService.deleteAllRect();									
							}
							// Reset All-----------------------------
							function resetIcebin() {
								self.IceBin = {
									id : null,
									ix : '',
									iy : '',
									width : '',
									length : ''
								};
								$scope.myFormIcebin.$setPristine(); 							
							}					
							function resetDrawer() {
								self.Drawer = {
									id : null,
									dx : '',
									dy : '',
									width : '',
									length : ''
								};	
								$scope.myFormDrawer.$setPristine();
							}		
							function resetSink() {
								self.Sink = {
									id : null,
									sx : '',
									sy : '',
									width : '',
									length : ''
								};
								$scope.myFormSink.$setPristine(); 
							}						
							function resetTable() {
								self.Rect = {
									id : null,
									rx : '',
									ry : '',
									width : '',
									length : ''
								};
								$scope.myFormRect.$setPristine();
							}
							function resetCircle() {
								self.Circle = {
									id : null,
									cx : '',
									cy : '',
									radius : ''
								};
								$scope.myFormCircle.$setPristine(); 
							}				
							
							function deleteClick() {
								if (selectedOption == 'rect') {
									selectedTable.destroy();
								} else if (selectedOption == 'Sink') {
									Editsink.destroy();
								} else if (selectedOption == 'Drawer') {
									Editdrawer.destroy();
								} else if (selectedOption == 'Circle') {
									selectedScraper.destroy();
								} else if (selectedOption == 'Icebin') {
									selectedIcebin.destroy();
								}
								layer.draw();
							}
													
							function addDBShapeToCanvas() {																												
								canvas.clear();
								debugger;
								// ---------------------//
								for (var i = 0; i < databaseRectList.length; i++) {
									currentTable = databaseRectList[i];
								
									if (currentTable.id == selectedTable.id) {		
										alert("match selected");
										currentTable = selectedTable;
									}
									
									currentTable.on('selected', function () {
							            selectedTable = currentTable;
							            selectedOption = selectedTable.name;
							            rectId = selectedTable.id;
							            // alert("selected id " + rectId);
									});
									
									
									canvas.add(currentTable);										
								}
												
								
								// ---------------------- Sink
								// ---------------------//
								for (var i = 0; i < existingsinkList.length; i++) {
									sinkobj = existingsinkList[i];
									if (sinkobj.id == Editsink.id) {
										sinkobj = null;
										sinkobj = Editsink;
									}																																		
									canvas.add(sinkobj)									
								}
														
								// existingsinkList = new Array();
								
								// ---------------------- Sink
								// ---------------------//
								for (var i = 0; i < existingdrawerList.length; i++) {
									drawerobj = existingdrawerList[i];
									if (drawerobj.id == Editdrawer.id) {
										drawerobj = null;
										drawerobj = Editdrawer;
									}
																		
									canvas.add(drawerobj);
								}								
								// existingdrawerList = new Array();
								
								
								// ---------------------- IceBin
								// ---------------------//
								for (var i = 0; i < existingicebinList.length; i++) {
									icebinobj = existingicebinList[i];
									
									if (icebinobj.id == selectedIcebin.id) {										
										icebinobj = selectedIcebin;
									}									
									canvas.add(icebinobj);
								}
								
								existingicebinList = new Array();
								
								
								// ---------------------- Scraper
								// ---------------------//
								for (var i = 0; i < existingscraperList.length; i++) {
									circleObj = existingscraperList[i];
									if (circleObj.id == selectedScraper.id) {
										circleObj = null;
										circleObj = selectedScraper;
									}
									
									canvas.add(circleObj);
								}
								
                              	existingscraperList = new Array();								
								currentStatus = "Add";
								
								canvas.renderAll();
							}
							
							// use for draw event-------
							
							
							function setEventToTable(currentTable) {
								$(document).bind("contextmenu", function (e) {
							        e.preventDefault();

							        $("#cntnr").css("left", e.clientX);
							        $("#cntnr").css("top", e.clientY);
							        $("#cntnr").fadeIn(200, startFocusOut());
							    });

							    function startFocusOut() {
							        $(document).on("click", function () {
							            $("#cntnr").hide();
							            $(document).off("click");
							        });
							    }
							}
									
							function fetchFieldVal(xid, yid, widthId, lengthId) {
							    var xval = document.getElementById(xid).value;
							    var yval = document.getElementById(yid).value;

							    if (xval == "") {
							        xval = 0;
							    }
							    if (yval == "") {
							        yval = 0;
							    }

							    xvalue = parseInt(xval);
							    yValue = parseInt(yval);

							    widthValue = document.getElementById(widthId).value;
							    lengthValue = document.getElementById(lengthId).value;

							    widthInt = parseInt(widthValue);
							    lengthInt = parseInt(lengthValue);

							}
							
						    // ------- Table ------------------------ //
							$scope.TableDraw = function() {
							    fetchFieldVal("xrect", "yrect", "width", "length");
							    if (currentStatus == 'Add') {
							        var currentTable = new fabric.Rect({
							            width: widthInt,
							            height: lengthInt,
							            top: yValue,
							            left: xvalue,
							            id: tableId,
							            name: 'Table',
							            fill: 'lightgray',
							            stroke: 'black',
							            strokeWidth: 2
							        });

							        currentTable.on('selected', function () {
							            selectedTable = currentTable;
							            selectedOption = selectedTable.name;
							            
							        });
							        
									canvas.add(currentTable);
							        setEventToTable(currentTable);
							        tableId++;
							       
							    } else if (currentStatus == 'Edit') {
							        var allShapeArr = new Array();
							        allShapeArr = canvas.getObjects();

							        console.log("Array Length:  ", allShapeArr.length);
							        for (var i = 0; i < allShapeArr.length; i++) {
							            var tableObj = allShapeArr[i];

							            if (selectedTable.name == tableObj.name) {
							                if (selectedTable.id == tableObj.id) {
							                    console.log("in list", "\n", " Width: ", tableObj.width, "\n", " height:  ", tableObj.height, "\n", " X: ", tableObj.left, "\n", " Y: ", tableObj.top);
							                    tableObj.width = widthInt;
							                    tableObj.height = lengthInt;
							                    tableObj.top = yValue;
							                    tableObj.left = xvalue;
							                    console.log("After change", "\n", " Width: ", tableObj.width, "\n", " height:  ", tableObj.height, "\n", " X: ", tableObj.left, "\n", " Y: ", tableObj.top);
							                }
							            }
							        }
							        canvas.renderAll();
							    }
							    document.getElementById("xrect").value = "";
							    document.getElementById("yrect").value = "";
							    document.getElementById("width").value = "";
							    document.getElementById("length").value = "";
							    tableModal.style.display = "none";
							    currentStatus = "Add";
							    
							    return false;
							}

							
							
							// ------------ Circle -----------------//
							$scope.CircleDraw=function() {
							    var xval = document.getElementById("x").value.toString();
							    var yval = document.getElementById("y").value.toString();

							    if (xval == "") {
							        xval = 0;
							    }
							    if (yval == "") {
							        yval = 0;
							    }

							    var xvalue = parseInt(xval);
							    var yValue = parseInt(yval);

							    var radius = document.getElementById("radius").value;
							    var radiusInt = parseInt(radius);


							    if (currentStatus == 'Add') {
							        var scraper = new fabric.Circle({
							            top: yValue,
							            left: xvalue,
							            radius: radiusInt,
							            fill: '#e5e5e5',
							            stroke: 'black',
							            strokeWidth: 2,
							            id: 'circleId',
							            name: 'Circle'
							        });

							        canvas.add(scraper);
							        setEventToTable(scraper);

							        scraper.on('selected', function () {
							            selectedScraper = scraper;
							            selectedOption = selectedScraper.name;
							        });

							        circleId++;

							    } else if (currentStatus == 'Edit') {
							        debugger;
							        var allShapeArr = new Array();
							        allShapeArr = canvas.getObjects();

							        console.log("Array Length:  ", allShapeArr.length);

							        for (var i = 0; i < allShapeArr.length; i++) {
							            var scraperObj = allShapeArr[i];
							            if (selectedScraper.name == scraperObj.name) {
							                if (selectedScraper.id == scraperObj.id) {
							                    console.log("in list", "\n", " radius: ", scraperObj.radius, "\n", " X: ", scraperObj.left, "\n", " Y: ", scraperObj.top);
							                    scraperObj.radius = radiusInt;
							                    scraperObj.top = yValue;
							                    scraperObj.left = xvalue;
							                    console.log("After change", "\n", " radius: ", scraperObj.radius, "\n", " X: ", scraperObj.left, "\n", " Y: ", scraperObj.top);
							                }
							            }

							        }
							        canvas.renderAll();
							    }
							    document.getElementById("x").value = "";
							    document.getElementById("y").value = "";
							    document.getElementById("radius").value = "";
							    scraperModal.style.display = "none";
							    currentStatus = "Add";
							    return false;
							}
								
							// ------------ Sink -----------------//
							function SinkDraw() 
							{
								if (currentStatus == 'Add') {
									
									var widthValue =  parseInt(self.Sink.width);
								    var lengthValue = parseInt(self.Sink.length);
								    
								    if (widthValue > lengthValue) {
								        min = lengthValue;
								    } else {
								        min = widthValue;
								    }
                                    var D = min - 40;									
									var sink = new Konva.Shape({
										x : parseInt(self.Sink.sx),
										y : parseInt(self.Sink.sy),
										width : parseInt(self.Sink.width),
										height : parseInt(self.Sink.length),
										sceneFunc: function (context) {
								                context.beginPath();
								                context.rect(0, 0, widthValue, lengthValue);
								                context.fillStrokeShape(this);

								                context.beginPath();
								                context.arc(0 + (widthValue / 2), 0 + (lengthValue / 2), D / 2, 0, 2 * Math.PI);
								                context.fillStrokeShape(this);
								            },
										id : sinkId,
										name : 'Sink',
										fill : '#d1d9e0',
										stroke : 'black',
										strokeWidth : 2,
									    draggable : true
									});
															
								} else if (currentStatus == 'Edit') {
							        var widthValue =  parseInt(self.Sink.width);
								    var lengthValue = parseInt(self.Sink.length);
								    
								    if (widthValue > lengthValue) {
								        min = lengthValue;
								    } else {
								        min = widthValue;
								    }
						         var D = min - 40;						     
						         Editsink = new Konva.Shape({
						        		x : parseInt(self.Sink.sx),
										y : parseInt(self.Sink.sy),
										width : parseInt(self.Sink.width),
										height : parseInt(self.Sink.length),
										id : sinkId,
										sceneFunc: function (context) {
							                context.beginPath();
							                context.rect(0, 0, widthValue, lengthValue);
							                context.fillStrokeShape(this);
							                context.beginPath();
							                context.arc(0 + (widthValue / 2), 0 + (lengthValue / 2), D / 2, 0, 2 * Math.PI);
							                context.fillStrokeShape(this);
							            },
							            name: 'Sink',
							            fill: '#d1d9e0',
							            stroke: 'black',
							            strokeWidth: 2,
							            draggable: true
							        });
								    addDBShapeToCanvas();
								}
							}
							
							// ------------ Drawer -----------------//
							function DrawerDraw()	{
							if (currentStatus == 'Add') {		
								
								var widthValue=parseInt(self.Drawer.width);
								var lengthValue=parseInt(self.Drawer.length);
								
							      var drawer = new Konva.Shape({
										x : parseInt(self.Drawer.dx),
										y : parseInt(self.Drawer.dy),
										width : parseInt(self.Drawer.width),
										height : parseInt(self.Drawer.length),
										
										sceneFunc: function (context) {
								                context.beginPath();
								                context.rect(0, 0, widthValue, lengthValue);
								                context.fillStrokeShape(this);

								                context.beginPath();
								                context.rect(0 + 10, 0 + 10, widthValue - 20, lengthValue - 20);
								                context.fillStrokeShape(this);
								            },
										id : drawerId,
										name : 'Drawer',
										text : 'rexct',
										fill : '#b5c2ce',
										stroke : 'black',
										strokeWidth : 2,
										draggable: true
								});
								} else if (currentStatus == 'Edit') {	
									
									var widthValue=parseInt(self.Drawer.width);
									var lengthValue=parseInt(self.Drawer.length);
									
									Editdrawer = new Konva.Shape({
										x : parseInt(self.Drawer.dx),
										y : parseInt(self.Drawer.dy),
										width : parseInt(self.Drawer.width),
										height : parseInt(self.Drawer.length),
										
										sceneFunc: function (context) {
								                context.beginPath();
								                context.rect(0, 0, widthValue, lengthValue);
								                context.fillStrokeShape(this);

								                context.beginPath();
								                context.rect(0 + 10, 0 + 10, widthValue - 20, lengthValue - 20);
								                context.fillStrokeShape(this);
								            },
										id : drawerId,
										name : 'Drawer',
										text : 'rexct',
										fill : '#b5c2ce',
										stroke : 'black',
										strokeWidth : 2,
										draggable: true
									});
									addDBShapeToCanvas();
								}
							}
							
							// ------------ IceBin -----------------//
							$scope.IcebinDraw =function() {
							    fetchFieldVal("xicebin", "yicebin", "iwidth", "ilength");
							    if (currentStatus == 'Add') {
							        var currentIcebin = new fabric.Rect({
							            width: widthInt,
							            height: lengthInt,
							            top: yValue,
							            left: xvalue,
							            id: icebinId,
							            name: 'Icebin',
							            fill: '#a2a8ad',
							            stroke: 'black',
							            strokeWidth: 2
							        });

							        canvas.add(currentIcebin);
							        setEventToTable(currentIcebin);

							        currentIcebin.on('selected', function () {
							            selectedIcebin = currentIcebin;
							            selectedOption = selectedIcebin.name;
							        });

							        icebinId++;
							       
							    } else if (currentStatus == 'Edit') {
							        var allShapeArr = new Array();
							        allShapeArr = canvas.getObjects();

							        console.log("Array Length:  ", allShapeArr.length);

							        for (var i = 0; i < allShapeArr.length; i++) {
							            var iceBinObj = allShapeArr[i];

							            if (selectedIcebin.name == iceBinObj.name) {
							                if (selectedIcebin.id == iceBinObj.id) {
							                    console.log("in list", "\n", " Width: ", iceBinObj.width, "\n", " height:  ", iceBinObj.height, "\n", " X: ", iceBinObj.left, "\n", " Y: ", iceBinObj.top);
							                    iceBinObj.width = widthInt;
							                    iceBinObj.height = lengthInt;
							                    iceBinObj.top = yValue;
							                    iceBinObj.left = xvalue;
							                    console.log("After change", "\n", " Width: ", iceBinObj.width, "\n", " height:  ", iceBinObj.height, "\n", " X: ", iceBinObj.left, "\n", " Y: ", iceBinObj.top);
							                }
							            }
							        }
							        canvas.renderAll();
							    }
							    document.getElementById("xicebin").value = "";
							    document.getElementById("yicebin").value = "";
							    document.getElementById("iwidth").value = "";
							    document.getElementById("ilength").value = "";
							    icebinModal.style.display = "none";
							    currentStatus = "Add";
							    return false;
							}						
							
							// Model on close click
							$scope.closeBox = function() {
								scraperModal.style.display = "none";
							}
							$scope.closeTable = function() {
								debugger
								tableModal.style.display = "none";
							}
							$scope.closeSink = function() {
								sinkModal.style.display = "none";
							}
							$scope.closeDrawer = function() {
								drawerModal.style.display = "none";
							}
							$scope.closeIcebin = function() {
								icebinModal.style.display = "none";
							}
							// End close

							// fetch all rectAngle
							function loadIceBin() {
								existingicebinList =new Array();
								for (var i = 0; i < self.IceBins.length; i++) {								
									var icebin = new fabric.Rect({
										x : parseInt(self.IceBins[i].ix),
										y : parseInt(self.IceBins[i].iy),
										width : self.IceBins[i].width,
										height : self.IceBins[i].length,
										id : parseInt(self.IceBins[i].id),
										name : 'Icebin',
										text : 'rexct',
										fill : '#a2a8ad',
										stroke : 'black',
										strokeWidth : 2,
										Class : 'test',
										draggable : true
									});
									 existingicebinList.push(icebin);
									// setEventToTable(icebin);
								}								
							}
							// fetch all Drawer
							function loadDrawer() {	
								existingdrawerList=new Array();
								for (var i = 0; i < self.Drawers.length; i++) {		
									
									var widthValue=parseInt(self.Drawers[i].width);
									var lengthValue=parseInt(self.Drawers[i].length);
									debugger
									 var drawer = new fabric.Shape({
										 x : parseInt(self.Drawers[i].dx),
										 y : parseInt(self.Drawers[i].dy),
										 width : parseInt(self.Drawers[i].width),
										 height : parseInt(self.Drawers[i].length),
											
											sceneFunc: function (context) {												  
												context.beginPath();
								                context.rect(0, 0, widthValue, lengthValue);
								                context.fillStrokeShape(this);

								                context.beginPath();
								                context.rect(0 + 10, 0 + 10, widthValue - 20, lengthValue - 20);
								                context.fillStrokeShape(this);
											  },
												id : parseInt(self.Drawers[i].id),
												name : 'Drawer',
												text : 'rexct',
												fill : '#b5c2ce',
												stroke : 'black',
												strokeWidth : 2,
												draggable : true
											
											});
									 existingdrawerList.push(drawer);									
								}							
							}
							// fetch all Sink Draw----------------------------
							function loadsink() {
								existingsinkList= new Array();
								for (var i = 0; i < self.Sinks.length; i++) {	
								
								    var widthValue =  parseInt(self.Sinks[i].width);
								    var lengthValue = parseInt(self.Sinks[i].length);
								    
								    if (widthValue > lengthValue) {
								        min = lengthValue;
								    } else {
								        min = widthValue;
								    }
                                    var D = min - 40;		
                                    debugger
									var sink = new fabric.Shape({
										x : parseInt(self.Sinks[i].sx),
										y : parseInt(self.Sinks[i].sy),
										width : parseInt(self.Sinks[i].width),
										height :  parseInt(self.Sinks[i].length),
										sceneFunc: function (context) {
								                context.beginPath();
								                context.rect(0, 0, widthValue,  lengthValue);
								                context.fillStrokeShape(this);

								                context.beginPath();
								                context.arc((0 + widthValue / 2), (0 + lengthValue / 2), D / 2, 0, 2 * Math.PI);
								                context.fillStrokeShape(this);
								            },
										id : parseInt(self.Sinks[i].id),
										name : 'Sink',
										fill : '#d1d9e0',
										stroke : 'black',
										strokeWidth : 2,
									    draggable : true
									});			
									debugger
									 existingsinkList.push(sink);										
								}								
							}
							// end fetch all Sink

							// fetch all rectAngle
						function loadTable() {	
							debugger
							databaseRectList = new Array();
							
							for (var i = 0; i < self.Rects.length; i++) {								
								var rect = new fabric.Rect({
									 	width:  parseInt(self.Rects[i].width),
							            height: parseInt(self.Rects[i].length),
							            top: parseInt(self.Rects[i].ry),
							            left:  parseInt(self.Rects[i].rx),
							            id: parseInt(self.Rects[i].id),
							            name: 'rect',
							            text: 'rexct',
							            fill: 'lightgray',
							            stroke: 'black',
							            strokeWidth: 2
									});											
									databaseRectList.push(rect);
								}
								// add the shape to the
							}
						
						
							// fetch all Circle----------------------------
							function loadCircle() {
								existingscraperList = new Array();
							    for (var i = 0; i < self.Circles.length; i++) {							    	
									var circle = new fabric.Circle({
										x : parseInt(self.Circles[i].cx),
										y : parseInt(self.Circles[i].cy),
										radius : self.Circles[i].radius,
										id : parseInt(self.Circles[i].id),
										fill : '#e5e5e5',
										stroke : 'black',
										strokeWidth : 2,
										name : 'Circle',
										draggable : true
									});										
									existingscraperList.push(circle);
								}
				    	       }
							

							function fetchAllSink() {
								UserService.fetchAllSink().then(function(d) {								
									self.Sinks = d;									
								}, function(errResponse) {
									console.error('Error while fetchAllSink');
								});
							}
							
							function fetchAllDrawer() {
								UserService
										.fetchAllDrawer()
										.then(
												function(d) {													
														self.Drawers = d;														
											},
												function(errResponse) {
													console
															.error('Error while fetchAllDrawer');
												});
							}
							function fetchAllIceBin() {
								UserService
										.fetchAllIceBin()
										.then(
												function(d) {
													debugger
														self.IceBins = d;
															},
												function(errResponse) {
													console
															.error('Error while fetchAllIceBin');
												});
							}
							function fetchAllRect() {
								debugger
								UserService
										.fetchAllRect()
										.then(
												function(d) {	
													debugger
														self.Rects = d;													
														},
												function(errResponse) {
													console
															.error('Error while fetching rectangle');
												});
							}
							function fetchAllCircle() {
								UserService
										.fetchAllCircle()
										.then(
												function(d) {
													self.Circles = d;
													},
												function(errResponse) {
													console
															.error('Error while fetching rectangle');
												});
							}
						
							// create shape----
							function createRect(Rect) {
								UserService.createRect(Rect)										
							}
							function createCircle(Circle) {
								UserService.createCircle(Circle)
										
							}
							function createSink(Sink) {
								UserService.createSink(Sink)						
						    }
							function createDocument(Document) {
								UserService.createDocument(Document)				
						    }
							
							function fetchAllDocument() {
								debugger
								UserService
										.fetchAllDocument()
										.then(
												function(d) {													
														self.Documents = d;														
											},
												function(errResponse) {
													console
															.error('Error while fetchAllDocs');
												});
							}
							
							function createDrawer(Drawer) {
								UserService
										.createDrawer(Drawer)
										.then(
												fetchAllDrawer,
												function(errResponse) {
													console
															.error('Error while creating Drawer');
												});
							}
							function createIceBin(IceBin) {
								UserService.createIceBin(IceBin)										
							}
							
							// open
							$scope.opentable=function(tableIsselected, shapeId) {	
								if (tableIsselected == 'True') {
									document.getElementById('stack3').style.display = "none";
									document.getElementById('stack1').style.display = "none";
									document.getElementById('stack4').style.display = "none";
									document.getElementById('stack5').style.display = "none";
									document.getElementById('stack2').style.display = "block";
								}
								selectedShapeId = shapeId;
							}
							
							$scope.opensink=function(sinkIsselected, shapeId) {
								if ((sinkIsselected == 'True')) {
									document.getElementById('stack3').style.display = "block";
									document.getElementById('stack1').style.display = "none";
									document.getElementById('stack2').style.display = "none";
									document.getElementById('stack4').style.display = "none";
									document.getElementById('stack5').style.display = "none";

								}
								selectedShapeId = shapeId;
							}
							$scope.opendrawer=function(drawerIsselected, shapeId) {

								if (drawerIsselected == 'True') {
									document.getElementById('stack3').style.display = "none";
									document.getElementById('stack1').style.display = "none";
									document.getElementById('stack2').style.display = "none";
									document.getElementById('stack4').style.display = "block";
									document.getElementById('stack5').style.display = "none";
								}
								selectedShapeId = shapeId;
							}
							$scope.openicebin=function(icebinIsselected, shapeId) {
								if (icebinIsselected == 'True') {
									document.getElementById('stack3').style.display = "none";
									document.getElementById('stack1').style.display = "none";
									document.getElementById('stack2').style.display = "none";
									document.getElementById('stack4').style.display = "none";
									document.getElementById('stack5').style.display = "block";
								}
								selectedShapeId = shapeId;
							}
							$scope.openscraper=function(circleIsSelected, shapeId) {
								if (circleIsSelected == 'True') {
									document.getElementById('stack1').style.display = "block";
									document.getElementById('stack2').style.display = "none";
									document.getElementById('stack3').style.display = "none";
									document.getElementById('stack4').style.display = "none";
									document.getElementById('stack5').style.display = "none";
								}
								selectedShapeId = shapeId;
							}						
						} ]);

angular.module('myApp').directive("contextMenu", function($compile) {
	var contextMenu = {};
	contextMenu.restrict = "AE";
	contextMenu.link = function(lScope, lElem, lAttr) {
		lElem.on("contextmenu", function(e) {
			e.preventDefault(); // default context menu is disabled
			// The customized context menu is defined in the
			// main controller. To function the ng-click functions the,
			// contextmenu HTML should be // compiled.
			lElem.append($compile(lScope[lAttr.contextMenu])(lScope)); // The
			// location
			// of
			// the
			// context
			// menu
			// is
			// defined
			// on
			// the
			// click
			// position
			// and the click position is catched by the right click event.
			/*
			 * $("#contextmenu-node").css("right", e.clientX);
			 * $("#contextmenu-node").css("bottom", e.clientY);
			 */

			$("#contextmenu-node").css("left", e.clientX);
			$("#contextmenu-node").css("top", e.clientY);

			$("#contextmenu-node").fadeIn(200, startFocusOut());
		});
		function startFocusOut() {
			$(document).on("click", function(e) {
				$("#contextmenu-node").hide();
				e.preventDefault();
				// $(document).off("click");
			});
		}
	
		lElem.bind("contextmenu", function(e) {
			// e.preventDefault();
		});
		lElem.on("mouseleave", function(e) {
			console.log("Leaved the div"); // on mouse leave, the context menu
			// // is removed.
			if ($("#contextmenu-node"))
				$("#contextmenu-node").remove();
		});
	};
	return contextMenu;
});
