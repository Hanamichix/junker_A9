/*
 * Make an AJAX call to retrieve project details and add it in
 */

function addItemDetails(id) {
	// Prevent following the link
//	e.preventDefault();

	// Get the div ID, e.g., "project3"
	console.log($(this).closest('.matches'));
	var itemID = id;
	console.log(itemID);
	// get rid of 'project' from the front of the id 'project3'

	console.log("User clicked on item " + itemID);
	$.get("/match/" + itemID, callBack);
}

/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 */
function callBack(result){
	console.log(result);
	var itemID = result['itemid'];
	console.log(itemID);
	var itemHTML = '<a href = "#" class = "thumbnail">' + '<img src= "' + result['imageURL'] + '" class = "detailsImage">' + 
	'<p>' + 'name:  ' + result['name'] + '</p>' +
	'<p>' + 'ownername:  ' + result['ownername'] + '</p>' +
	'<p>' + 'bio:  ' + result['bio'] + '</p>' +
	'<p>' + 'email:  ' + result['email'] + '</p>' +
	'<p>' + 'phone:  ' + result['phone'] + '</p>' +
	'<p>' + 'facebook:  ' + result['facebook'] + '</p>' +
	'<p>' + 'description:  ' + result['description'] + '</p></a>';
	$("#" + itemID + " .details").html(itemHTML);
}