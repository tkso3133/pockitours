var current_tour_id = window.localStorage.getItem("current_tour_id");
var id;
var from_screen;
var nextLocation;
var audio;
var media = null;
var media_timer = null;
var sound;
var audioPlaying = false;
var mediaTimer = null;
var audioName = null;

$(document).ready(function(){
	onOrientationChange();
	
	id = getUrlVars()["id"];
	
	from_screen = getUrlVars()["fromScreen"];
	
//	$('.flexslider').flexslider();
	
	$('#menu').append('<li class="liViewTourInfo"><a href="javascript:liViewTourInfoClick()">Tour Information</a></li>');

	if (from_screen == "navigateToLocation") {
		window.localStorage.setItem("tour_" + current_tour_id + "_status", id);
	}
	
	var db = window.openDatabase("TechnitoursDB", "1.0", "Technitours Database", 100000);
	db.transaction(setLocationCompleted, loadError);

	db.transaction(getLocationById, loadError);
	if (from_screen == "navigateToLocation") {
		db.transaction(getNextLocationId, loadError);
	} else if (from_screen == "tourDetails") {
		$('#bottom').append('<div id="backButton"><a class="aBackButton" href="javascript:liViewTourInfoClick()"><img id="imgBack" src="img/back_arrow.png"/>Back</a></div>');
	}
	$('#bottom').append('<div id="audioButton"><a class="aAudioButton" href="javascript:playPauseAudio()"><img class="imgAudio" src="img/audio.png"/><img class="imgPause" src="img/pause.png"/>Audio</a></div>');
});

function setLocationCompleted(tx) {
	var sql = "UPDATE LOCATION SET location_completed = 'true' WHERE id = " + id;
	tx.executeSql(sql);
}

function getLocationById(tx) {
	var sql = "SELECT * FROM location WHERE id = " + id;
	tx.executeSql(sql, [], getLocationById_success);
}

function getLocationById_success(tx, results) {
	var len = results.rows.length;		
	for (var i=0; i<len; i++) {
		var location = results.rows.item(i);		
		$('#photos').append('<img width="100%"; height="100%"; src ="img/' + location.image_name + '"/>');
		$('#blueLocationInformationBar').append('<label id="lblLocationName">' + location.name + '</label>');
		$('#locationDescription').append(location.description);										
		media = new Media(location.audio);
		if (from_screen == "navigateToLocation" && location.id == id) {
			navigator.notification.beep(1);
			navigator.notification.vibrate(1000);
			navigator.notification.alert('You have arrived at ' + location.name + '.',
					alertDismissed, 'Destination reached', 'OK');
		}
	}
}


function alertDismissed() {
    // do nothing
}

function getNextLocationId(tx) {
	alert('next location, id is: ' + id);
	var nextId = parseInt(id) + 1;
	alert('next location, id is: ' + current_tour_id);
	var sql = "SELECT * FROM location WHERE tour_id = " + current_tour_id + " AND location_completed = 'false'";
	tx.executeSql(sql, [], getNextLocationId_success);
}

function getNextLocationId_success(tx, results) {
	var len = results.rows.length;
	if (len == 0) { //if location length == 0 then the current location is the last location for the tour so display the "finish" button
		$('#buttons').append('<a href="javascript:completeTour()">Finish</a>');
	} else {
//		for (var i=0; i<len; i++) {
			
			nextLocation = results.rows.item(0);
			alert('next location: ' + nextLocation.name);
    		$('#bottom').append('<div id="nextButton"><a class="aNextButton" href="javascript:btnNextClick()"><img id="imgNext" src="img/next_arrow.png"/>Next</a></div>');
//    	}
	}    	    
}

function btnNextClick() {
	//change font color and add timeout so user knows which option they selected
	$('.aNextButton').css('color', 'black');
	setTimeout(continueNextExecution, 300)
}

function continueNextExecution() {
	window.location.href = "../www/navigateToLocation.html?location_id=" + nextLocation.id;
}

