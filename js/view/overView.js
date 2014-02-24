//ExampleView Object constructor
var OverView = function (container,model) {
	
	//function to set the columns 
	var addkolum = function (a,b,c){
		//only one dish selected
		if(b == null && c == null){
			return "col-md-2 col-md-offset-5";
		}
		//all dish selected
		else if(b != null && c != null){
			if(a == starterDish){
				return "col-md-2 col-md-offset-3";
			}
			else{
				return "col-md-2";
			}
		}
		//two selected
		else{
			if(a == dessertDish){
				return "col-md-2";
			}
			else if(a == starterDish){
				return "col-md-2 col-md-offset-4";
			}
			else if(a == mainDish && b == null){
				return "col-md-2 col-md-offset-4";
			}
			else if(a == mainDish && b != null){
				return "col-md-2";
			}
		}
	}
	
	//we set the constant text	
	var homeViewH2 = document.getElementById('homeViewH2');
	homeViewH2.innerHTML = "<b>My Dinner: " + model.getNumberOfGuests() + " people</b>";

	//getting dish from model
	var starterDish = model.getDish(model.getSelectedDish('starter'));
	var mainDish = model.getDish(model.getSelectedDish('main dish'));
	var dessertDish = model.getDish(model.getSelectedDish('dessert'));
	
	//starter
	if(starterDish == null){
		var starterdiv = document.getElementById('starterdiv');
		starterdiv.style.display = "none";
	}
	else{
		document.getElementById('starterImg').src = "../dinnerplanner-html/images/" + starterDish.image;
		document.getElementById('starterName').innerHTML = starterDish.name;
		document.getElementById('starterPrice').innerHTML = model.getDishPrice(starterDish.ingredients) + " SEK";
		var kol = addkolum(starterDish,mainDish,dessertDish);
		document.getElementById('starterdiv').className = kol;
	}
	
	//main
	if(mainDish == null){
		var maindishdiv = document.getElementById('maindishdiv');
		maindishdiv.style.display = "none";
	}
	else{
		document.getElementById('mainImg').src = "../dinnerplanner-html/images/" + mainDish.image;
		document.getElementById('mainName').innerHTML = mainDish.name;
		document.getElementById('mainPrice').innerHTML = model.getDishPrice(mainDish.ingredients) + " SEK";
		var kol = addkolum(mainDish,starterDish,dessertDish);
		document.getElementById('maindishdiv').className = kol;
	}
	
	//dessert
	if(dessertDish == null){
		var dessertdiv = document.getElementById('dessertdiv');
		dessertdiv.style.display = "none";
	}
	else{
		document.getElementById('dessertImg').src = "../dinnerplanner-html/images/" + dessertDish.image;
		document.getElementById('dessertName').innerHTML = dessertDish.name;
		document.getElementById('dessertPrice').innerHTML = model.getDishPrice(dessertDish.ingredients) + " SEK";
		var kol = addkolum(dessertDish,starterDish,mainDish);
		document.getElementById('dessertdiv').className = kol;
	}

	//if no dish is selected
	if(starterDish == null && mainDish == null && dessertDish == null){
		document.getElementById('lefttotaldiv').className = 'col-md-offset-7';
	}
	
	//set total price
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
 
