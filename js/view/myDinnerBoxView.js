//ExampleView Object constructor
var myDinnerBoxView = function(container, model ) {

	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	var dinnerBox = container.find("#selectedDishes");
	
	var starter = model.getDish(model.getSelectedDish('starter'));
	if (starter != null) {
		this.selectedStarter = $("<div>");
		this.selectedStarter.addClass("col-md-6");
		this.selectedStarter.html(starter.name);
		dinnerBox.append(this.selectedStarter);
		var starterSEK = $("<div>");
		starterSEK.addClass("col-md-6");	
		this.starterCost = $("<div>");
		this.starterCost.addClass("pull-right");
		this.starterCost.html(model.getDishPrice(starter.ingredients));
		dinnerBox.append(starterSEK);
		starterSEK.append(this.starterCost);
	};
	var main = model.getDish(model.getSelectedDish('main dish'));
	if (main != null) {
		this.selectedMain = $("<div>");
		this.selectedMain.addClass("col-md-6");
		this.selectedMain.html(main.name);
		dinnerBox.append(this.selectedMain);
		var mainSEK = $("<div>");
		mainSEK.addClass("col-md-6");	
		this.mainCost = $("<div>");
		this.mainCost.addClass("pull-right");
		this.mainCost.html(model.getDishPrice(main.ingredients));
		dinnerBox.append(mainSEK);
		mainSEK.append(this.mainCost);
	};
	var dessert = model.getDish(model.getSelectedDish('dessert'));
	if (dessert != null) {
		this.selectedDessert = $("<div>");
		this.selectedDessert.addClass("col-md-6");
		this.selectedDessert.html(dessert.name);
		dinnerBox.append(this.selectedDessert);
		var dessertSEK = $("<div>");
		dessertSEK.addClass("col-md-6");	
		this.dessertCost = $("<div>");
		this.dessertCost.addClass("pull-right");
		this.dessertCost.html(model.getDishPrice(dessert.ingredients));
		dinnerBox.append(dessertSEK);
		dessertSEK.append(this.dessertCost);
	};
	
	this.totalCost = container.find("#totalCost");
	this.totalCost.html('SEK ' + model.getTotalMenuPrice());

	/*this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");*/
	
	//Creating the components dynamically. Here we create the following HTML content:
	//
	//<div class="row">
	//  Total menu price <span id="totalPrice"></span>
	//</div>
	//
	//and add it to the the exampleView 
	
	//div we just store in temporary variable because we won't need it later
	/*var div = $("<div>");
	//we set the constant text
	div.html("Total menu price ");
	//and we add the text-primary class to make it blue
	div.addClass("text-primary");
	//total price we store in object variable (using this) so we can access it later
	this.totalPrice = $("<span>");
	//we set the id of the total price span
	this.totalPrice.attr("id","totalPrice");
	//we add total price span to the div
	div.append(this.totalPrice);
	//finally we add the div to the view container
	container.append(div);
	
	//Set the inital values of the components
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.totalPrice.html(model.getTotalMenuPrice());*/
	
	/*****************************************  
	      Observer implementation    
	*****************************************/
	
	//Register an observer to the model
	model.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){
		//this.selectedDish.html(model.getNumberOfGuests());
		//this.totalPrice.html(model.getTotalMenuPrice());
	}
}
 
