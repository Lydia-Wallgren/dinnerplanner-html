//ExampleView Object constructor
var FullMenuView = function (container,model) {
	
	this.container = container;
	
	//we set the constant text
	
	var homeViewH2 = container.find("#homeViewH2");
	homeViewH2.html("A home dinner service");

	//getting dish from model
	var starterDish = model.getDish(model.getSelectedDish('starter'));
	var mainDish = model.getDish(model.getSelectedDish('main dish'));
	var dessertDish = model.getDish(model.getSelectedDish('dessert'));
	
	//starter
	if(starterDish == null){
		var starterdiv = container.find("#starterdiv");
		starterdiv.hide();
	}
	else{
		document.getElementById('starterImg').src = "../dinnerplanner-html/images/" + starterDish.image;
		document.getElementById('starterName').innerHTML = starterDish.name;
		document.getElementById('startertPrep').innerHTML = starterDish.description;
	}
	
	//main
	if(mainDish == null){
		var maindishdiv = document.getElementById('maindishdiv');
		maindishdiv.style.display = "none";
	}
	else{
		document.getElementById('mainImg').src = "../dinnerplanner-html/images/" + mainDish.image;
		document.getElementById('mainName').innerHTML = mainDish.name;
		document.getElementById('mainPrep').innerHTML = mainDish.description;
	}
	
	//dessert
	if(dessertDish == null){
		var dessertdiv = document.getElementById('dessertdiv');
		dessertdiv.style.display = "none";
	}
	else{
		document.getElementById('dessertImg').src = "../dinnerplanner-html/images/" + dessertDish.image;
		document.getElementById('dessertName').innerHTML = dessertDish.name;
		document.getElementById('dessertPrep').innerHTML = dessertDish.description;
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
 
