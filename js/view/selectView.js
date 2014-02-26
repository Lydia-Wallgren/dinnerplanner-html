//ExampleView Object constructor
var SelectView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)


this.dishList = container.find("#dishList");

//this.refreshView = function(type, filter){



	var dishes = model.getAllDishes("starter");
	var dishes2;
	dishes2 = $.merge(dishes, model.getAllDishes("main dish"));
	dishes2 = $.merge(dishes2, model.getAllDishes("dessert"));

	console.log(dishes);
	console.log(dishes.length);
	console.log(dishes[1].name);
	console.log(dishes[1].image);



	/*
	<div class= "row text-center">
		<div class= "col-md-3" id="dishPreview">
			<img src="../dinnerplanner-html/images/meatballs.jpg" class="imageStyle" id="dessertImg">
			<p class="under-pic-dl" id="dessertName">Dessert</p>
		</div>
	</div>
	*/ 
	var row = $("<div>");
	row.addClass("row text-center");
	for (i=0; i < dishes.length; i++){
		this.dishPreview=$("<div>");

		this.dishPreview.attr("id","dishPreview");

		this.dishPreview.attr("class","col-md-3");


		this.image=$("<img>");
		this.image.attr("src", "../dinnerplanner-html/images/"+ dishes[i].image);

		this.imageText=$("<p>");
		this.imageText.attr("class", "under-pic-dl");
		this.imageText.html(dishes[i].name);



		row.append(this.dishPreview);
		this.dishPreview.append(this.image);
		this.dishPreview.append(this.imageText);

	}
	container.append(row);

//}
//	refreshView("Filter by course", "");

/*
	//div we just store in temporary variable because we won't need it later
	var div = $("<div>");
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
	this.totalPrice.html(model.getTotalMenuPrice());

	
	
	/*****************************************  
	      Observer implementation    
	      *****************************************/
	/*
	//Register an observer to the model
	model.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){
		this.numberOfGuests.html(model.getNumberOfGuests());
		this.totalPrice.html(model.getTotalMenuPrice());
	}*/

}

