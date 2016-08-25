<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Pizza Delivery System</title>
		<!-- CSS -->
		
		<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
	</head>
	<body>

		<div id="map_search">
		
			<h3 class="serif mgray">Find Dominos Pizza near you</h3>
		
			<input name="property_address" id="address" size="30" placeholder="Enter Your Address"/>
			<input name="property_zip" id="zip" size="7" placeholder="Zip"/>
			<input name="search_button" id="search_button" class="btn btn-primary" type="button" value="Search" />
		
		</div>
	
		<div id="map" style="width: 100%; height: 800px;">
		</div>

		<!-- JavaScripts -->
		<script src="//code.jquery.com/jquery.js"></script>
		<script type="text/javascript" src="js/display_map.js"></script>
		<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDp1rkMd-LLB9IT26iCVf3U_3g2iV_hgiw&callback=initMap"
		></script>
	</body>
</html>