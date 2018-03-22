<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!-- 
Template Name: Metronic - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.6
Version: 4.5.5
Author: KeenThemes
Website: http://www.keenthemes.com/
Contact: support@keenthemes.com
Follow: www.twitter.com/keenthemes
Dribbble: www.dribbble.com/keenthemes
Like: www.facebook.com/keenthemes
Purchase: http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes
License: You must have a valid license purchased only from themeforest(the above link) in order to legally use the theme for your project.
-->
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->
<!-- BEGIN HEAD -->
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<head>

<meta charset="utf-8" />
<title>Tarrison Servery System</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta content="width=device-width, initial-scale=1" name="viewport" />

<meta name="viewport"
	content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<!--       <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
                <meta name="HandheldFriendly" content="true">-->

<meta content="" name="description" />
<meta content="" name="author" />

<!-- BEGIN GLOBAL MANDATORY STYLES -->
<link
	href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all"
	rel="stylesheet" type="text/css" />
<link href="assets/global/plugins/font-awesome/css/font-awesome.min.css"
	rel="stylesheet" type="text/css" />
<link
	href="assets/global/plugins/simple-line-icons/simple-line-icons.min.css"
	rel="stylesheet" type="text/css" />
<link href="assets/global/plugins/bootstrap/css/bootstrap.min.css"
	rel="stylesheet" type="text/css" />
<link href="assets/global/plugins/uniform/css/uniform.default.css"
	rel="stylesheet" type="text/css" />
<link
	href="assets/global/plugins/bootstrap-switch/bootstrap-switch.min.css"
	rel="stylesheet" type="text/css" />
<!-- END GLOBAL MANDATORY STYLES -->
<!-- BEGIN PAGE LEVEL PLUGINS -->
<link
	href="assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css"
	rel="stylesheet" type="text/css" />
<link href="assets/global/plugins/datatables/datatables.min.css"
	rel="stylesheet" type="text/css" />
<link
	href="assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css"
	rel="stylesheet" type="text/css" />
<!-- END PAGE LEVEL PLUGINS -->
<!-- BEGIN THEME GLOBAL STYLES -->
<link href="assets/global/css/components.min.css" rel="stylesheet"
	id="style_components" type="text/css" />
<link href="assets/global/css/plugins.min.css" rel="stylesheet"
	type="text/css" />
<!-- END THEME GLOBAL STYLES -->
<!-- BEGIN PAGE LEVEL STYLES -->
<link href="assets/pages/css/profile.min.css" rel="stylesheet"
	type="text/css" />
<link href="assets/apps/css/ticket.min.css" rel="stylesheet"
	type="text/css" />
<!-- END PAGE LEVEL STYLES -->
<!-- BEGIN THEME LAYOUT STYLES -->
<link href="assets/layouts/layout/css/layout.min.css" rel="stylesheet"
	type="text/css" />
<link href="assets/layouts/layout/css/themes/darkblue.min.css"
	rel="stylesheet" type="text/css" id="style_color" />
<link href="assets/layouts/layout/css/custom.min.css" rel="stylesheet"
	type="text/css" />


<link href="assets/layouts/layout2/css/layout.min.css" rel="stylesheet"
	type="text/css" />
<link href="assets/layouts/layout2/css/themes/blue.min.css"
	rel="stylesheet" type="text/css" id="style_color" />
<link href="assets/layouts/layout2/css/custom.min.css" rel="stylesheet"
	type="text/css" />

<link href="css/edit.css" rel="stylesheet" type="text/css" />

<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<!-- END THEME LAYOUT STYLES -->
<!--        <link rel="shortcut icon" href="favicon.ico" />-->
<!--         <style>
        
                    body {
                        margin: 0;
                        padding: 0;
                        overflow: hidden;
                        background-color: #F0F0F0;
                    }
    </style>-->
