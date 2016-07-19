document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	document.addEventListener("backbutton", onBackKeyDown, false);
    var db = window.openDatabase("TechnitoursDB", "1.0", "Technitours Database", 100000);    
    db.transaction(populateDB, transaction_error, populateDB_success);
    
    var platform = device.platform;
	if (platform == "Android") {
		isAndroid = true;
	} else {
		isAndroid = false;	
	}
}

function onBackKeyDown(e) {
	  e.preventDefault();
	}

function transaction_error(tx, error) {
    alert("Database Error: " + error);
}

function populateDB_success() {
	setTimeout(continueExecution, 0) //wait two seconds before continuing
}

function continueExecution() {
//	window.location.href = "../www/intro.html";
	window.location.href = "../www/tours.html";
}

function populateDB(tx) {
//	tx.executeSql('DROP TABLE IF EXISTS tour');
//	tx.executeSql('DROP TABLE IF EXISTS location');
//	tx.executeSql('DROP TABLE IF EXISTS photo');
	
	var tourSql = 
		"CREATE TABLE IF NOT EXISTS tour ( "+
		"id INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"name VARCHAR(50), " +
		"description VARCHAR(500), " +
		"background VARCHAR(100), " +
		"duration VARCHAR(50), " +
		"length VARCHAR(10))";
	
	var locationSql = 
		"CREATE TABLE IF NOT EXISTS location ( "+
		"id INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"tour_id INT, " +
		"name VARCHAR(50), " +
		"description VARCHAR(1000), " +
		"address VARCHAR(100), " +    	
		"audio VARCHAR(100), " +
		"location_completed boolean default false," +
		"image_name VARCHAR(100))";
	
	tx.executeSql(tourSql);
	tx.executeSql(locationSql);

//	tx.executeSql("INSERT INTO tour (id, name, description, background, duration, length) VALUES (1, 'South Battery Walking Tour', 'This is the south battery walking tour featuring scenic views of Fort Sumnter. This is the south battery walking tour featuring scenic views of Fort Sumnter. This is the south battery walking tour featuring scenic views of Fort Sumnter. This is the south battery walking tour featuring scenic views of Fort Sumnter. This is the south battery walking tour featuring scenic views of Fort Sumnter. This is the south battery walking tour featuring scenic views of Fort Sumnter.', 'tour1/wide1.jpg', '30 to 40 minutes', '1.6')");
//	tx.executeSql("INSERT INTO tour (id, name, description, background, duration, length) VALUES (2, 'West Battery Walking Tour', 'This is the west battery walking tour featuring scenic views of the ocean.', 'tour1/wide2.jpg', '1 to 2 hours', '2.3')");
//	tx.executeSql("INSERT INTO tour (id, name, description, background, duration, length) VALUES (3, 'Ghost Tour', 'This is the west battery walking tour featuring scenic views of the ocean.', 'tour1/wide3.jpg', '1 to 2 hours', '3')");
//	tx.executeSql("INSERT INTO tour (id, name, description, background, duration, length) VALUES (4, 'Downtown Tour', 'This is the west battery walking tour featuring scenic views of the ocean.', 'tour1/wide1.jpg', '1 to 2 hours', '1.2')");
//	tx.executeSql("INSERT INTO tour (id, name, description, background, duration, length) VALUES (5, 'Derek and Tommys Tour', 'This is Derek and Tommys tour.  This is the west battery walking tour featuring scenic views of the ocean.', 'tour1/wide1.jpg', '30 to 45 minutes', '1.6')");
//	
//	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio) VALUES (1, 1, 'Rainbow Row', 'After the Civil War, this area of Charleston devolved into near slum conditions. In the early 1900s, Dorothy Porcher Legge purchased a section of these houses numbering 99 through 101 East Bay and began to renovate them. She chose to paint these houses pink based on a colonial Caribbean color scheme. Other owners and future owners followed suit, creating the rainbow of pastel colors present today. The coloring of the houses helped keep the houses cool inside as well as give the area its name. Common myths concerning Charleston include variants on the reasons for the paint colors. According to some tales, the houses were painted in the various colors such that the intoxicated sailors coming in from port could remember which houses they were to bunk in. In other versions, the colors of the buildings date from their use as stores; the colors were used so that owners could tell illiterate slaves which building to go to for shopping.', '4525 NW 169th St. Clive, IA 50325', 'tour1/location_1.mp3')");
//	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio) VALUES (2, 1, 'Upper Rainbow Row', 'This is the upper part of rainbow row.', '3600 NW 169th St. Clive, IA 50325', 'tour1/location_2.mp3')");
//	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio) VALUES (3, 1, 'Lower Rainbow Row', 'This is the lower part of rainbow row.', '4560 NW 169th St. Clive, IA 50325', 'tour1/location_3.mp3')");
//	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio) VALUES (4, 2, 'Rainbow Row', 'After the Civil War, this area of Charleston devolved into near slum conditions. In the early 1900s, Dorothy Porcher Legge purchased a section of these houses numbering 99 through 101 East Bay and began to renovate them. She chose to paint these houses pink based on a colonial Caribbean color scheme. Other owners and future owners followed suit, creating the rainbow of pastel colors present today. The coloring of the houses helped keep the houses cool inside as well as give the area its name. Common myths concerning Charleston include variants on the reasons for the paint colors. According to some tales, the houses were painted in the various colors such that the intoxicated sailors coming in from port could remember which houses they were to bunk in. In other versions, the colors of the buildings date from their use as stores; the colors were used so that owners could tell illiterate slaves which building to go to for shopping.', '4525 NW 169th St. Clive, IA 50325', 'tour2/location_4.mp3')");
//	
//	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed) VALUES (5, 5, 'Edmondston-Alston House', " +
//			"'Of Charlestons many fine house museums, only the Edmondston-Alston House" +
//			" (constructed in 1825 and enhanced in 1838) commands a magnificent view of Charleston Harbor. " +
//			"From its piazza, General P. T. Beauregard watched the fierce bombardment of Ft. Sumter on April 12, 1861, signaling the start of the Civil War. " +
//			"And on December 11 of the same year, the house gave refuge to General Robert E. Lee the night a wide-spreading fire threatened his safety in a Charleston hotel.', " +
//			"'1067 Rifle Range Rd, Mount Pleasant, SC 29464', 'tour5/Aperture.mp3', 'true')");
//	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio) VALUES (6, 5, 'Robert William Roper House', 'Robert William Roper House was built about 1838 in Charleston, South Carolina on land purchased by Robert W. Roper, a prominent cotton planter, in May 1838. The house is an outstanding example of early 19th Century Greek Revival architecture, built on a monumental scale. Although there are now two houses between the Roper House and White Point Garden to the south, at the time of its construction nothing stood between the house and the harbor beyond.', '1053 Rifle Range Rd, Mount Pleasant, SC 29464', 'tour1/location_2.mp3')");
//	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio) VALUES (7, 5, 'The Battery', 'The Battery is a landmark defensive seawall and promenade in Charleston, South Carolina, famous for its stately antebellum homes. Named for a civil-war coastal defence artillery battery at the site, it stretches along the lower shores of the Charleston peninsula, bordered by the Ashley and Cooper Rivers, which meet here to form Charleston harbor.', '1 East Battery, Charleston, SC 29401', 'tour1/location_3.mp3')");
//	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio) VALUES (8, 5, 'Joseph Verree House', 'Joseph Verree, a prosperous Charleston master carpenter, constructed this two-and-one-half-story Georgian single house circe 1767. The house, noted for its two-story curved piazza and finely detailed door surround at the main entrance (on the lower piazza, of course), is a handsome and unusual structure and a personal favorite.', '47 Church Street, Charleston, SC 29401', 'tour2/location_4.mp3')");
//	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio) VALUES (9, 5, 'Thomas Rose House', 'The Thomas Rose House is a National Register property located at 59 Church St. in Charleston, South Carolina. The 2 1�2-story stuccoed brick house was probably built by planter Thomas Rose in 1733. The property had been inherited by his wife, Beuler Elliott. The house has excellent examples of original Georgian woodwork in the paneling, staircase, and elsewhere. In the twentieth century an owner razed a neighboring house on the adjoining lot to the south to accommodate a large garden.', '57 Church Street, Charleston, SC 29401', 'tour2/location_4.mp3')");
//	
	
	/*****************************************************************************************
	 * Tours Section
	 ****************************************************************************************/
	// Tour - Church & Meeting St Tour 
	tx.executeSql("INSERT INTO tour (id, name, description, background, duration, length) VALUES (1, 'Church & Meeting St Tour', " +
			"'This is the Church and Meeting Street Tour featuring the historic locations of Church and Meeting Street." +
			" This tour contains 14 historic locations.'," +
			" 'John_Cordes_Prioleau_House.JPG', '30 - 45 minutes', ' ~ 1')");

	// Tour - Church & Meeting St Tour Extended
	tx.executeSql("INSERT INTO tour (id, name, description, background, duration, length) VALUES (2, 'Church & Meeting St Extended', " +
			"'This is the Church and Meeting Street Tour extended featuring the historic locations of Church and Meeting Street." +
			" This tour contains 20 historic locations.'," +
			" 'St._Michaels_Episcopal_Church.jpg', '45 - 60 minutes', ' ~ 1.5')");
	
	// Tour - Meeting, Broad & Legare St Tour
	tx.executeSql("INSERT INTO tour (id, name, description, background, duration, length) VALUES (3, 'Meeting, Broad & Legare St', " +
			"'This is the Meeting, Broad & Legare Street Tour featuring the historic locations of Meeting, Broad & Legare." +
			" This tour contains 16 historic locations.'," +
			" 'Cathedral_of_St_John_the_Baptist.jpg', '45 - 60 minutes', ' ~ 1.3')");

	// Tour - Church, Meeting, King, Broad & Legare St
	tx.executeSql("INSERT INTO tour (id, name, description, background, duration, length) VALUES (4, 'Church, Meeting, Broad & Legare St', " +
			"'This is the Church, Meeting, King, Broad & Legare Street tour featuring the historic locations of Church, Meeting, King, Broad & Legare Street." +
			" This tour contains 22 historic locations.', " +
			" 'gov_john_rutledge_house_web.jpg', '45 - 90 minutes', '~ 2')");
	/*****************************************************************************************
	 * End Tours Section
	 ****************************************************************************************/
	
/*****************************************************************************************
* Locations Section
*****************************************************************************************/
	/*****************************************************************************************
	* Tour Stops - 1
	*****************************************************************************************/
	// Tour - Church & Meeting St Tour 
	// Stop - 1
	// Location - The Battery
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (1, 1, 'The Battery'," +
			"'The battery is the first of many historic stops.  The battery earned its name after being host to a civil-war coastal defensive artillery battle." +
			" It is surrounded on both sides by the Ashley and Cooper rivers which flow into Charleston Harbor" +
			" Looking out over east battery you can see Fort Sumter in the distance, a number of flying flags make it easy to spot." +
			" Fort Sumter is known as the starting point of the civil war, where shots were first fired at the Battle of Fort Sumter on April 12, 1861." +
			" The battery also features many stately southern mansions and beautiful oak trees, as well as reminders of the civil war such as cannons and cannon balls." +
			" Please feel free to walk around the park and enjoy all that it has to offer before continuing to your next stop.', " +
//			" '2 Murray Blvd Charleston, SC 29401', 'batteryAudio.m4a', 'false', 'battery_park.jpg')");
			" '1370 Cassidy Ct, Mount Pleasant SC 29464', '/android_asset/www/batteryAudio.m4a', 'false', 'battery_park.jpg')");

	
	// Tour - Church & Meeting St Tour Extended
	// Stop - 1
	// Location - The Battery
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (2, 2, 'The Battery'," +
			"'The battery is the first of many historic stops.  The battery earned its name after being host to a civil-war coastal defensive artillery battle." +
			" It is surrounded on both sides by the Ashley and Cooper rivers which flow into Charleston Harbor" +
			" Looking out over east battery you can see Fort Sumter in the distance, a number of flying flags make it easy to spot." +
			" Fort Sumter is known as the starting point of the civil war, where shots were first fired at the Battle of Fort Sumter on April 12, 1861." +
			" The battery also features many stately southern mansions and beautiful oak trees, as well as reminders of the civil war such as cannons and cannon balls." +
			" Please feel free to walk around the park and enjoy all that it has to offer before continuing to your next stop.', " +
//			" '2 Murray Blvd Charleston, SC 29401', '/android_asset/www/Voice00001.3gp', 'false', 'battery_park.jpg')");
			" '1378 Cassidy Ct, Mount Pleasant SC 29464', '/android_asset/www/Voice00012.3gp', 'false', 'battery_park.jpg')");
	
	// Tour - Meeting, Broad & Legare St Tour
	// Stop - 1
	// Location - The Battery
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (3, 3, 'The Battery'," +
			"'The battery is the first of many historic stops.  The battery earned its name after being host to a civil-war coastal defensive artillery battle." +
			" It is surrounded on both sides by the Ashley and Cooper rivers which flow into Charleston Harbor" +
			" Looking out over east battery you can see Fort Sumter in the distance, a number of flying flags make it easy to spot." +
			" Fort Sumter is known as the starting point of the civil war, where shots were first fired at the Battle of Fort Sumter on April 12, 1861." +
			" The battery also features many stately southern mansions and beautiful oak trees, as well as reminders of the civil war such as cannons and cannon balls." +
			" Please feel free to walk around the park and enjoy all that it has to offer before continuing to your next stop.', " +
//			" '2 Murray Blvd Charleston, SC 29401', 'tour7/location10.mp3', 'false', 'battery_park.jpg')");
			" '1378 Cassidy Ct, Mount Pleasant SC 29464', '/android_asset/www/Aperture.mp3', 'false', 'battery_park.jpg')");
	
	// Tour - Church, Meeting, King, Broad & Legare St
	// Stop - 1
	// Location - The Battery
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (4, 4, 'The Battery'," +
			"'The battery is the first of many historic stops.  The battery earned its name after being host to a civil-war coastal defensive artillery battle." +
			" It is surrounded on both sides by the Ashley and Cooper rivers which flow into Charleston Harbor" +
			" Looking out over east battery you can see Fort Sumter in the distance, a number of flying flags make it easy to spot." +
			" Fort Sumter is known as the starting point of the civil war, where shots were first fired at the Battle of Fort Sumter on April 12, 1861." +
			" The battery also features many stately southern mansions and beautiful oak trees, as well as reminders of the civil war such as cannons and cannon balls." +
			" Please feel free to walk around the park and enjoy all that it has to offer before continuing to your next stop.', " +
			" '2 Murray Blvd Charleston, SC 29401', 'tour7/location10.mp3', 'false', 'battery_park.jpg')");
//			" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location10.mp3', 'false', 'battery_park.jpg')");
	
	/*****************************************************************************************
	* Tour Stops - 2
	*****************************************************************************************/
	// Tour - Church & Meeting St Tour
	// Stop - 2
	//Location - Calhoun Mansion
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (5, 1, 'Calhoun Mansion', " +
			"'The Calhoun Mansions was built in 1876 for a wealthy businessman, George W. Williams and is a Victorian style house. " +
			" The mansion boasts 14 foot ceilings, 35 rooms, 23 fireplaces and is the largest single family residence in Charleston.'," +
//			"'16 Meeting St, Charleston, South Carolina 29401', '/android_asset/www/Voice00012.3gp', 'false', 'Calhoun_Mansion.JPG')");
	" '1370 Cassidy Ct, Mount Pleasant SC 29464', '/android_asset/www/Voice00012.3gp', 'false', 'Calhoun_Mansion.JPG')");
	
	// Tour - Church & Meeting St Tour Extended
	// Stop - 2
	// Location - Calhoun Mansion
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (6, 2, 'Calhoun Mansion', " +
			"'The Calhoun Mansions was built in 1876 for a wealthy businessman, George W. Williams and is a Victorian style house. " +
			" The mansion boasts 14 foot ceilings, 35 rooms, 23 fireplaces and is the largest single family residence in Charleston.'," +
//			"'16 Meeting St, Charleston, South Carolina 29401', 'tour6/location11.mp3', 'false', 'Calhoun_Mansion.JPG')");
	" '1366 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location11.mp3', 'false', 'Calhoun_Mansion.JPG')");
	
	// Tour - Meeting, Broad & Legare St Tour
	// Stop - 2
	// Location - Calhoun Mansion
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (7, 3, 'Calhoun Mansion', " +
			"'The Calhoun Mansions was built in 1876 for a wealthy businessman, George W. Williams and is a Victorian style house. " +
			" The mansion boasts 14 foot ceilings, 35 rooms, 23 fireplaces and is the largest single family residence in Charleston.'," +
			"'16 Meeting St, Charleston, South Carolina 29401', 'tour6/location11.mp3', 'false', 'Calhoun_Mansion.JPG')");
//	" '1366 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location11.mp3', 'false', 'Calhoun_Mansion.JPG')");
	
	// Tour - Church, Meeting, King, Broad & Legare St
	// Stop - 2
	// Location - Calhoun Mansion
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (8, 4, 'Calhoun Mansion', " +
			"'The Calhoun Mansions was built in 1876 for a wealthy businessman, George W. Williams and is a Victorian style house. " +
			" The mansion boasts 14 foot ceilings, 35 rooms, 23 fireplaces and is the largest single family residence in Charleston.'," +
			"'16 Meeting St, Charleston, South Carolina 29401', 'tour6/location11.mp3', 'false', 'Calhoun_Mansion.JPG')");
//	" '1366 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location11.mp3', 'false', 'Calhoun_Mansion.JPG')");
	
	/*****************************************************************************************
	* Tour Stops - 3
	*****************************************************************************************/
	// Tour - Church & Meeting St Tour
	// Stop - 3
	// Location - James Simmons House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (9, 1, 'James Simmons House', " +
			"'The James Simmons House was built in the late 18th Century, likely for lawyer James Simmons. It was home to Robert Gibbes in 1782 and also " +
			" an antebellum write Louisa Cheves. During the time of the Civil war in 1862 General Pierre Beauregard used the house as his " +
			" headquarters.'," +
			"'37 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'James_Simmons_House.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'James_Simmons_House.JPG')");

	// Tour - Church & Meeting St Tour Extended
	// Stop - 3
	// Location - James Simmons House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (10, 2, 'James Simmons House', " +
			"'The James Simmons House was built in the late 18th Century, likely for lawyer James Simmons. It was home to Robert Gibbes in 1782 and also " +
			" an antebellum write Louisa Cheves. During the time of the Civil war in 1862 General Pierre Beauregard used the house as his " +
			" headquarters.'," +
			"'37 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'James_Simmons_House.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'James_Simmons_House.JPG')");
	
	// Tour - Meeting, Broad & Legare St Tour
	// Stop - 3
	// Location - James Simmons House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (11, 3, 'James Simmons House', " +
			"'The James Simmons House was built in the late 18th Century, likely for lawyer James Simmons. It was home to Robert Gibbes in 1782 and also " +
			" an antebellum write Louisa Cheves. During the time of the Civil war in 1862 General Pierre Beauregard used the house as his " +
			" headquarters.'," +
			"'37 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'James_Simmons_House.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'James_Simmons_House.JPG')");
	
	// Tour - Church, Meeting, King, Broad & Legare St
	// Stop - 3
	// Location - Joseph Verree House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (12, 4, 'Joseph Verree Houe', " +
			 "'The Joseph Verree house was constructed around the year 1767 by Joseph Verree himself, a prosperous Charleston master carpenter." +
			 " The house is of the Georgian style architecture." +
			 " Verree was an active participant of the American Revolution and also a part of the Committee of Correspondence, the goal of the committee was to " +
			 " maintain relationships with Patriot groups in other colonies.' , " +
		     " '47 Church St Charleston, SC 29401', 'tour6/location13.mp3', 'false', 'Joseph_Verree_House.jpg')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'James_Simmons_House.JPG')");
	
	/*****************************************************************************************
	* Tour Stops - 4
	*****************************************************************************************/
	// Tour - Church & Meeting St Tour
	// Stop - 4
	// Location - The First Baptist Church
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (13, 1, 'The First Baptist Church', " +
			"'The First Baptist Church is the oldest church in the South and is often referred to as the \"Mother Church of Southern Baptists.\" " +
			" It was designed by Robert Mills, who is also known for designing the Washington Monument. The church was originally founded in 1682 in Kittery, Maine," +
			" but due to prosecution relocated shortly after to South Carolina.'," +
			"'48 Church St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'The_First_Baptist_Church.jpg')");
