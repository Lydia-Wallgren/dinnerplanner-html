//ExampleView Object constructor
var FullMenuView = function (container,model) {
	
	this.container = container;
	this.backToEditButton = container.find("#backToEditButton");
	
	//we set the constant text
	var homeViewH2 = container.find("#homeViewH2");
	homeViewH2.html("<b>My Dinner: " + model.getNumberOfGuests() + " people</b>");

	//getting dish from model
	var starterDish = model.getDish(model.getSelectedDish('starter'));
	var mainDish = model.getDish(model.getSelectedDish('main dish'));
	var dessertDish = model.getDish(model.getSelectedDish('dessert'));
	
	//starter
	if(starterDish == null){
		container.find("#starterdiv").hide();
	}
	else{
		container.find("#starterImg").attr('src','../dinnerplanner-html/images/' + starterDish.image);
		container.find("#starterName").html(starterDish.name);
		container.find("#startertPrep").html(starterDish.description);
	}
	
	//main
	if(mainDish == null){
		container.find("#maindishdiv").hide();
	}
	else{
		container.find("#mainImg").attr('src','../dinnerplanner-html/images/' + mainDish.image);
		container.find("#mainName").html(mainDish.name);
		container.find("#mainPrep").html(mainDish.description);
	}
	
	//dessert
	if(dessertDish == null){
		container.find("#dessertdiv").hide();
	}
	else{
		container.find("#dessertImg").attr('src','../dinnerplanner-html/images/' + dessertDish.image);
		container.find("#dessertName").html(dessertDish.name);
		container.find("#dessertPrep").html(dessertDish.description);
	}
	
	/*****************************************  
	      Observer implementation    
	*****************************************/
	
	//Register an observer to the model
	model.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){
		this.numberOfGuests.html(model.getNumberOfGuests());
		this.totalPrice.html(model.getTotalMenuPrice());
	}
}
 
