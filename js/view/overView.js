//ExampleView Object constructor
var OverView = function (container,model) {
	
	
	//we set the constant text
	
	var homeViewH2 = document.getElementById('homeViewH2');
	homeViewH2.innerHTML = "<b>My Dinner: " + model.getNumberOfGuests() + " people</b>";

	var starterDish = model.getDish(model.getSelectedDish('starter'));
	document.getElementById('starterImg').src = "../dinnerplanner-html/images/" + starterDish.image;
	document.getElementById('starterName').innerHTML = starterDish.name;
	document.getElementById('starterPrice').innerHTML = model.getDishPrice(starterDish.ingredients) + " SEK";
	
	var mainDish = model.getDish(model.getSelectedDish('main dish'));
	document.getElementById('mainImg').src = "../dinnerplanner-html/images/" + mainDish.image;
	document.getElementById('mainName').innerHTML = mainDish.name;
	document.getElementById('mainPrice').innerHTML = model.getDishPrice(mainDish.ingredients) + " SEK";
	
	var dessert = document.getElementById('dessertdiv');
	dessert.style.display = "none";
	
	document.getElementById('totalPrice').innerHTML = model.getTotalMenuPrice() + " SEK";
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
 
