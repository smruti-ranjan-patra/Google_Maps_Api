@extends('layouts.app')

@section('title', 'Map')

@section('content')

	<h2>Google Maps</h2>

		<div id="map" style="width: 100%; height: 500px;">
		</div>

@endsection

@section('js-css')
	
	<script type="text/javascript">var google_key = "AIzaSyDp1rkMd-LLB9IT26iCVf3U_3g2iV_hgiw";</script>
	<script async defer src="https://maps.googleapis.com/maps/api/js?callback=initMap&key="+google_key+"
	></script>
	<script type="text/javascript">
		function initMap()
		{
			var map = new google.maps.Map(document.getElementById('map'), {
				center: {lat: 20.284906, lng: 85.807715},
				zoom: 12,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			});

			// Define the LatLng coordinates for the polygon's path.
			var polygonCoords1 = [
				{lat: 20.284906, lng: 85.807715},
				{lat: 20.276416, lng: 85.846140},
				{lat: 20.302757, lng: 85.802332},
				{lat: 20.284906, lng: 85.807715}
			];

			// Construct the polygon.
			var polygon1 = new google.maps.Polygon({
				paths: polygonCoords1,
				strokeColor: 'red',
				strokeOpacity: 0.8,
				strokeWeight: 2,
				fillColor: 'red',
				fillOpacity: 0.35
			});

			// Define the LatLng coordinates for the polygon's path.
			var polygonCoords2 = [
				{lat: 20.279678, lng: 85.812760},
				{lat: 20.290039, lng: 85.817918},
				{lat: 20.282240, lng: 85.829935},
				{lat: 20.279678, lng: 85.812760}
			];

			// Construct the polygon.
			var polygon2 = new google.maps.Polygon({
				paths: polygonCoords2,
				strokeColor: 'cyan',
				strokeOpacity: 0.8,
				strokeWeight: 2,
				fillColor: 'cyan',
				fillOpacity: 0.35
			});

			polygon1.setMap(map);
			polygon2.setMap(map);
		
		}
	</script>

@endsection
