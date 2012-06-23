// Formula for ingesting feeds and preparing them for the View

$.ingest = function(url, expectedFormat, returnFormat) {

	if(!expectedFormat) expectedFormat = "json";
	if(!returnFormat) 	returnFormat = "json";

	var response = $.ajax({
		type: "GET",
		url: "feeds/sponsorpay.xml",
		dataType: "xml",
		success: function(xml) {
			// do something
		}
	});

	// response = doSomething(response);

	return response;

}