//		    " '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'The_First_Baptist_Church.jpg')");
	
	// Tour - Church & Meeting St Tour Extended
	// Stop - 4
	// Location - The First Baptist Church
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (14, 2, 'The First Baptist Church', " +
			"'The First Baptist Church is the oldest church in the South and is often referred to as the \"Mother Church of Southern Baptists.\" " +
			" It was designed by Robert Mills, who is also known for designing the Washington Monument. The church was originally founded in 1682 in Kittery, Maine," +
			" but due to prosecution relocated shortly after to South Carolina.'," +
			"'48 Church St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'The_First_Baptist_Church.jpg')");
//		    " '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'The_First_Baptist_Church.jpg')");
	
	// Tour - Meeting, Broad & Legare St Tour
	// Stop - 4
	// Location - The First Baptist Church
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (15, 3, 'The First Baptist Church', " +
			"'The First Baptist Church is the oldest church in the South and is often referred to as the \"Mother Church of Southern Baptists.\" " +
			" It was designed by Robert Mills, who is also known for designing the Washington Monument. The church was originally founded in 1682 in Kittery, Maine," +
			" but due to prosecution relocated shortly after to South Carolina.'," +
			"'48 Church St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'The_First_Baptist_Church.jpg')");
//		    " '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'The_First_Baptist_Church.jpg')");
	
	
	// Tour - Church, Meeting, King, Broad & Legare St
	// Stop - 4
	// Location - Thomas Rose House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (16, 4, 'Thomas Rose House', " +
			"'The Thomas Rose house was constructed in the mid 1700''s. The house is a great testament to the colonial architecture of Charleston." +
			" The house is a two and a half story Georgian style brick townhouse, with much of the original Georgian paneling in place.', " +
			"'59 Church St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Thomas_Rose_House.jpg')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Thomas_Rose_House.jpg')");
	
	/*****************************************************************************************
	* Tour Stops - 5
	*****************************************************************************************/
	// Tour - Church & Meeting St Tour
	// Stop - 5
	// Location - Nathaniel Russell House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (17, 1, 'Nathaniel Russell House', " +
			"'This house was home to a Rhode Island merchant, Nathaniel Russell.  Construction on this Adam Style building began in 1809 and cost $80,000. " +
			" Adam Style architecture refers to 18th-century neoclassical style. This was the first style to incorporate integration into the architecture and interior design providing " +
			" a single uniform scheme.'," +
			"'51 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Nathaniel_Russell_House.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Nathaniel_Russell_House.JPG')");
	
	// Tour - Church & Meeting St Tour Extended
	// Stop - 5
	// Location - Nathaniel Russell House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (18, 2, 'Nathaniel Russell House', " +
			"'This house was home to a Rhode Island merchant, Nathaniel Russell.  Construction on this Adam Style building began in 1809 and cost $80,000. " +
			" Adam Style architecture refers to 18th-century neoclassical style. This was the first style to incorporate integration into the architecture and interior design providing " +
			" a single uniform scheme.'," +
			"'51 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Nathaniel_Russell_House.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Nathaniel_Russell_House.JPG')");
	
	// Tour - Meeting, Broad & Legare St Tour
	// Stop - 5
	// Location - Nathaniel Russell House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (19, 3, 'Nathaniel Russell House', " +
			"'This house was home to a Rhode Island merchant, Nathaniel Russell.  Construction on this Adam Style building began in 1809 and cost $80,000. " +
			" Adam Style architecture refers to 18th-century neoclassical style. This was the first style to incorporate integration into the architecture and interior design providing " +
			" a single uniform scheme.'," +
			"'51 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Nathaniel_Russell_House.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Nathaniel_Russell_House.JPG')");

	// Tour - Church, Meeting, King, Broad & Legare St
	// Stop - 5
	// Location - Robert Brewton House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (20, 4, 'Robert Brewton House', " +
			"'The Robert Brewton House was built in 1730 and is the oldest \"single\" house in Charleston.  A single house is only about one room wide" +
			" and has the narrow end of the house towards the street.  As you walk the streets of Charleston you will notice many houses of this style.', " +
			"'71 Church St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Robert_Brewton_house.jpg')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Robert_Brewton_house.jpg')");
	
	/*****************************************************************************************
	* Tour Stops - 6
	*****************************************************************************************/
	// Tour - Church & Meeting St Tour
	// Stop - 6
	// Location - First (Scots) Presbyterian Church
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (21, 1, 'First (Scots) Presbyterian Church', " +
			"'In 1731 a dozen Scottish residents left the Independent Church of Charleston establishing the congregation. This Church was built in 1814 and it is the fifth oldest church in Charleston." +
			" Within the stained glass windows are a number of Scottish symbols as well as a thistle, a symbol of Scotland, on the iron gate. " +
			" Of the two bell towers only the northern tower currently houses a bell. The original bells were donated to the military during the Civil War.'," +
			"'53 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'First_Presbyterian_Church.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'First_Presbyterian_Church.JPG')");
	
	// Tour - Church & Meeting St Tour Extended
	// Stop - 6
	// Location - First (Scots) Presbyterian Church
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (22, 2, 'First (Scots) Presbyterian Church', " +
			"'In 1731 a dozen Scottish residents left the Independent Church of Charleston establishing the congregation. This Church was built in 1814 and it is the fifth oldest church in Charleston." +
			" Within the stained glass windows are a number of Scottish symbols as well as a thistle, a symbol of Scotland, on the iron gate. " +
			" Of the two bell towers only the northern tower currently houses a bell. The original bells were donated to the military during the Civil War.'," +
			"'53 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'First_Presbyterian_Church.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'First_Presbyterian_Church.JPG')");
	
	// Tour - Meeting, Broad & Legare St Tour
	// Stop - 6
	// Location - First (Scots) Presbyterian Church
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (23, 3, 'First (Scots) Presbyterian Church', " +
			"'In 1731 a dozen Scottish residents left the Independent Church of Charleston establishing the congregation. This Church was built in 1814 and it is the fifth oldest church in Charleston." +
			" Within the stained glass windows are a number of Scottish symbols as well as a thistle, a symbol of Scotland, on the iron gate. " +
			" Of the two bell towers only the northern tower currently houses a bell. The original bells were donated to the military during the Civil War.'," +
			"'53 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'First_Presbyterian_Church.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'First_Presbyterian_Church.JPG')");

	// Tour - Church, Meeting, King, Broad & Legare St
	// Stop - 6
	// Location - Heyward-Washington House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (24, 4, 'Heyward-Washington House', " +
			"'The Heyward-Washington House was built in 1772 for Thomas Heyward Jr., who was one of for South Carolina signers of the Declartion of Independence." +
			" Heyward, an artillery officer in the American Revolution was captured by the British in 1780 and exiled to St. Augustine, Florida.', " +
			"'87 Church St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Heyward_Washington_House.jpg')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Heyward_Washington_House.jpg')");
	
	/*****************************************************************************************
	* Tour Stops - 7
	*****************************************************************************************/
	// Tour - Church & Meeting St Tour
	// Stop - 7
	// Location - Branford-Horry House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (25, 1, 'Branford-Horry House', " +
			"'The Branford-Horry house was built for a wealthy planter by the name of William Branford. Thomas Horry, who married the daughter of Bradford" +
			" bought the house in 1801. Elias Horry, the son of Thomas, who was president of the South Carolina Canal and Railroad company eventually inherited the house." +
			" After inheriting the house Elias altered the appearance greatly with the addition of the two-story porch built over the sidewalk.'," +
			"'59 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Branford_Horry_House.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Branford_Horry_House.JPG')");
	
	// Tour - Church & Meeting St Tour Extended
	// Stop - 7
	// Location - Branford-Horry House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (26, 2, 'Branford-Horry House', " +
			"'The Branford-Horry house was built for a wealthy planter by the name of William Branford. Thomas Horry, who married the daughter of Bradford" +
			" bought the house in 1801. Elias Horry, the son of Thomas, who was president of the South Carolina Canal and Railroad company eventually inherited the house." +
			" After inheriting the house Elias altered the appearance greatly with the addition of the two-story porch built over the sidewalk.'," +
			"'59 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Branford_Horry_House.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Branford_Horry_House.JPG')");
	
	// Tour - Meeting, Broad & Legare St Tour
	// Stop - 7
	// Location - Branford-Horry House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (27, 3, 'Branford-Horry House', " +
			"'The Branford-Horry house was built for a wealthy planter by the name of William Branford. Thomas Horry, who married the daughter of Bradford" +
			" bought the house in 1801. Elias Horry, the son of Thomas, who was president of the South Carolina Canal and Railroad company eventually inherited the house." +
			" After inheriting the house Elias altered the appearance greatly with the addition of the two-story porch built over the sidewalk.'," +
			"'59 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Branford_Horry_House.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Branford_Horry_House.JPG')");
	
	// Tour - Church, Meeting, King, Broad & Legare St
	// Stop - 7
	// Location - St. Michael's Episcopal Church
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (28, 4, 'St. Michael''s Episcopal Church', " +
			"'Construction of St. Michael''s Episcopal Church was done between 1751 - 1761 and it is the oldest surviving religious structure in Charleson." +
			" The church houses the oldest tower clock in North America and the churchyard is the resting place of two signers of the Constitution of the United States.', " +
			"'80 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'St_Michaels_Episcopal_Church.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'St_Michaels_Episcopal_Church.JPG')");
	
	/*****************************************************************************************
	* Tour Stops - 8
	*****************************************************************************************/
	// Tour - Church & Meeting St Tour
	// Stop - 8
	// Location - John Cordes Prioleau House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (29, 1, 'John Cordes Prioleau House', " +
			"'The land this house was built on was in the Prioleau family for three generations.  From 1855 - 1862 the house it was the location " +
			" for the School of Young Ladies.  After this time it became home to Dr. Charles U. Sheppard, known for his efforts to bring tea production to Charleston.', " +
			"'68 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'John_Cordes_Prioleau_House.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'John_Cordes_Prioleau_House.JPG')");
	
	// Tour - Church & Meeting St Tour Extended
	// Stop - 8
	// Location - John Cordes Prioleau House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (30, 2, 'John Cordes Prioleau House', " +
			"'The land this house was built on was in the Prioleau family for three generations.  From 1855 - 1862 the house it was the location " +
			" for the School of Young Ladies.  After this time it became home to Dr. Charles U. Sheppard, known for his efforts to bring tea production to Charleston.', " +
			"'68 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'John_Cordes_Prioleau_House.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'John_Cordes_Prioleau_House.JPG')");
	
	// Tour - Meeting, Broad & Legare St Tour
	// Stop - 8
	// Location - John Cordes Prioleau House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (31, 3, 'John Cordes Prioleau House', " +
			"'The land this house was built on was in the Prioleau family for three generations.  From 1855 - 1862 the house it was the location " +
			" for the School of Young Ladies.  After this time it became home to Dr. Charles U. Sheppard, known for his efforts to bring tea production to Charleston.', " +
			"'68 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'John_Cordes_Prioleau_House.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'John_Cordes_Prioleau_House.JPG')");
	
	// Tour - Church, Meeting, King, Broad & Legare St
	// Stop - 8
	// Location -  South Carolina Society Hall
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (32, 4, ' South Carolina Society Hall', " +
			"'Built in 1804 the South Carolina Society hall is one of the most famous Adam Style buildings in Charleston. The society was established" +
			" in 1737 and originally referred to as \"The Two Bit Club\", since having weekly dues of two bits.  Schools for orphans and indigent children were eventually established here.', " +
			"'72 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'The_South_Carolina_Society.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'The_South_Carolina_Society.JPG')");
	
	/*****************************************************************************************
	* Tour Stops - 9
	*****************************************************************************************/
	// Tour - Church & Meeting St Tour
	// Stop - 8
	// Location - South Carolina Historical Society
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (33, 1, 'South Carolina Historical Society', " +
			"'Built in 1804 the South Carolina Society hall is one of the most famous Adam Style buildings in Charleston. The society was established" +
			" in 1737 and originally referred to as \"The Two Bit Club\", since having weekly dues of two bits.  Schools for orphans and indigent children were eventually established here.', " +
			"'71 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'The_South_Carolina_Society.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'The_South_Carolina_Society.JPG')");
	
	// Tour - Church & Meeting St Tour Extended
	// Stop - 9
	// Location - South Carolina Historical Society
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (34, 2, 'South Carolina Historical Society', " +
			"'Built in 1804 the South Carolina Society hall is one of the most famous Adam Style buildings in Charleston. The society was established" +
			" in 1737 and originally referred to as \"The Two Bit Club\", since having weekly dues of two bits.  Schools for orphans and indigent children were eventually established here.', " +
			"'71 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'The_South_Carolina_Society.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'The_South_Carolina_Society.JPG')");
	
	// Tour - Meeting, Broad & Legare St Tour
	// Stop - 9
	// Location - South Carolina Historical Society
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (35, 3, 'South Carolina Historical Society', " +
			"'Built in 1804 the South Carolina Society hall is one of the most famous Adam Style buildings in Charleston. The society was established" +
			" in 1737 and originally referred to as \"The Two Bit Club\", since having weekly dues of two bits.  Schools for orphans and indigent children were eventually established here.', " +
			"'71 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'The_South_Carolina_Society.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'The_South_Carolina_Society.JPG')");
	
	// Tour - Church, Meeting, King, Broad & Legare St
	// Stop - 9
	// Location - John Cordes Prioleau House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (36, 4, 'John Cordes Prioleau House', " +
			"'The land this house was built on was in the Prioleau family for three generations.  From 1855 - 1862 the house it was the location " +
			" for the School of Young Ladies.  After this time it became home to Dr. Charles U. Sheppard, known for his efforts to bring tea production to Charleston.', " +
			"'68 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'John_Cordes_Prioleau_House.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'John_Cordes_Prioleau_House.JPG')");
	
	/*****************************************************************************************
	* Tour Stops - 10
	*****************************************************************************************/
	// Tour - Church & Meeting St Tour
	// Stop - 10
	// Location - St. Michael's Episcopal Church
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (37, 1, 'St. Michaels Episcopal Church', " +
			"'Construction of St. Michael''s Episcopal Church was done between 1751 - 1761 and it is the oldest surviving religious structure in Charleson." +
			" The church houses the oldest tower clock in North America and the churchyard is the resting place of two signers of the Constitution of the United States.', " +
			"'80 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'St_Michaels_Episcopal_Church.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'St_Michaels_Episcopal_Church.JPG')");
	
	// Tour - Church & Meeting St Tour Extended
	// Stop - 10
	// Location - St. Michael's Episcopal Church
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (38, 2, 'St. Michaels Episcopal Church', " +
			"'Construction of St. Michael''s Episcopal Church was done between 1751 - 1761 and it is the oldest surviving religious structure in Charleson." +
			" The church houses the oldest tower clock in North America and the churchyard is the resting place of two signers of the Constitution of the United States.', " +
			"'80 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'St_Michaels_Episcopal_Church.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'St_Michaels_Episcopal_Church.JPG')");
	
	// Tour - Meeting, Broad & Legare St Tour
	// Stop - 10
	// Location - St. Michael's Episcopal Church
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (39, 3, 'St. Michaels Episcopal Church', " +
			"'Construction of St. Michaels Episcopal Church was done between 1751 - 1761 and it is the oldest surviving religious structure in Charleson." +
			" The church houses the oldest tower clock in North America and the churchyard is the resting place of two signers of the Constitution of the United States.', " +
			"'80 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'St_Michaels_Episcopal_Church.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'St_Michaels_Episcopal_Church.JPG')");
	
	// Tour - Church, Meeting, King, Broad & Legare St
	// Stop - 10
	// Location - Branford-Horry House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (40, 4, 'Branford-Horry House', " +
			"'The Branford-Horry house was built for a wealthy planter by the name of William Branford. Thomas Horry, who married the daughter of Bradford" +
			" bought the house in 1801. Elias Horry, the son of Thomas, who was president of the South Carolina Canal and Railroad company eventually inherited the house." +
			" After inheriting the house Elias altered the appearance greatly with the addition of the two-story porch built over the sidewalk.'," +
			"'59 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Branford_Horry_House.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Branford_Horry_House.JPG')");
	
	/*****************************************************************************************
	* Tour Stops - 11
	*****************************************************************************************/
	// Tour - Church & Meeting St Tour
	// Stop - 11
	// Location - Heyward-Washington House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (41, 1, 'Heyward-Washington House', " +
			"'The Heyward-Washington House was built in 1772 for Thomas Heyward Jr., who was one of for South Carolina signers of the Declartion of Independence." +
			" Heyward, an artillery officer in the American Revolution was captured by the British in 1780 and exiled to St. Augustine, Florida.', " +
			"'87 Church St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Heyward_Washington_House.jpg')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Heyward_Washington_House.jpg')");

	// Tour - Church & Meeting St Tour Extended
	// Stop - 11
	// Location - Hibernian Hall
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (42, 2, 'Hibernian Hall', " +
			"' Hibernian Hall was built in 1840 as part of the Hibernian Society.  In 1860 it became associated with the National Democratic Convention." +
			" The National Democratic Convention of 1860 was a very significant time in the nations history.  It was here that the Democratic party" +
			" party provided support for presidential candidate Stephen A. Douglas in hopes of gaining support in extending slavory to the territories." +
			" Douglas, nor any other democratic candidate could win enough support leading to the election of Abraham Lincoln'," +
			"'105 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'hibernian_hall.jpg')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'hibernian_hall.jpg')");
	
	// Tour - Meeting, Broad & Legare St Tour
	// Stop - 11
	// Location - Gov. John Rutledge House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (43, 3, 'Gov. John Rutledge House', " +
			"' Construction of the John Rutledge house was completed in 1763 and was home to governor John Rutledge, a signer of the United States" +
			"  Constitution. After the Civil war the U.S. District Court for the District of South Carolina used this building as its meeting grounds.', " +
			"'116 Broad St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'gov_john_rutledge_house_web.jpg')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'gov_john_rutledge_house_web.jpg')");
	
	// Tour - Church, Meeting, King, Broad & Legare St
	// Stop - 11
	// Location - First (Scots) Presbyterian Church
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (44, 4, 'First (Scots) Presbyterian Church', " +
			"'In 1731 a dozen Scottish residents left the Independent Church of Charleston establishing the congregation. This Church was built in 1814 and it is the fifth oldest church in Charleston." +
			" Within the stained glass windows are a number of Scottish symbols as well as a thistle, a symbol of Scotland, on the iron gate. " +
			" Of the two bell towers only the northern tower currently houses a bell. The original bells were donated to the military during the Civil War.'," +
			"'53 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'First_Presbyterian_Church.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'First_Presbyterian_Church.JPG')");
	
	/*****************************************************************************************
	* Tour Stops - 12
	*****************************************************************************************/
	// Tour - Church & Meeting St Tour
	// Stop - 12
	// Location - Robert Brewton House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (45, 1, 'Robert Brewton House', " +
			"'The Robert Brewton House was built in 1730 and is the oldest \"single\" house in Charleston.  A single house is only about one room wide" +
			" and has the narrow end of the house towards the street.  As you walk the streets of Charleston you will notice many houses of this style.', " +
			"'71 Church St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Robert_Brewton_house.jpg')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Robert_Brewton_house.jpg')");
	
	// Tour - Church & Meeting St Tour Extended
	// Stop - 12
	// Location - Circular Congregational House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (46, 2, 'Circular Congregational House', " +
			"'The  Circular Congregational House was founded in 1861 by English Congregationalists, Presbyterians, Scots and French Huguenots." +
			" The church building you see now iis of the Romanesque style, one of few in the Charleston area, and was constructed in 1892. " +
			" The congregations first chuch that was built was known as the \"White Meeting House\", which led to the name of Meeting Street.  It was in 1804 that the " +
			" church was redone in its circular structure by native Charleston architect Robert Mills.  The graveyard is the oldest in Charleston containing a " +
			" monument from the 17th century.', " +
			"'150 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'circular_congregational_church.jpg')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'circular_congregational_church.jpg')");
	
	// Tour - Meeting, Broad & Legare St Tour
	// Stop - 12
	// Location - Edward Rutledge House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (47, 3, 'Edward Rutledge House', " +
			"'The Edward Rutledge house was home to South Carolina Governor and signer of the Declaration of Independence, Edward Rutledge." +
			" The house to this day retains its 18th century interior, dating back to the 1760s.  Today it serves as a bed and breakfast.', " +
			"'117 Broad St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Edward_Rutledge_House.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Edward_Rutledge_House.JPG')");
	
	// Tour - Church, Meeting, King, Broad & Legare St
	// Stop - 12
	// Location - Nathaniel Russell House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (48, 4, 'Nathaniel Russell House', " +
			"'This house was home to a Rhode Island merchant, Nathaniel Russell.  Construction on this Adam Style building began in 1809 and cost $80,000. " +
			" Adam Style architecture refers to 18th-century neoclassical style. This was the first style to incorporate integration into the architecture and interior design providing " +
			" a single uniform scheme.'," +
			"'51 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Nathaniel_Russell_House.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Nathaniel_Russell_House.JPG')");
	
	/*****************************************************************************************
	* Tour Stops - 13
	*****************************************************************************************/
	// Tour - Church & Meeting St Tour
	// Stop - 13
	// Location - Thomas Rose House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (49, 1, 'Thomas Rose House', " +
			"'The Thomas Rose house was constructed in the mid 1700''s. The house is a great testament to the colonial architecture of Charleston." +
			" The house is a two and a half story Georgian style brick townhouse, with much of the original Georgian paneling in place.', " +
			"'59 Church St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Thomas_Rose_House.jpg')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Thomas_Rose_House.jpg')");
	
	// Tour - Church & Meeting St Tour Extended
	// Stop - 13
	// Location - Powder Magazine
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (50, 2, 'Powder Magazine', " +
			"'The Powder Magazine is the oldest surviving public building in the former Province of South Carolina.  The building was built in 1713 by colonial " +
			" settlers to store their gunpowder supplies.', " +
			"'79 Cumberland St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Powder_Magazine.jpg')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Powder_Magazine.jpg')");
	
	// Tour - Meeting, Broad & Legare St Tour
	// Stop - 13
	// Location - The Cathedral of St. John the Baptist
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (51, 3, 'The Cathedral of St. John the Baptist', " +
			"'The Cathedral of St. John the Baptist serves as the main church of the Roman Catholic Diocese of Charleston. The original cathedral was constructed in 1854" +
			" but burned down in 1861.  The current building was built on the original foundation and the gothic architecture called for a spire but due to insufficient funds it was not built. " +
			" The steeple and bells were finally constucted in 2010.', " +
			"'120 Broad St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Cathedral_of_St_John_the_Baptist.jpg')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Cathedral_of_St_John_the_Baptist.jpg')");
	
	
	// Tour - Church, Meeting, King, Broad & Legare St
	// Stop - 13
	// Location - The First Baptist Church
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (52, 4, 'The First Baptist Church', " +
			"'The First Baptist Church is the oldest church in the South and is often referred to as the \"Mother Church of Souther Baptists.\" " +
			" It was designed by Robert Mills, who is also known for designing the Washington Monument. The church was originally founded in 1682 in Kittery, Maine," +
			" but due to prosecution relocated shortly after to South Carolina.'," +
			"'61 Church St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'The_First_Baptist_Church.jpg')");
