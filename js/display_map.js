function initMap()
{
	// displayMap();
}

$(document).on('click', '#search_button', function()
{
	// console.log('Hi');
	// $('#map').html($('#zip').val());
	// displayMap();
	var address = ($('#address').val() != '') ? $('#address').val() : '';
	var zip = ($('#zip').val() != '') ? $('#zip').val() : '';

	if(address === '' && zip === '')
	{
		displayMap();
	}
	else
	{
		var url = generateSearchUrl(address, zip);
	}
	/*var geocoder = new google.maps.Geocoder(); // startup address finder
	geocoder.geocode( { 'address': zip, 'region': 'in' }, function(results, status) {
		var param = results[0].geometry.location;
		var myLatlng = new google.maps.LatLng(param.lat(), param.lng());
		console.log(myLatlng);
		console.log(status);
	});
	var address = zip;*/
	var lat = ''; var lng = '';
	/*var geocoder = new google.maps.Geocoder();
	geocoder.geocode( { 'address': address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK)
		{
			lat = results[0].geometry.location.lat();
			lng = results[0].geometry.location.lng();
			alert('Latitude: ' + lat + ' Logitude: ' + lng);
		}
		else
		{
		alert("Geocode was not successful for the following reason: " + status);
		}
	});*/
	$.ajax(
	{
		// url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + zip + '&key=AIzaSyDp1rkMd-LLB9IT26iCVf3U_3g2iV_hgiw',
		url: url,
		type: 'GET',
		dataType: 'json',

		success:function(response)
		{
			lat = (response.results[0].geometry.location.lat);
			lng = (response.results[0].geometry.location.lng);
			// alert('Latitude: ' + lat + ' Logitude: ' + lng);
			displayMap(lat, lng);
		}
	});
});

function generateSearchUrl(address='', zip='')
{
	var uri = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address) + encodeURIComponent(zip) + '&key=AIzaSyDp1rkMd-LLB9IT26iCVf3U_3g2iV_hgiw';
	// var ajax_uri = encodeURIComponent(uri);
	return uri;
}

function displayMap(lat=0, lng=0)
{
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 20.278497, lng: 85.826902},
		zoom: 13,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	// Define the LatLng coordinates for the polygons' path
	var bermunda_coords = [
		{lat: 20.267673, lng: 85.786404},
		{lat: 20.262842, lng: 85.822110},
		{lat: 20.284097, lng: 85.827088},
		{lat: 20.292792, lng: 85.800480}
	];
	var kalpana_coords = [
		{lat: 20.262842, lng: 85.822110},
		{lat: 20.243033, lng: 85.845284},
		{lat: 20.268800, lng: 85.861249}
	];
	var kharvel_coords = [
		{lat: 20.262842, lng: 85.822110},
		{lat: 20.268800, lng: 85.861249},
		{lat: 20.294563, lng: 85.857300},
		{lat: 20.295690, lng: 85.844426},
		{lat: 20.284097, lng: 85.827088}
	];
	var jaydev_coords = [
		{lat: 20.292792, lng: 85.800480},
		{lat: 20.284097, lng: 85.827088},
		{lat: 20.295690, lng: 85.844426},
		{lat: 20.326772, lng: 85.837458},
		{lat: 20.326631, lng: 85.812657}
	];
	var patia_coords = [
		{lat: 20.326631, lng: 85.812657},
		{lat: 20.326772, lng: 85.837458},
		{lat: 20.361087, lng: 85.834882},
		{lat: 20.362757, lng: 85.816350}
	];


	// Construct the polygons
	var bermunda_area = new google.maps.Polygon({
		paths: bermunda_coords,
		strokeColor: 'red',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'red',
		fillOpacity: 0.35
	});
	var kalpana_area = new google.maps.Polygon({
		paths: kalpana_coords,
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'blue',
		fillOpacity: 0.35
	});
	var kharvel_area = new google.maps.Polygon({
		paths: kharvel_coords,
		strokeColor: 'yellow',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'yellow',
		fillOpacity: 0.35
	});
	var jaydev_area = new google.maps.Polygon({
		paths: jaydev_coords,
		strokeColor: 'green',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'green',
		fillOpacity: 0.35
	});
	var patia_area = new google.maps.Polygon({
		paths: patia_coords,
		strokeColor: 'cyan',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: 'cyan',
		fillOpacity: 0.35
	});

	if(lat !== 0 && lng !== 0)
	{
		var marker = new google.maps.Marker({
			position: {lat: lat, lng: lng},
			map: map,
			title: 'Hello World!'
		});
	}
	bermunda_area.setMap(map);
	kalpana_area.setMap(map);
	kharvel_area.setMap(map);
	jaydev_area.setMap(map);
	patia_area.setMap(map);
	setMarkers(map);
}

var beaches = [
		['Bermunda Dominos', 20.278448, 85.796944, 4],
		['Kalpana Dominos', 20.260616, 85.843750, 5],
		['Kharvel Nagar Dominos', 20.275663, 85.843605, 3],
		['Jadev Vihar Dominos', 20.307403, 85.820904, 2],
		['Patia Dominos', 20.353196, 85.824480, 1]
	];

function setMarkers(map)
{
	// Adds markers to the map.

	// Marker sizes are expressed as a Size of X,Y where the origin of the image
	// (0,0) is located in the top left of the image.

	// Origins, anchor positions and coordinates of the marker increase in the X
	// direction to the right and in the Y direction down.
	var image =
	{
		url: 'http://localhost/project/Google_Maps_Api/images/demo.jpg',
		// This marker is 20 pixels wide by 32 pixels high.
		size: new google.maps.Size(32, 32),
		// The origin for this image is (0, 0).
		origin: new google.maps.Point(0, 0),
		// The anchor for this image is the base of the flagpole at (0, 32).
		anchor: new google.maps.Point(0, 32)
	};
	// Shapes define the clickable region of the icon. The type defines an HTML
	// <area> element 'poly' which traces out a polygon as a series of X,Y points.
	// The final coordinate closes the poly by connecting to the first coordinate.
	var shape =
	{
		coords: [1, 1, 1, 20, 18, 20, 18, 1],
		type: 'poly'
	};
	for (var i = 0; i < beaches.length; i++)
	{
		var beach = beaches[i];
		var marker = new google.maps.Marker({
			position: {lat: beach[1], lng: beach[2]},
			map: map,
			icon: image,
			shape: shape,
			title: beach[0],
			zIndex: beach[3]
		});
	}
}
