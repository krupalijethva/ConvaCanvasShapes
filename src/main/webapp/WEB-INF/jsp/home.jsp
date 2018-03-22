<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<link rel="stylesheet" href="css/cancss.css" type="text/css">
<link rel="stylesheet" href="css/demo.css" type="text/css">
<script src="js/konva.min.js"></script>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Login</title>
<body>
	<div ng-app="myApp" class="ng-cloak">
		<div ng-controller="ShapeController as ctrl">
			<select ng-model="blisterPackTemplateSelected"
				data-ng-options="blisterPackTemplate as blisterPackTemplate.name for blisterPackTemplate in blisterPackTemplates">
				<option value="">Select Account</option>
			</select>
			<!-- add ADD Button 19-2-->
			<button ng-click="myFunction(blisterPackTemplateSelected)">ADD</button>
			<!--  start form code-->
			<!-- The Modal -->
			<!-- Modal content -->
			<div ng-show="showMeParameter" class="modal-content">
				<!-- The Modal -->
				<!-- Modal content -->
				<div class="formcontainer" align="center">
					<form ng-submit="ctrl.submit(blisterPackTemplateSelected)"
						name="myForm">
						<div ng-show="wl">
							<input type="hidden" ng-model="ctrl.Rect.id" />
							 <input
								type="text" ng-model="ctrl.Rect.rx" placeholder="X"><br>
							<br> <input type="text" ng-model="ctrl.Rect.ry"
								placeholder="Y"><br> <br> <input type="text"
								ng-model="ctrl.Rect.width" placeholder="Width"><br>
							<br> <input type="text" ng-model="ctrl.Rect.length"
								placeholder="Length"> <br> <br>
						</div>
						<div ng-show="radius">
							<input type="hidden" ng-model="ctrl.Circle.id" /> <input
								type="text" ng-model="ctrl.Circle.cx" placeholder="X"><br>
							<br> <input type="text" ng-model="ctrl.Circle.cy"
								placeholder="Y"><br> <br> <input type="text"
								ng-model="ctrl.Circle.radius" placeholder="Radius"> <br>
							<br>
						</div>
						<!-- submit and reset button -->
						<div class="row">
							<div class="form-actions floatRight">
								<input type="submit"
									value="{{!ctrl.Rect.id ? 'Add' : 'Update'}}"
									class="btn btn-primary btn-sm" ng-disabled="myForm.$invalid">
								<button type="button" ng-click="ctrl.reset()"
									class="btn btn-warning btn-sm" ng-disabled="myForm.$pristine">Reset
									Form</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div id="dragThis">
				<ul>
					<li id="posX"></li>
					<li id="posY"></li>
				</ul>
			</div>
			<!--show Rect  -->
			<div class="panel panel-default">
				Default panel contents
				<div class="panel-heading">
					<span class="lead">List of Rectangle </span>
				</div>
				<div class="tablecontainer">
					<table class="table table-hover">
						<thead>
							<tr>
								<th>ID</th>
								<th>Length</th>
								<th>rx</th>
								<th>ry</th>
								<th>width</th>
								<th width="20%"></th>
							</tr>
						</thead>
						<tbody>
							<tr ng-repeat="u in ctrl.Rects">
								<td><span ng-bind="u.id"></span></td>
								<td><span ng-bind="u.length"></span></td>
								<td><span ng-bind="u.rx"></span></td>
								<td><span ng-bind="u.ry"></span></td>
								<td><span ng-bind="u.width"></span></td>
								<td>
									<button type="button" ng-click="ctrl.editRect(u.id)">Edit</button>
									<button type="button" ng-click="ctrl.remove(u.id)">Remove</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<!--end show Rect  -->
			<!--show Circle  -->
			<div class="panel panel-default">
				Default panel contents
				<div class="panel-heading">
					<span class="lead">List of Circle </span>
				</div>
				<div class="tablecontainer">
					<table class="table table-hover">
						<thead>
							<tr>
								<th>ID</th>
								<th>cx</th>
								<th>cy</th>
								<th>Radius</th>
								<th width="20%"></th>
							</tr>
						</thead>
						<tbody>
							<tr ng-repeat="u in ctrl.Circles">
								<td><span ng-bind="u.id"></span></td>
								<td><span ng-bind="u.cx"></span></td>
								<td><span ng-bind="u.cy"></span></td>
								<td><span ng-bind="u.radius"></span></td>
								<td>
									<button type="button" ng-click="ctrl.editCircle(u.id)">Edit</button>
									<button type="button" ng-click="ctrl.remove(u.id)">Remove</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div id="container"></div>
	</div>
	<script src="js/app.js"></script>
	<script src="js/service/user_service.js"></script>
	<script type="text/javascript" src="js/controller/user_controller.js"></script>
</body>
</html>