</head>
<!-- END HEAD -->
<body
	class="page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid page-content-white page-sidebar-closed">
	<!-- BEGIN HEADER -->
	<div class="page-header navbar navbar-fixed-top">
		<!-- BEGIN HEADER INNER -->	
			<h3 class="page-title label">Tarrison Servery System</h3>			
		<!-- END HEADER INNER -->
	</div>
	<!-- END HEADER -->
	<!-- BEGIN HEADER & CONTENT DIVIDER -->
	<div class="clearfix"></div>
	<!-- END HEADER & CONTENT DIVIDER -->
	<!-- BEGIN CONTAINER -->
	<div class="page-container">
		<!-- ng-APP START -->
		<div ng-app="myApp" class="ng-cloak">
			<!--Start angular controller  -->
			<div ng-controller="ShapeController as ctrl">
				<!-- BEGIN SIDEBAR -->
				<div class="page-sidebar-wrapper">
					<!-- BEGIN SIDEBAR -->
					<!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
					<!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
					<!-- END SIDEBAR -->
				</div>
				<!-- END SIDEBAR -->
				<!-- BEGIN CONTENT -->
				<div class="page-content-wrapper">
					<!-- BEGIN CONTENT BODY -->
					<div class="page-content">
						<div class="row">
							<div class="col-md-12">
								<!-- BEGIN PROFILE SIDEBAR -->
								<div class="profile-sidebar">
									<!-- PORTLET MAIN -->
									<div class="portlet light profile-sidebar-portlet "
										style="height: 750px; width: 200px">
										<!-- SIDEBAR USERPIC -->
										<div class="shape">
											<table class="table">
												<tbody>
													<tr>
														<td colspan="2">
															<div
																style="height: 50px; width: 180px; float: left; background-color: lightgray"
																id="tableId" data-target="#stack2" data-toggle="modal"
																ng-click="opentable('True', 'tableId')">
																<h5 class="tableh1">Table</h5>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div class="rectangle sink" id="sinkId"
																data-target="#stack3" data-toggle="modal"
																ng-click="opensink('True', 'sinkId')"></div>
														</td>
														<td>
															<div class=" rect drawer" id="drawerId"
																data-target="#stack4" data-toggle="modal"
																ng-click="opendrawer('True', 'drawerId')"></div>
														</td>
													</tr>
													<tr>
														<td>
															<div class="rectice iceBin" id="icebinId"
																data-target="#stack5" data-toggle="modal"
																ng-click="openicebin('True', 'icebinId')">
																<h5 class="tableh1">Ice-Bin</h5>
															</div>
														</td>
														<td>
															<div class="circle" id="scraperId" data-target="#stack1"
																data-toggle="modal">
																<h5 class="tableh1">Scraper</h5>
															</div>
														</td>
													</tr>
												</tbody>
											</table>

											<!--  START circle  -->
											<div id="stack1" class="modal " tabindex="-1"
												data-width="400">
												<div class="modal-dialog">
													<!-- Start model content -->
													<div class="modal-content">
														<form name="myFormCircle" class="form-horizontal">
															<!-- <div class="modal-content"> -->
															<!--start header of model  -->
															<div class="modal-header">
																<button type="button" class="close" data-dismiss="modal"
																	aria-hidden="true" ng-click="closeBox()"></button>
																<h4 class="modal-title">Circle</h4>
															</div>
															<!--End header of model  -->
															<!-- start model body -->
															<div class="modal-body">
																<div class="row">
																	<div class="col-md-12">
																		<table align="center">
																			<tr>
																				<input type="hidden" ng-model="ctrl.Circle.id" />
																			</tr>
																			<tr>
																				<td align="center">X:</td>
																				<td><input type="text"
																					ng-model="ctrl.Circle.cx" id="x" value="60"
																					class="col-md-12 form-control" placeholder="x"></td>
																			</tr>
																			<tr>
																				<td align="center">Y:</td>
																				<td><input type="text"
																					ng-model="ctrl.Circle.cy" id="y" value="60"
																					class="col-md-12 form-control" placeholder="y"></td>
																			</tr>
																			<tr>
																				<td align="center">Radius:</td>
																				<td><input type="text"
																					ng-model="ctrl.Circle.radius" id="radius"
																					value="60" class="col-md-12 form-control"
																					placeholder="radius"></td>
																			</tr>
																		</table>
																	</div>
																</div>
															</div>
															<!-- End model body -->
															<!--start form footer  -->
															<div class="modal-footer">
																<button type="button" data-dismiss="modal"
																	class="btn dark btn-outline" ng-click="closeBox()">Close</button>
																<!-- <input type="submit"
																	value="{{!ctrl.Circle.id ? 'Add' : 'Update'}}"
																	class="btn red" ng-disabled="myFormCircle.$invalid"> -->
																<input type="button" class="btn red"
																	data-dismiss="modal" value="Add"
																	ng-click="CircleDraw()" data-dismiss="modal" />
															</div>
															<!--End form footer  -->
															<!-- </div> -->
														</form>
														<!-- End model content -->
													</div>
												</div>
											</div>
											<!--End circle  -->

											<!-- start Rectangle -->
											<div id="stack2" class="modal" tabindex="-2" data-width="400">
												<div class="modal-dialog">
													<!-- Start model content -->
													<div class="modal-content">
														<form name="myFormRect" class="form-horizontal">
															<!--start header of model  -->
															<div class="modal-header">
																<button type="button" class="close" data-dismiss="modal"
																	aria-hidden="true" ng-click="closeTable();"></button>
																<h4 class="modal-title">Rectangle</h4>
															</div>
															<!--End header of model -->
															<!-- start model body -->
															<div class="modal-body">
																<div class="row">
																	<div class="col-md-12">
																		<table align="center">
																			<tr>
																				<input type="hidden" ng-model="ctrl.Rect.id" />
																			</tr>
																			<tr>
																				<td align="center">X:</td>
																				<td><input type="text" ng-model="ctrl.Rect.rx"
																					id="xrect" value="60"
																					class="col-md-12 form-control" placeholder="x"></td>
																			</tr>
																			<tr>
																				<td align="center">Y:</td>
																				<td><input type="text" ng-model="ctrl.Rect.ry"
																					id="yrect" value="60"
																					class="col-md-12 form-control" placeholder="y"></td>
																			</tr>
																			<tr>
																				<td align="center">Width:</td>
																				<td><input type="text"
																					ng-model="ctrl.Rect.width" id="width" value="60"
																					class="col-md-12 form-control" placeholder="width"></td>
																			</tr>
																			<tr>
																				<td align="center">Length:</td>
																				<td><input type="text"
																					ng-model="ctrl.Rect.length" id="length" value="60"
																					class="col-md-12 form-control" placeholder="length"></td>
																			</tr>
																		</table>
																	</div>
																</div>
															</div>
															<!-- End model body -->

															<!--start form footer  -->
															<div class="modal-footer">
																<button type="button" data-dismiss="modal"
																	class="btn dark btn-outline" ng-click="closeTable()">Close</button>
																<input type="button" class="btn red" value="Add"
																	ng-click="TableDraw()" data-dismiss="modal" />
																<!-- <button data-dismiss="modal" class="btn red"
																ng-click="RectProcess()">ADD</button> -->
																<!-- pending for calling function -->
															</div>
															<!--End form footer  -->
														</form>
													</div>
													<!-- End model content -->
												</div>
											</div>
											<!--End Rectangle  -->

											<!-- Start Sink -->
											<div id="stack3" class="modal" tabindex="-2" data-width="400">
												<div class="modal-dialog">
													<!-- Start model content -->
													<div class="modal-content">
														<form name="myFormSink" class="form-horizontal">
															<!--start header of model  -->
															<div class="modal-header">
																<button type="button" class="close" data-dismiss="modal"
																	aria-hidden="true" ng-click="closeSink()"></button>
																<h4 class="modal-title">Sink</h4>
															</div>
															<!--End header of model -->
															<!-- start model body -->
															<div class="modal-body">
																<div class="row">
																	<div class="col-md-12">
																		<table align="center">
																			<tr>
																				<input type="hidden" ng-model="ctrl.Sink.id" />
																			</tr>
																			<tr>
																				<td align="center">X:</td>
																				<td><input type="text" ng-model="ctrl.Sink.sx"
																					id="xsink" value="60"
																					class="col-md-12 form-control" placeholder="x"></td>
																			</tr>
																			<tr>
																				<td align="center">Y:</td>
																				<td><input type="text" ng-model="ctrl.Sink.sy"
																					id="ysink" value="60"
																					class="col-md-12 form-control" placeholder="y"></td>
																			</tr>
																			<tr>
																				<td align="center">Width:</td>
																				<td><input type="text"
																					ng-model="ctrl.Sink.width" id="width" value="60"
																					class="col-md-12 form-control" placeholder="width"></td>
																			</tr>
																			<tr>
																				<td align="center">Length:</td>
																				<td><input type="text"
																					ng-model="ctrl.Sink.length" id="length" value="60"
																					class="col-md-12 form-control" placeholder="length"></td>
																			</tr>
																		</table>
																	</div>
																</div>
															</div>
															<!-- End model body -->
															<!--start form footer  -->
															<div class="modal-footer">
																<button type="button" data-dismiss="modal"
																	class="btn dark btn-outline" ng-click="closeSink()">Close</button>
																<input type="button" class="btn red" value="Add"
																	ng-click="submit('myFormSink')" data-dismiss="modal" />
																<!-- pending for calling function -->
															</div>
															<!--End form footer  -->
														</form>
													</div>
													<!-- End model content -->
												</div>
											</div>
											<!-- End Sink -->

											<!-- Start Drawer -->
											<div id="stack4" class="modal" tabindex="-2" data-width="400">
												<div class="modal-dialog">
													<!-- Start model content -->
													<div class="modal-content">
														<form name="myFormDrawer" class="form-horizontal">
															<!--start header of model  -->
															<div class="modal-header">
																<button type="button" class="close" data-dismiss="modal"
																	aria-hidden="true" ng-click="closeDrawer()"></button>
																<h4 class="modal-title">Drawer</h4>
															</div>
															<!--End header of model -->
															<!-- start model body -->
															<div class="modal-body">
																<div class="row">
																	<div class="col-md-12">
																		<table align="center">
																			<tr>
																				<input type="hidden" ng-model="ctrl.Drawer.id" />
																			</tr>
																			<tr>
																				<td align="center">X:</td>
																				<td><input type="text"
																					ng-model="ctrl.Drawer.dx" id="xdrawer" value="60"
																					class="col-md-12 form-control" placeholder="x"></td>
																			</tr>
																			<tr>
																				<td align="center">Y:</td>
																				<td><input type="text"
																					ng-model="ctrl.Drawer.dy" id="ydrawer" value="60"
																					class="col-md-12 form-control" placeholder="y"></td>
																			</tr>
																			<tr>
																				<td align="center">Width:</td>
																				<td><input type="text"
																					ng-model="ctrl.Drawer.width" id="width" value="60"
																					class="col-md-12 form-control" placeholder="width"></td>
																			</tr>
																			<tr>
																				<td align="center">Length:</td>
																				<td><input type="text"
																					ng-model="ctrl.Drawer.length" id="length"
																					value="60" class="col-md-12 form-control"
																					placeholder="length"></td>
																			</tr>
																		</table>
																	</div>
																</div>
															</div>
															<!-- End model body -->
															<!--start form footer  -->
															<div class="modal-footer">
																<button type="button" data-dismiss="modal"
																	class="btn dark btn-outline" ng-click="closeDrawer()">Close</button>
																<input type="button" class="btn red" value="Add"
																	ng-click="submit('myFormDrawer')" data-dismiss="modal" />
																<!-- pending for calling function -->
															</div>
															<!--End form footer  -->
														</form>
													</div>
													<!-- End model content -->
												</div>
											</div>
											<!-- End Drawer -->

											<!-- Start IceBin -->
											<div id="stack5" class="modal" tabindex="-2" data-width="400">
												<div class="modal-dialog">
													<!-- Start model content -->
													<div class="modal-content">
														<form name="myFormIcebin" class="form-horizontal">
															<!--start header of model  -->
															<div class="modal-header">
																<button type="button" class="close" data-dismiss="modal"
																	aria-hidden="true" ng-click="closeIcebin()"></button>
																<h4 class="modal-title">Icebin</h4>
															</div>
															<!--End header of model -->
															<!-- start model body -->
															<div class="modal-body">
																<div class="row">
																	<div class="col-md-12">
																		<table align="center">
																			<tr>
																				<input type="hidden" ng-model="ctrl.IceBin.id" />
																			</tr>
																			<tr>
																				<td align="center">X:</td>
																				<td><input type="text"
																					ng-model="ctrl.IceBin.ix" id="xicebin" value="60"
																					class="col-md-12 form-control" placeholder="x"></td>
																			</tr>
																			<tr>
																				<td align="center">Y:</td>
																				<td><input type="text"
																					ng-model="ctrl.IceBin.iy" id="yicebin" value="60"
																					class="col-md-12 form-control" placeholder="y"></td>
																			</tr>
																			<tr>
																				<td align="center">Width:</td>
																				<td><input type="text"
																					ng-model="ctrl.IceBin.width" id="iwidth" value="60"
																					class="col-md-12 form-control" placeholder="width"></td>
																			</tr>
																			<tr>
																				<td align="center">Length:</td>
																				<td><input type="text"
																					ng-model="ctrl.IceBin.length" id="ilength"
																					value="60" class="col-md-12 form-control"
																					placeholder="length"></td>
																			</tr>
																		</table>
																	</div>
																</div>
															</div>
															<!-- End model body -->
															<!--start form footer  -->
															<div class="modal-footer">
																<button type="button" data-dismiss="modal"
																	class="btn dark btn-outline" ng-click="closeIcebin()">Close</button>
																<!-- <button data-dismiss="modal" class="btn red"
																ng-click="IcebinProcess()">ADD</button> -->
																<input type="button" class="btn red" value="Add"
																	ng-click="IcebinDraw()" data-dismiss="modal" />
																<!-- pending for calling function -->
															</div>
															<!--End form footer  -->
														</form>
													</div>
													<!-- End model content -->
												</div>
											</div>
											<!--End IceBin  -->

											<!-- Load List -->
											<div id="load" class="modal" tabindex="-2">
												<div class="modal-dialog">
													<div class="modal-content">

														<div class="modal-header">
															<button type="button" class="close" data-dismiss="modal"
																aria-hidden="true"></button>
															<h4 class="modal-title">Load Documents</h4>
														</div>

														<div class="modal-footer">
															<button type="button" data-dismiss="modal"
																class="btn btn-outline dark">Close</button>
															<button type="button" class="btn green">Load</button>
														</div>
													</div>
												</div>
											</div>
											<!-- End Load List -->
											<!-- UpdateAll -->
											<div id="updateAll" class="modal" tabindex="-2">
												<div class="modal-dialog">
													<div class="modal-content">
														<div class="modal-header">
															<button type="button" class="close" data-dismiss="modal"
																aria-hidden="true"></button>
															<h4 class="modal-title">Save Documents</h4>
														</div>
														<!-- start model body -->
														<div class="modal-body">
															<div class="row">
																<div class="col-md-12">
																	<table align="center">
																		<tr>
																			<input type="hidden" ng-model="ctrl.Document.docId"/>
																		</tr>
																		<tr>
																			<td align="center">File Name:</td>
																			<td><input type="text" id="fileName"
																			ng-model="ctrl.Document.filename"	class="col-md-12 form-control"
																				placeholder="FileName"></td>
																		</tr>
																	</table>
																</div>
															</div>
														</div>
														<!-- End model body -->


														<div class="modal-footer">
															<button type="button" data-dismiss="modal"
																class="btn btn-outline dark">Close</button>
															<button ng-click="AllShapeUpdate()" class="btn green" data-dismiss="modal">Save</button>
														</div>
													</div>
												</div>
											</div>
											<!--End UpdateAll -->

										</div>
										<!-- END SIDEBAR USERPIC -->
										<div class="profile-userbuttons" style="margin-top: 410px">
											<a class="btn btn-circle green btn-sm" data-toggle="modal"
												href="#load" style="margin-left: 40px"> Load Shapes </a> <br>
											<!-- <button style="margin-left: 50px" type="button"
												class="btn btn-circle green btn-sm"
												ng-click="AllShapeLoad()">Load Shapes</button>
											<br> -->
											<a style="margin-left: 60px"
												class="btn btn-circle green btn-sm" data-toggle="modal"
												href="#updateAll" style="margin-left: 40px">Update</a> <br>
											<!-- <button style="margin-left: 60px" type="button"
												class="btn btn-outline dark" 
												ng-click="AllShapeUpdate()">Update</button> -->
										</div>
										<!--End Update Button  -->
									</div>
									<!-- END PORTLET MAIN -->
								</div>
								<!-- END BEGIN PROFILE SIDEBAR -->
								<!--  Start container-->

								<div class="app-ticket app-ticket-details app-ticket-config">							
									<div class="row" style="height: 750px">										
										<div class="col-md-12" style="height: 750px">										
											<div class="portlet light " style="height: 750px">
											<h3><span class="nav navbar-nav pull-right" style="margin-right: 5%">DocName</span></h3>
												<div context-menu="myContextDiv">
												<!--change on 17 march  -->
													<!-- <div id="container"></div> -->
													<div class="canvas-wrapper">
														<canvas id="myCanvas">
														<p id="demo"></p>
														</canvas>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<!--End container  -->
							</div>
						</div>
					</div>
					<!-- END CONTENT BODY -->
				</div>
				<!-- END CONTENT -->
				<!-- Start Context menu -->
				<!-- Start Context menu -->

				<!-- <div id='cntnr'>
					<ul id='items'>
						<li id="editId" ng-click="editClick()">Edit</li>
						<hr>
						<li id="deleteid" ng-click=" deleteClick()">Delete</li>
						<hr>
						<li>View</li>
					</ul>
				</div> -->

				<!-- End Context menu -->
			</div>
			<!--END angular controller  -->
		</div>
		<!--END ng-APP -->
	</div>
	<!-- END CONTAINER -->
	<!-- BEGIN FOOTER -->
	<div class="page-footer">
		<!--                 <div class="page-footer-inner"> 2014 &copy; Metronic by keenthemes.
                                <a href="http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes" title="Purchase Metronic just for 27$ and get lifetime updates for free" target="_blank">Purchase Metronic!</a>
                            </div>
                            <div class="scroll-to-top">
                                <i class="icon-arrow-up"></i>
                            </div>-->
	</div>
	<!-- END FOOTER -->
	<!--[if lt IE 9]>
        <script src="../assets/global/plugins/respond.min.js"></script>
        <script src="../assets/global/plugins/excanvas.min.js"></script> 
        <![endif]-->
	<!-- BEGIN CORE PLUGINS -->
	<script src="assets/global/plugins/jquery.min.js"
		type="text/javascript"></script>
	<script src="assets/global/plugins/bootstrap/js/bootstrap.min.js"
		type="text/javascript"></script>
	<script src="assets/global/plugins/js.cookie.min.js"
		type="text/javascript"></script>
	<script
		src="assets/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js"
		type="text/javascript"></script>
	<script
		src="assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js"
		type="text/javascript"></script>
	<script src="assets/global/plugins/jquery.blockui.min.js"
		type="text/javascript"></script>
	<script src="assets/global/plugins/uniform/jquery.uniform.min.js"
		type="text/javascript"></script>
	<script
		src="assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js"
		type="text/javascript"></script>
	<!-- END CORE PLUGINS -->
	<!-- BEGIN PAGE LEVEL PLUGINS -->
	<script src="assets/global/plugins/jquery-ui/jquery-ui.min.js"
		type="text/javascript"></script>
	<script
		src="assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js"
		type="text/javascript"></script>
	<script src="assets/global/plugins/jquery.sparkline.min.js"
		type="text/javascript"></script>
	<script src="assets/global/scripts/datatable.js" type="text/javascript"></script>
	<script src="assets/global/plugins/datatables/datatables.min.js"
		type="text/javascript"></script>
	<script
		src="assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.js"
		type="text/javascript"></script>
	<!-- END PAGE LEVEL PLUGINS -->
	<!-- BEGIN THEME GLOBAL SCRIPTS -->
	<script src="assets/global/scripts/app.min.js" type="text/javascript"></script>
	<!-- END THEME GLOBAL SCRIPTS -->
	<!-- BEGIN PAGE LEVEL SCRIPTS -->
	<script src="assets/pages/scripts/ui-modals.min.js"
		type="text/javascript"></script>
	<script src="assets/pages/scripts/profile.min.js"
		type="text/javascript"></script>
	<script src="assets/pages/scripts/table-datatables-managed.min.js"
		type="text/javascript"></script>
	<!-- END PAGE LEVEL SCRIPTS -->
	<!-- BEGIN THEME LAYOUT SCRIPTS -->
	<script src="assets/layouts/layout/scripts/layout.min.js"
		type="text/javascript"></script>
	<script src="assets/layouts/layout/scripts/demo.min.js"
		type="text/javascript"></script>
	<script src="assets/layouts/layout2/scripts/layout.min.js"
		type="text/javascript"></script>
	<script src="assets/layouts/layout2/scripts/demo.min.js"
		type="text/javascript"></script>
	<script src="assets/layouts/global/scripts/quick-sidebar.min.js"
		type="text/javascript"></script>

	<script src="assets/global/plugins/konva.min.js"></script>
	<script src="assets/global/plugins/fabric.min.js"></script>
	<!-- <script src="js/circle.js"></script> -->
	<!--ng-script start  -->
	<script src="js/app.js"></script>
	<script src="js/service/user_service.js"></script>
	<script type="text/javascript" src="js/controller/user_controller.js"></script>
	<!--End ng-script  -->
	<!-- END THEME LAYOUT SCRIPTS -->

	<script>
		$(document).ready(function() {
			$(".selectOption").click(function(e) {
				if (e.ctrlKey) {

					$(this).toggleClass("selected");
				} else {
					if ($(this).hasClass("selected")) {
						$(".selectOption").removeClass("selected");

					} else {
						$(".selectOption").removeClass("selected");
						$(this).addClass("selected");
					}

				}
			});
		});
	</script>
</body>

</html>
