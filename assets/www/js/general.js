//global variables

if (isAndroid == null) {
	var isAndroid;	
}

function liSelectADifferentTourClick() {
	//change background color and add timeout so user knows which option they selected
	$('li.liSelectDifferentTour').css('background', 'black');
	setTimeout(continueSelectADifferentTourClickExecution, 300)
}

function liIntroClick() {
	//change background color and add timeout so user knows which option they selected
	navigator.notification.alert('To get started browse through the available' +
			' tours and once you have found a tour you like select play at the bottom of the page.  Follow the on' +
			' screen walking directions to your first location.  When you arrive at your destination a photo and' +
			' description will appear. Read or listen to the descsription by selecting audio at the bottom of the page.',
			alertDismissed, 'Welcome to Pockitours Charleston!', 'OK');
}

function alertDismissed() {
    // do nothing
}

function continueSelectADifferentTourClickExecution() {
	window.location.href = "../www/tours.html";
}

function liViewTourInfoClick() {
	//change background color and add timeout so user knows which option they selected
	$('li.liViewTourInfo').css('background', 'black');
	$('.aBackButton').css('color', 'black');
	
	setTimeout(continueViewTourInfoClickExecution, 300)
}

function continueViewTourInfoClickExecution() {
	var current_tour_id = window.localStorage.getItem("current_tour_id");
	window.location.href = "../www/tourDetails.html?id=" + current_tour_id;
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function loadError(err) {
    console.log("Error loading data: " + err.code);
}

function positionChangeError(error) {
	console.log("Error watching current position: " + err.code);
}

function createCSSClass(selector, style) {
    if(!document.styleSheets) {
        return;
    }

    if(document.getElementsByTagName("head").length == 0) {
        return;
    }

    var stylesheet;
    var mediaType;
    if(document.styleSheets.length > 0) {
        for( i = 0; i < document.styleSheets.length; i++) {
            if(document.styleSheets[i].disabled) {
                continue;
            }
            var media = document.styleSheets[i].media;
            mediaType = typeof media;

            if(mediaType == "string") {
                if(media == "" || (media.indexOf("screen") != -1)) {
                    styleSheet = document.styleSheets[i];
                }
            } else if(mediaType == "object") {
                if(media.mediaText == "" || (media.mediaText.indexOf("screen") != -1)) {
                    styleSheet = document.styleSheets[i];
                }
            }

            if( typeof styleSheet != "undefined") {
                break;
            }
        }
    }

    if( typeof styleSheet == "undefined") {
        var styleSheetElement = document.createElement("style");
        styleSheetElement.type = "text/css";

        document.getElementsByTagName("head")[0].appendChild(styleSheetElement);

        for( i = 0; i < document.styleSheets.length; i++) {
            if(document.styleSheets[i].disabled) {
                continue;
            }
            styleSheet = document.styleSheets[i];
        }

        var media = styleSheet.media;
        mediaType = typeof media;
    }

    if(mediaType == "string") {
        for( i = 0; i < styleSheet.rules.length; i++) {
            if(styleSheet.rules[i].selectorText && styleSheet.rules[i].selectorText.toLowerCase() == selector.toLowerCase()) {
                styleSheet.rules[i].style.cssText = style;
                return;
            }
        }

        styleSheet.addRule(selector, style);
    } else if(mediaType == "object") {
    	if (styleSheet.cssRules != null) {
    		for( i = 0; i < styleSheet.cssRules.length; i++) {
                if(styleSheet.cssRules[i].selectorText && styleSheet.cssRules[i].selectorText.toLowerCase() == selector.toLowerCase()) {
                    styleSheet.cssRules[i].style.cssText = style;
                    return;
                }
            }	
    	}
        styleSheet.insertRule(selector + "{" + style + "}", 0);
    }
}