function openSelectTransportation() {
	$("#dialog-confirm").dialog({ resizable: false, draggable: false, closeOnEscape: false, height:200, modal: true });
	
	$(".ui-dialog-content").empty();
	$(".ui-dialog-content").append("<input id='radioDriving' class='radioTransportation' type='radio' name='transportation' value='driving' onclick='enableConfirmButton()'>");
	$(".ui-dialog-content").append("<label for='radioDriving'>Driving</label><br>");
	$(".ui-dialog-content").append("<input id='radioWalking' class='radioTransportation' type='radio' name='transportation' value='walking' onclick='enableConfirmButton()'>");
	$(".ui-dialog-content").append("<label for='radioWalking'>Walking</label><br>");
	$(".ui-dialog-content").append("<input id='radioBicycling' class='radioTransportation' type='radio' name='transportation' value='bicycling' onclick='enableConfirmButton()'>");
	$(".ui-dialog-content").append("<label for='radioBicycling'>Bicycling</label><br>");
	$(".ui-dialog-content").append("<input id='btnConfirm' type='button' value='Confirm' onclick='btnConfirmClick(this)'>");
	$(".ui-dialog-content").append("<input id='btnCancel' type='button' value='Cancel' onclick='btnCancelClick(this)'>");
	
	document.getElementById("btnConfirm").disabled = true; 
}

function enableConfirmButton() {
	document.getElementById("btnConfirm").disabled = false;
}

function btnCancelClick(btn) {
	//change background color and add timeout so user knows which option they selected
	btn.style.background = "grey";
	setTimeout(continueCancelExecution, 300)
}

function continueCancelExecution() {
	$("#dialog-confirm").dialog("close");
}

function btnConfirmClick(btn) {
	//change background color and add timeout so user knows which option they selected
	btn.style.background = "green";
	setTimeout(continueConfirmExecution, 300)
}

function continueConfirmExecution() {
	//set local storage transportation_method
	var radioDriving = document.getElementById("radioDriving");
	var radioWalking = document.getElementById("radioWalking");
	var radioBicycling = document.getElementById("radioBicycling");
	
	if (radioDriving.checked) {
		window.localStorage.setItem("transportation_method", "DRIVING");
	} else if (radioWalking.checked) {
		window.localStorage.setItem("transportation_method", "WALKING");
	} else if (radioBicycling.checked) {
		window.localStorage.setItem("transportation_method", "BICYCLING");
	}
	
	$("#dialog-confirm").dialog("close");
}

function completeTour() {
	window.localStorage.setItem("tour_" + current_tour_id + "_status", "999");
	window.location.href = "../www/tours.html";
}

function playPauseAudio() {
	//change font color and add timeout so user knows which option they selected
	$('.aAudioButton').css('color', 'black');
	setTimeout(continuePlayPauseAudioExecution(), 300)
}

function continuePlayPauseAudioExecution() {
	$('.aAudioButton').css('color', 'grey');
	$('.imgAudio').css('margin', '5px 0 4px 10px');
	//if (media == null) {
        // Create Media object from src
//        media = new Media("/android_asset/www/batteryAudio.m4a");
	//	media = new Media(src);
   // } // else play current audio
    // Play audio
	if (audioPlaying) {
		$('.imgAudio').css('display', 'block');
		$('.imgPause').css('display', 'none');
//		//sound.pause();
		media.pause();
		audioPlaying = false;
	}
	else {
		$('.imgAudio').css('display', 'none');
		$('.imgPause').css('display', 'block');
		media.play();
		audioPlaying = true;
	}
}

function setAppropriateHeights() {	
	var height = screen.height;
	var heightOfTop = 45;
	var heightOfBottom = 50;
	var scrollHeight = height - heightOfTop - heightOfBottom;

	createCSSClass('.scroll', 'height: ' + scrollHeight + 'px; overflow: scroll;');
	
	var width = screen.width;
	var widthOfPlayPauseButtons = 25;
	var widthOfTimer = 150;
	var widthOfSlider = width - widthOfPlayPauseButtons - widthOfTimer;
	
	createCSSClass('.audiojs .scrubber', 'width: ' + widthOfSlider + 'px;');
}

function onOrientationChange() {
    switch (window.orientation) {
        case -90:
        case 90:
        	setAppropriateHeights();
            break;
        default:
        	setAppropriateHeights();
            break;
    }
};
window.onresize = onOrientationChange;