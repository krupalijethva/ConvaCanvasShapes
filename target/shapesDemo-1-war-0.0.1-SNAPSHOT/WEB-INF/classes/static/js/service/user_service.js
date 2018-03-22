'use strict';
angular
		.module('myApp')
		.factory(
				'UserService',
				[
						'$http',
						'$q',
						function($http, $q) {
							// var REST_SERVICE_URI =
							// 'http://localhost:8080/Rect/';
							var factory = {

								fetchAllRect : fetchAllRect,
								fetchAllSink : fetchAllSink,
								fetchAllDrawer : fetchAllDrawer,
								fetchAllIceBin : fetchAllIceBin,
								fetchAllCircle : fetchAllCircle,

								createRect : createRect,
								createCircle : createCircle,
								createSink : createSink,
								createIceBin : createIceBin,
								createDrawer : createDrawer,
								createDocument:createDocument,
															
								deleteCircle:deleteCircle,
								deleteRect:deleteRect,
								deleteSink:deleteSink,
								deleteIcebin:deleteIcebin,
								deleteDrawer:deleteDrawer,
								
								deleteAllDrawer:deleteAllDrawer,
								deleteAllCircle:deleteAllCircle,
								deleteAllSink:deleteAllSink,
								deleteAllIcebin:deleteAllIcebin,
								deleteAllRect:deleteAllRect,
								
								fetchAllDocument:fetchAllDocument
								
								
							};
							return factory;							
							
							function deleteAllDrawer() {
						        var deferred = $q.defer();
						        $http.delete('http://localhost:8080/deleteAllDrawer/')
						            .then(
						            function (response) {
						                deferred.resolve(response.data);
						            },
						            function(errResponse){
						                console.error('Error while deleting Drawer');
						                deferred.reject(errResponse);
						            }
						        );
						        return deferred.promise;
						    }
							function deleteAllCircle() {
						        var deferred = $q.defer();
						        $http.delete('http://localhost:8080/deleteAllCircle/')
						            .then(
						            function (response) {
						                deferred.resolve(response.data);
						            },
						            function(errResponse){
						                console.error('Error while deleting Circle');
						                deferred.reject(errResponse);
						            }
						        );
						        return deferred.promise;
						    }
							function deleteAllSink() {
						        var deferred = $q.defer();
						        $http.delete('http://localhost:8080/deleteAllSink/')
						            .then(
						            function (response) {
						                deferred.resolve(response.data);
						            },
						            function(errResponse){
						                console.error('Error while deleting Circle');
						                deferred.reject(errResponse);
						            }
						        );
						        return deferred.promise;
						    }
							function deleteAllIcebin() {
						        var deferred = $q.defer();
						        $http.delete('http://localhost:8080/deleteAllIcebin/')
						            .then(
						            function (response) {
						                deferred.resolve(response.data);
						            },
						            function(errResponse){
						                console.error('Error while deleting IceBin');
						                deferred.reject(errResponse);
						            }
						        );
						        return deferred.promise;
						    }
							function deleteAllRect() {
						        var deferred = $q.defer();
						        $http.delete('http://localhost:8080/deleteAllRect/')
						            .then(
						            function (response) {
						                deferred.resolve(response.data);
						            },
						            function(errResponse){
						                console.error('Error while deleting Rect');
						                deferred.reject(errResponse);
						            }
						        );
						        return deferred.promise;
						    }
							
							
							// delete IceBin
							function deleteDrawer(id) {
							        var deferred = $q.defer();
							        $http.delete('http://localhost:8080/drawer/'+id)
							            .then(
							            function (response) {
							                deferred.resolve(response.data);
							            },
							            function(errResponse){
							                console.error('Error while deleting Drawer');
							                deferred.reject(errResponse);
							            }
							        );
							        return deferred.promise;
							    }
							
							// delete IceBin
							function deleteIcebin(id) {
							        var deferred = $q.defer();
							        $http.delete('http://localhost:8080/icebin/'+id)
							            .then(
							            function (response) {
							                deferred.resolve(response.data);
							            },
							            function(errResponse){
							                console.error('Error while deleting IceBin');
							                deferred.reject(errResponse);
							            }
							        );
							        return deferred.promise;
							    }
							// delete Sink
							function deleteSink(id) {
							        var deferred = $q.defer();
							        $http.delete('http://localhost:8080/sink/'+id)
							            .then(
							            function (response) {
							                deferred.resolve(response.data);
							            },
							            function(errResponse){
							                console.error('Error while deleting Sink');
							                deferred.reject(errResponse);
							            }
							        );
							        return deferred.promise;
							    }
							// delete Rect
							function deleteRect(id) {
							        var deferred = $q.defer();
							        $http.delete('http://localhost:8080/rect/'+id)
							            .then(
							            function (response) {
							                deferred.resolve(response.data);
							            },
							            function(errResponse){
							                console.error('Error while deleting Rect');
							                deferred.reject(errResponse);
							            }
							        );
							        return deferred.promise;
							    }
							// delete Circle
							
							 function deleteCircle(id) {
							        var deferred = $q.defer();
							        $http.delete('http://localhost:8080/circle/'+id)
							            .then(
							            function (response) {
							                deferred.resolve(response.data);
							            },
							            function(errResponse){
							                console.error('Error while deleting Circle');
							                deferred.reject(errResponse);
							            }
							        );
							        return deferred.promise;
							    }
							 
							function fetchAllIceBin() {							
								var deferred = $q.defer();
								$http
										.get('http://localhost:8080/AllIceBin/')
										.then(
												function(response) {
													deferred
															.resolve(response.data);
												},
												function(errResponse) {
													console
															.error('Error while fetching AllIceBin');
													deferred
															.reject(errResponse);
												});
								return deferred.promise;
							}

							function fetchAllDrawer() {
						
								var deferred = $q.defer();
								$http
										.get('http://localhost:8080/AllDrawer/')
										.then(
												function(response) {
													deferred
															.resolve(response.data);
												},
												function(errResponse) {
													console
															.error('Error while fetching AllDrawer');
													deferred
															.reject(errResponse);
												});
								return deferred.promise;
							}

							function fetchAllSink() {
						
								var deferred = $q.defer();
								$http
										.get('http://localhost:8080/AllSink/')
										.then(
												function(response) {
													deferred
															.resolve(response.data);
												},
												function(errResponse) {
													console
															.error('Error while fetching Sink');
													deferred
															.reject(errResponse);
												});
								return deferred.promise;
							}
							function fetchAllRect() {		
								var deferred = $q.defer();
								$http
										.get('http://localhost:8080/AllRect/')
										.then(
												function(response) {
													deferred
															.resolve(response.data);
												},
												function(errResponse) {
													console
															.error('Error while fetching Rect');
													deferred
															.reject(errResponse);
												});
								return deferred.promise;
							}
							function fetchAllCircle() {						
								var deferred = $q.defer();
								$http
										.get('http://localhost:8080/AllCircle/')
										.then(
												function(response) {
													deferred
															.resolve(response.data);
												},
												function(errResponse) {
													console
															.error('Error while fetching Circle');
													deferred
															.reject(errResponse);
												});
								return deferred.promise;
							}
							function fetchAllDocument() {	
								debugger
								var deferred = $q.defer();
								$http
										.get('http://localhost:8080/AllDocument/')
										.then(
												function(response) {
													deferred
															.resolve(response.data);
												},
												function(errResponse) {
													console
															.error('Error while fetching Document');
													deferred
															.reject(errResponse);
												});
								return deferred.promise;
							}
							function createRect(Rect) {
								var deferred = $q.defer();							
								$http.post('http://localhost:8080/Rect/',Rect)										
								return deferred.promise;
							}
							function createDocument(Document) {
								var deferred = $q.defer();							
								$http.post('http://localhost:8080/Document/',Document)	
								.then(
												function(response) {
													deferred
															.resolve(response.data);
												},
												function(errResponse) {
													console
															.error('Error while creating Drawer');
													deferred
															.reject(errResponse);
												});
								return deferred.promise;
							}
							function createCircle(Circle) {
								var deferred = $q.defer();
								$http.post('http://localhost:8080/Circle/',Circle)
								return deferred.promise;
							}
							function createSink(Sink) {
								var deferred = $q.defer();
								$http.post('http://localhost:8080/Sink/',Sink)
								return deferred.promise;
							}
							function createIceBin(IceBin) {
								var deferred = $q.defer();
								$http.post('http://localhost:8080/IceBin/',IceBin)										
								return deferred.promise;
							}
							function createDrawer(Drawer) {
								var deferred = $q.defer();
								$http
										.post('http://localhost:8080/Drawer/',
												Drawer)
										.then(
												function(response) {
													deferred
															.resolve(response.data);
												},
												function(errResponse) {
													console
															.error('Error while creating Drawer');
													deferred
															.reject(errResponse);
												});
								return deferred.promise;
							}
						} ]);