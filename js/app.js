$(function() {

	var wall1 = ich.offer_wall({ id: "featured", clss: "featured" });
	var wall2 = ich.offer_wall({ id: "regular" });
	$("body").append(wall1).append(wall2);

	var offers = [
		{
			offer_type: 	1,
			title: 			"Check out Coca-Cola now!",
			offer_amount: 	250,
			currency_name: 	"Gold",
			thumbnail: 		"http://www.theblueowl.com/images/menu/coke_logo_button.png",
			destination: 	"http://www.burstly.com",
			source: 		"Tapjoy"
		},
		{
			offer_type: 	1,
			title: 			"Check out Coca-Cola now!",
			offer_amount: 	250,
			currency_name: 	"Gold",
			thumbnail: 		"http://www.theblueowl.com/images/menu/coke_logo_button.png",
			destination: 	"http://www.burstly.com",
			source: 		"Tapjoy"
		},
		{
			offer_type: 	1,
			title: 			"Check out Coca-Cola now!",
			offer_amount: 	250,
			currency_name: 	"Gold",
			thumbnail: 		"http://www.theblueowl.com/images/menu/coke_logo_button.png",
			destination: 	"http://www.burstly.com",
			source: 		"Tapjoy"
		}
	];

	num = offers.length-1;
	
	for(var i=num;i>=0;i--) {
		wall2.append(ich.offer_item(offers[i]));
	}

});