//		    " '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'The_First_Baptist_Church.jpg')");
	
	/*****************************************************************************************
	* Tour Stops - 14
	*****************************************************************************************/
	// Tour - Church & Meeting St Tour
	// Stop - 14
//	// Location - Joseph Verree House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (53, 2, 'Joseph Verree Houe', " +
			 "'The Joseph Verree house was constructed around the year 1767 by Joseph Verree himself, a prosperous Charleston master carpenter." +
			 " The house is of the Georgian style architecture." +
			 " Verree was an active participant of the American Revolution and also a part of the Committee of Correspondence, the goal of the committee was to " +
			 " maintain relationships with Patriot groups in other colonies.' , " +
		     " '47 Church St Charleston, SC 29401', 'tour6/location13.mp3', 'false', 'Joseph_Verree_House.jpg')");
	
	// Tour - Church & Meeting St Tour Extended
	// Stop - 14
	// Location - St. Philips Church
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (54, 2, 'St. Philip''s Church', " +
			"'St. Philip''s Church is an Anglican church built in 1836.  The congregation was established in 1681 making it the oldest in Charleston." +
			" The building is made of stuccoed brick and was designed in the Wren-Gibbs tradition.  The original church was a wooden building that was" +
			" damaged by a hurrican in 1710.  A new building was constructed in 1723 which then burned down in 1835, which is when construction on the new building began and was" +
			" completed in 1836.', " +
			"'146 Church St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'St._Philips_Church.jpg')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'St._Philips_Church.jpg')");

	// Tour - Meeting, Broad & Legare St Tour
	// Stop - 14
	// Location - Charles Graves House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (55, 3, 'Charles Graves House', " +
			"'The Charles Graves house is one of the oldest houses on Tradd Street, built around 1795 for Charles Graves." +
			" The three-story brick house is of the Charleston \"Single house\" plan.  A single house is only about one room wide" +
			" and has the narrow end of the house towards the street.  The house was designed in the Federal Architecture style and is contsructed of brick covered in stucco.', " +
			"'123 Tradd St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Charles_Graves_House.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Charles_Graves_House.JPG')");
	
	// Tour - Church, Meeting, King, Broad & Legare St
	// Stop - 14
	// Location - James Simmons House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (56, 4, 'James Simmons House', " +
			"'The James Simmons House was built in the late 18th Century, likely for lawyer James Simmons. It was home to Robert Gibbes in 1782 and also " +
			" an antebellum write Louisa Cheves. During the time of the Civil war in 1862 General Pierre Beauregard used the house as his " +
			" headquarters.'," +
			"'37 Meeting St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'James_Simmons_House.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'James_Simmons_House.JPG')");

	/*****************************************************************************************
	* Tour Stops - 15
	*****************************************************************************************/
	// Tour - Church & Meeting St Tour
	// Stop - 15
	// Location - Completed
	
	// Tour - Church & Meeting St Tour Extended
	// Stop - 15
	// Location - Dock Street Theatre
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (57, 2, 'Dock Street Theatre', " +
			"'Located in the historic French Quarters section of Charleston is the Dock Street Theatre.  This building was originally built in 1809 as a hotel, it" +
			" was converted to a theatre in 1935. It was the first building in the Thirteen colonies designed to be used as a theatre. In 2010 the theatre re-opened after a 19 million dollar renovation.' , " +
			"'135 Church St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Dock_Street_Theatre.jpg')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Dock_Street_Theatre.jpg')");

	// Tour - Meeting, Broad & Legare St Tour
	// Stop - 15
	// Location - Simmons-Edwards House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (58, 3, 'Simmons-Edwards House', " +
			"'The Simmons-Edwards house was built around 1800 built for planter Francis Simmons and is a Charleston Single hosue." +
			" Much of the appeal of this house is the brick gates and wrought iron, which bear the initials of George Edwards who also owned the house at one point." +
			" The house is referred to as the Pineapple Gates house by locals as the finials on the gate look similar to pineapples, though they were meant to represent pinecones.'," +
			"'14 Legare St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Simmons_Edwards_House.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Simmons_Edwards_House.JPG')");
	
	// Tour - Church, Meeting, King, Broad & Legare St
	// Stop - 15
	// Location - Miles Brewton House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (59, 4, 'Miles Brewton House', " +
			"'The Miles Brewton house was built around the year 1769 for Miles Brewton.	This house is a great example of a double house, which refers to a house" +
			" having four rooms per floor.  The brilliant architectural quality of this house makes it one of the reputable Georgian style houses in the nation." +
			" The house was used as a military headquarters in both the Revolution and Cival war.'," +
			"'27 King St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Miles_Brewton_House.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Miles_Brewton_House.JPG')");
	
	/*****************************************************************************************
	* Tour Stops - 16
	*****************************************************************************************/
	// Tour - Church & Meeting St Tour
	// Stop - 16
	// Location - Completed
	
	// Tour - Church & Meeting St Tour Extended
	// Stop - 16
	// Location - Huguenot Church
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (60, 2, 'Huguenot Church', " +
			"'The Huguenot Church was built in 1844 and is of Gothic Revival architecture style, designed by Edward Brickell White.  It is constucted of stuccoed" +
			" brick and to this day remains unaltered.  The first church that was built on this site was destroyed in an effort to stop a spreading fire, it was replaced" +
			" in 1800 but that church was eventually torn down in order for the present church to be built.', " +
			"'136 Church St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Hugeunot_Church.jpg')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Hugeunot_Church.jpg')");

	// Tour - Meeting, Broad & Legare St Tour
	// Stop - 16
	// Location - William Gibbes House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (61, 3, 'William Gibbes House', " +
			"'The William Gibbes house was built around 1772 for William Gibbes, one of the wealthies merchants in Charleston  The house is double house, featuring four rooms per floor." +
			" The house was remodeled around 1800 in the Adamesque style.', " +
			"'64 S. Battery, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'William_Gibbes_House.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'William_Gibbes_House.JPG')");
	
	// Tour - Church, Meeting, King, Broad & Legare St
	// Stop - 16
	// Location - Colonel John Stuart House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (62, 4, 'Colonel John Stuart House', " +
			"'The Colonel John Stuart House was built in 1772 and is a Georgian style home. Colonel John Stewart was an official of the British Empire in the colony of South Carolina." +
			" He was also the Kings Superintendent of Indian Affairs in the South.  Many of his efforts improved relations with a number of Native American Nations.', " +
			"'27 King St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'colonel_john_stewart_house.jpg')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'colonel_john_stewart_house.jpg')");
	
	/*****************************************************************************************
	* Tour Stops - 17
	*****************************************************************************************/
	// Tour - Church & Meeting St Tour
	// Stop - 17
	// Location - Completed
	
	// Tour - Church & Meeting St Tour Extended
	// Stop - 17
	// Location - Heyward-Washington House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (63, 2, 'Heyward-Washington House', " +
			"'The Heyward-Washington House was built in 1772 for Thomas Heyward Jr., who was one of for South Carolina signers of the Declartion of Independence." +
			" Heyward, an artillery officer in the American Revolution was captured by the British in 1780 and exiled to St. Augustine, Florida.', " +
			"'87 Church St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Heyward_Washington_House.jpg')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Heyward_Washington_House.jpg')");

	// Tour - Meeting, Broad & Legare St Tour
	// Stop - 17
	// Locatin - Completed
	
	// Tour - Church, Meeting, King, Broad & Legare St
	// Stop - 17
	// Location - Gov. John Rutledge House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (64, 4, 'Gov. John Rutledge House', " +
			"' Constuction of the John Rutledge house was completed in 1763 and was home to governor John Rutledge, a signer of the United States" +
			"  Constitution. After the Civil war the U.S. District Court for the District of South Carolina used this building as its meeting grounds.', " +
			"'116 Broad St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'gov_john_rutledge_house_web.jpg')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'gov_john_rutledge_house_web.jpg')");
	
	/*****************************************************************************************
	* Tour Stops - 18
	*****************************************************************************************/
	// Tour - Church & Meeting St Tour
	// Stop - 18
	// Location - Completed
	
	// Tour - Church & Meeting St Tour Extended
	// Stop - 18
	// Location - Robert Brewton House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (65, 2, 'Robert Brewton House', " +
			"'The Robert Brewton House was built in 1730 and is the oldest \"single\" house in Charleston.  A single house is only about one room wide" +
			" and has the narrow end of the house towards the street.  As you walk the streets of Charleston you will notice many houses of this style.', " +
			"'71 Church St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Robert_Brewton_house.jpg')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Robert_Brewton_house.jpg')");
	
	// Tour - Meeting, Broad & Legare St Tour
	// Stop - 18
	// Locatin - Completed
	
	// Tour - Church, Meeting, King, Broad & Legare St
	// Stop - 18
	// Location - Edward Rutledge House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (66, 4, 'Edward Rutledge House', " +
			"'The Edward Rutledge house was home to South Carolina Governor and signer of the Declaration of Independence, Edward Rutledge." +
			" The house to this day retains its 18th century interior, dating back to the 1760s.  Today it serves as a bed and breakfast.', " +
			"'117 Broad St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Edward_Rutledge_House.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Edward_Rutledge_House.JPG')");
	
	/*****************************************************************************************
	* Tour Stops - 19
	*****************************************************************************************/
	// Tour - Church & Meeting St Tour
	// Stop - 19
	// Location - Completed
	
	// Tour - Church & Meeting St Tour Extended
	// Stop - 19
	// Location - Thomas Rose House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (67, 2, 'Thomas Rose House', " +
			"'The Thomas Rose house was constructed in the mid 1700''s. The house is a great testament to the colonial architecture of Charleston." +
			" The house is a two and a half story Georgian style brick townhouse, with much of the original Georgian paneling in place.', " +
			"'59 Church St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Thomas_Rose_House.jpg')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Thomas_Rose_House.jpg')");
	
	// Tour - Meeting, Broad & Legare St Tour
	// Stop - 19
	// Locatin - Completed
	
	// Tour - Church, Meeting, King, Broad & Legare St
	// Stop - 19
	// Location - The Cathedral of St. John the Baptist
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (68, 4, 'The Cathedral of St. John the Baptist', " +
			"'The Cathedral of St. John the Baptist serves as the main church of the Roman Catholic Diocese of Charleston. The original cathedral was constructed in 1854" +
			" but burned down in 1861.  The current building was built on the original foundation and the gothic architecture called for a spire but due to insufficient funds it was not built. " +
			" The steeple and bells were finally constucted in 2010.', " +
			"'120 Broad St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Cathedral_of_St_John_the_Baptist.jpg')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Cathedral_of_St_John_the_Baptist.jpg')");
	
	/*****************************************************************************************
	* Tour Stops - 20
	*****************************************************************************************/
	// Tour - Church & Meeting St Tour
	// Stop - 20
	// Location - Completed
	
	// Tour - Church & Meeting St Tour Extended
	// Stop - 20
	// Location - Joseph Verree House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (69, 2, 'Joseph Verree Houe', " +
				 "'The Joseph Verree house was constructed around the year 1767 by Joseph Verree himself, a prosperous Charleston master carpenter." +
				 " The house is of the Georgian style architecture." +
				 " Verree was an active participant of the American Revolution and also a part of the Committee of Correspondence, the goal of the committee was to " +
				 " maintain relationships with Patriot groups in other colonies.' , " +
			     " '47 Church St Charleston, SC 29401', 'tour6/location13.mp3', 'false', 'Joseph_Verree_House.jpg')");
	
	// Tour - Meeting, Broad & Legare St Tour
	// Stop - 20
	// Locatin - Completed
	
	// Tour - Church, Meeting, King, Broad & Legare St
	// Stop - 20
	// Location - Charles Graves House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (70, 4, 'Charles Graves House', " +
			"'The Charles Graves house is one of the oldest houses on Tradd Street, built around 1795 for Charles Graves." +
			" The three-story brick house is of the Charleston \"Single house\" plan.  A single house is only about one room wide" +
			" and has the narrow end of the house towards the street.  The house was designed in the Federal Architecture style and is contsructed of brick covered in stucco.', " +
			"'123 Tradd St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Charles_Graves_House.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Charles_Graves_House.JPG')");
	
	/*****************************************************************************************
	* Tour Stops - 21
	*****************************************************************************************/
	// Tour - Church & Meeting St Tour
	// Stop - 21
	// Location - Completed
	
	// Tour - Church & Meeting St Tour Extended
	// Stop - 21
	// Location - Completed
	
	// Tour - Meeting, Broad & Legare St Tour
	// Stop - 21
	// Locatin - Completed
	
	// Tour - Church, Meeting, King, Broad & Legare St
	// Stop - 21
	// Location - Simmons-Edwards House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (71, 4, 'Simmons-Edwards House', " +
			"'The Simmons-Edwards house was built around 1800 built for planter Francis Simmons and is a Charleston Single hosue." +
			" Much of the appeal of this house is the brick gates and wrought iron, which bear the initials of George Edwards who also owned the house at one point." +
			" The house is referred to as the Pineapple Gates house by locals as the finials on the gate look similar to pineapples, though they were meant to represent pinecones.'," +
			"'14 Legare St, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'Simmons_Edwards_House.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'Simmons_Edwards_House.JPG')");
	
	/*****************************************************************************************
	* Tour Stops - 22
	*****************************************************************************************/
	// Tour - Church & Meeting St Tour
	// Stop - 22
	// Location - Completed
	
	// Tour - Church & Meeting St Tour Extended
	// Stop - 22
	// Location - Completed
	
	// Tour - Meeting, Broad & Legare St Tour
	// Stop - 22
	// Locatin - Completed
	
	// Tour - Church, Meeting, King, Broad & Legare St
	// Stop - 22
	// Location - William Gibbes House
	tx.executeSql("INSERT INTO location (id, tour_id, name, description, address, audio, location_completed, image_name) VALUES (72, 4, 'William Gibbes House', " +
			"'The William Gibbes house was built around 1772 for William Gibbes, one of the wealthies merchants in Charleston.  The house is double house, featuring four rooms per floor." +
			" The house was remodeled around 1800 in the Adamesque style.', " +
			"'64 S. Battery, Charleston, South Carolina 29401', 'tour6/location12.mp3', 'false', 'William_Gibbes_House.JPG')");
//	" '1378 Cassidy Ct, Mount Pleasant SC 29464', 'tour6/location12.mp3', 'false', 'William_Gibbes_House.JPG')");
				
}