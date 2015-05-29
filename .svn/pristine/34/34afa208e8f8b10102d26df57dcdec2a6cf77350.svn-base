var location_id;
var startingLocation;
var start;	
var currentAddress;
var latLngLocationAddress;
var formattedLocationAddress;
var map;
var currentTourId = window.localStorage.getItem("current_tour_id");
var directionsService = new google.maps.DirectionsService();
var options = { enableHighAccuracy: true };    
var geocoder = new google.maps.Geocoder();
var directionsDisplay;

$(document).ready(function(){ 
	onOrientationChange();
	
	var location;
	location_id = getUrlVars()["location_id"];
	
	$('#menu').append('<li class="liViewTourInfo"><a href="javascript:liViewTourInfoClick()">Tour Information</a></li>');
	
	var db = window.openDatabase("TechnitoursDB", "1.0", "Technitours Database", 100000);
	db.transaction(getLocationById, loadError);
	
	function getLocationById(tx) {
		var sql = "SELECT * FROM location WHERE id = " + location_id;
		tx.executeSql(sql, [], getLocationById_success);
	}

	function getLocationById_success(tx, results) {
    	var len = results.rows.length;
    	for (var i=0; i<len; i++) {
    		location = results.rows.item(i);
    	}
    	navigator.geolocation.getCurrentPosition(showMap);
	}
	
	function showMap(p) {
		startingLocation = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
		
		directionsDisplay = new google.maps.DirectionsRenderer();
		  var mapOptions = {
		    zoom: 25,
		    mapTypeId: google.maps.MapTypeId.ROADMAP,
		    center: startingLocation
		  }
		  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
		  directionsDisplay.setMap(map);
		  directionsDisplay.setPanel(document.getElementById("directionsPanel"));
		  

		  var selectedTravelMode;
		  switch(window.localStorage.getItem("transportation_method"))
	      {
	      	case "DRIVING":
	      		selectedTravelMode = google.maps.TravelMode.DRIVING;
	      		break;
	      	case "WALKING":
	      		selectedTravelMode = google.maps.TravelMode.WALKING;
	      		break;
	      	case "BICYCLING":
	      		selectedTravelMode = google.maps.TravelMode.BICYCLING;
	      		break;
	      	default:
	      		selectedTravelMode = google.maps.TravelMode.WALKING;
	      }
		  
		  var request = {
		      origin: startingLocation,
		      destination: location.address,
		      travelMode: selectedTravelMode
		  };
		  
		  directionsService.route(request, function(response, status) {
		    if (status == google.maps.DirectionsStatus.OK) {
		      directionsDisplay.setDirections(response);
		      
		      directionsDisplay.setOptions({
	              draggable: false,
	              suppressInfoWindows: false,
	              suppressMarkers: false,
	              markerOptions: ({ clickable: true, zIndex: 3 })
	          });
		    }
		  });
		  
		  //need to code the location's address to latLng format and then back to address format to get a formatted address to compare
		  //with the user's current location
		  codeAddressToLatLng();				 
	}
	
	function codeAddressToLatLng() {
		geocoder.geocode( { 'address': location.address}, function(results, status) {
	  	   if (status == google.maps.GeocoderStatus.OK) {
	  		   latLngLocationAddress = results[0].geometry.location;	
	  		   codeAddressToFormattedAddress();
	  	   }
	  	});
	}
	
	function codeAddressToFormattedAddress() {
		geocoder.geocode( { 'latLng': latLngLocationAddress}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				formattedLocationAddress = results[0].formatted_address;
				
				watchID = navigator.geolocation.watchPosition(positionChange, positionChangeError, options);
		  	}
		});
	}
	
    function positionChange(p) {
    	var currentLocation = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
    	geocoder.geocode( { 'latLng': currentLocation}, function(results, status) {
  	      if (status == google.maps.GeocoderStatus.OK) {
  	    	  currentAddress = results[0].formatted_address;
  	    	if (currentAddress == formattedLocationAddress) {
  	    		clearWatch();
  	    		window.location.href = "../www/locationDetails.html?id=" + location_id + "&fromScreen=navigateToLocation";
  	    	}
  	      }
  	    });
    }

    function clearWatch() {
        if (watchID != null) {
            navigator.geolocation.clearWatch(watchID);
            watchID = null;
        }
    }
});

function setAppropriateHeights(landscape) {	
	var height = screen.height;
	var heightOfTop = 45;
	var scrollHeight = height - heightOfTop;

	createCSSClass('.scroll', 'height: ' + scrollHeight + 'px; overflow: scroll;');
}

function onOrientationChange() {
    switch (window.orientation) {
        case -90:
        case 90:
        	setAppropriateHeights(false);
            break;
        default:
        	setAppropriateHeights(true);
            break;
    }
};
window.onresize = onOrientationChange;