$(document).ready(function(){
	//hide top status bar on android
	if (isAndroid) {
		createCSSClass('.statusContainer', 'display: none;');	
	}
	
	setAppropriateHeights();
	SetFontSizesAndDimensionsBasedOnTotalHeight();
	
	var db = window.openDatabase("TechnitoursDB", "1.0", "Technitours Database", 100000);
	db.transaction(getTours, loadError);
});

function getTours(tx) {
	alert("got hered");

	var sql = "SELECT * FROM tour";
	tx.executeSql(sql, [], getTours_success);
}

function getTours_success(tx, results) {
	alert("got here");

		$('.intro').append(
				'<li><a style="height: 100%;" href="tours.html">' + 
				'<div class="tourContainer" ' +
				  '<div class="tourSectionsContainer">' +	
					'<div class="tourSection">' +
						'<img class="' + statusImgStyle + '" src="' + statusImgSrc + '"/>' + 
						'<header class="tourName">' + "welcome to pockitours charleston" +  '</header>' +
					'</div>' +
					 '</div>' +	
						'</div>' +
					'</a></li>'
		);
	}
}

function setAppropriateHeights() {	
	var height = screen.height;
	var heightOfTop = 45;
	var heightOfLightBlackBlackground = 75;
	var scrollHeight = height - heightOfTop;

	createCSSClass('.scroll', 'height: ' + scrollHeight + 'px; overflow: scroll; width: ' + window.innerWidth + 'px; -webkit-overflow-scrolling: touch;');
	createCSSClass('.tourList', 'height: ' + scrollHeight + 'px; overflow: scroll;');
}

function SetFontSizesAndDimensionsBasedOnTotalHeight() {
	var totalHeight = window.innerHeight;
	
	createCSSClass('.imgPlayIcon', 'width: ' + (totalHeight * .02) + 'px; height: ' + (totalHeight * .025) + 'px; float: left; margin: 3px 0 0 2px;');	
	createCSSClass('.imgCheckIcon', 'width: ' + (totalHeight * .025) + 'px; height: ' + (totalHeight * .025) + 'px; float: left; margin: 3px 0 0 2px;');
	createCSSClass('.imgResumeIcon', 'width: ' + (totalHeight * .025) + 'px; height: ' + (totalHeight * .025) + 'px; float: left; margin: 3px 0 0 2px;');
	createCSSClass('.imgClock', 'width: ' + (totalHeight * .025) + 'px; height: ' + (totalHeight * .025) + 'px; float: left;');
	createCSSClass('.imgDistance', 'width: ' + (totalHeight * .02) + 'px; height: ' + (totalHeight * .025) + 'px; float: left; margin: 0 0 0 2px;');
	createCSSClass('.tourName', 'font-size: ' + (totalHeight * .032) + 'px; float: left; margin: 0 0 0 5%;');
	createCSSClass('.tourLabel', 'font-size: ' + (totalHeight * .03) + 'px; float: left; margin: 0 0 0 5%;');
	createCSSClass('.tourLabelBottom', 'font-size: ' + (totalHeight * .03) + 'px; float: left; margin: 0 0 0 5%;');
	createCSSClass('.tourList li', 'height: ' + (totalHeight * .3) + 'px;');
}