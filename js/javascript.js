// Rick's Pizza JavaScript
// Create by Nolan Bisschoff
// 29 October 2018
// 
// There are two functions here, one will run when the user clicks the "Place order button, the other will run
// when the user clicks the "Cancel" button.
// placeOrder() does all the heavy lifting, buy printing the toppings and costs. 
// There is probably a more effecient and better way of doing it, rather than having all work in one function.
// The clearForm function resets the webpage and hides the receipt.


// Place order button clicked
function placeOrder() {
	
	// Calculate Size Price
	var sizeArray = document.getElementsByName("pizza_size");
    var size = "";
	var base_cost = 0;

    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            if (sizeArray[i].value == 'Personal Pizza') {
				size = sizeArray[i].value;
				base_cost = 6;
			} else if (sizeArray[i].value == 'Medium Pizza') {
				size = sizeArray[i].value;
				base_cost = 10;
			} else if (sizeArray[i].value == 'Large Pizza') {
				size = sizeArray[i].value;
				base_cost = 14;
			} else if (sizeArray[i].value == 'Extra Large Pizza') {
				size = sizeArray[i].value;
				base_cost = 16;
			}			
        }
    }

	// Calculate Meat Costs
	var meatArray = document.getElementsByName("meat_selection");
	var meatCost = 0;
	var addedMeat = new Array();
	
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			addedMeat.push(meatArray[j].value);
			meatCost++;
		} 
	}
	
	if (meatCost == 0) {
		addedMeat.push("No added meat");
	}
	
	// one complimentary meat
	if (meatCost > 0) {
		meatCost--;  
	}
	
	// Calculate the Veg costs
	var vegArray = document.getElementsByName("veg_selection");
	var vegCost = 0;
	var addedVeg = new Array();
	
	for (var k = 0; k < vegArray.length; k++) {
		if (vegArray[k].checked) {
			addedVeg.push(vegArray[k].value);
			vegCost++;
		} 
	}
	
	if (vegCost == 0) {
		addedVeg.push("No added veg");
	}
	
	// one free veg
	if (vegCost > 0) {
		vegCost--;  
	}
	
	// Calculate the extra cheese cost
	var cheeseArray = document.getElementsByName("cheese_selection");
	var cheeseCost = 0;
	var addedCheese;
	
	for (var l = 0; l < cheeseArray.length; l++) {
		if (cheeseArray[l].checked) {
            if (cheeseArray[l].value == 'Extra Cheese') {
				cheeseCost = 3;
			} 
			addedCheese = cheeseArray[l].value;
        }
	}
	
	// Get Sauce value
	var sauceArray = document.getElementsByName("pizza_sauce");
	var addedSauce;
	var sauceCost = 0;
	
	for (var m = 0; m < sauceArray.length; m++) {
		if (sauceArray[m].checked) {
			addedSauce = sauceArray[m].value;
        }
	}
	
	// Calculate crust cost
	var crustArray = document.getElementsByName("pizza_crust");
	var crustCost = 0;
	var addedCrust;
	
	for (var n = 0; n < crustArray.length; n++) {
		if (crustArray[n].checked) {
            if (crustArray[n].value == 'Cheese Stuffed Crust') {
				crustCost = 3;
			} 
			addedCrust = crustArray[n].value;
        }
	}
	
	
	// build receipt strings
	var itemsText = itemsText = size + "<br>" + addedMeat + "<br>" + addedVeg + "<br>" + addedCheese + "<br>" + addedSauce + "<br>" + addedCrust;
	var costText = costText = base_cost + "<br>" + meatCost + "<br>" + vegCost + "<br>" + cheeseCost + "<br>" + sauceCost + "<br>" + crustCost;
	var totalPrice = base_cost + meatCost + vegCost + cheeseCost + sauceCost + crustCost;
	
	// display recipt
	document.getElementById("order_placed").style.opacity = "1";
	document.getElementById("items").innerHTML = itemsText;
	document.getElementById("prices").innerHTML = costText;	
	document.getElementById("total_price_amount").innerHTML = "$ " + totalPrice + ".00";	
}

// clear the form and hide receipt
function clearForm() {
	document.getElementById("form_menu").reset();
	document.getElementById("order_placed").style.opacity = "0";
}

