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
		container.find('#starterPrice').html(model.getDishPrice(starterDish.ingredients) + " SEK");
		var kol = addkolum(starterDish,mainDish,dessertDish);
		container.find("#starterdiv").addClass(kol);
	}
	
	//main
	if(mainDish == null){
		container.find("#maindishdiv").hide();
	}
	else{
		container.find("#mainImg").attr('src','../dinnerplanner-html/images/' + mainDish.image);
		container.find("#mainName").html(mainDish.name);
		container.find('#mainPrice').html(model.getDishPrice(mainDish.ingredients) + " SEK");
		var kol = addkolum(mainDish,starterDish,dessertDish);
		container.find("#maindishdiv").addClass(kol);
	}
	
	//dessert
	if(dessertDish == null){
		container.find("#dessertdiv").hide();
	}
	else{
		container.find("#dessertImg").attr('src','../dinnerplanner-html/images/' + dessertDish.image);
		container.find("#dessertName").html(dessertDish.name);
		container.find('#dessertPrice').html(model.getDishPrice(dessertDish.ingredients) + " SEK");
		var kol = addkolum(dessertDish,starterDish,mainDish);
		container.find('#dessertdiv').addClass(kol);
	}

	//if no dish is selected
	if(starterDish == null && mainDish == null && dessertDish == null){
		container.find('#lefttotaldiv').addClass('col-md-offset-7');
	}
	
	//set total price
	container.find('#totalPrice').html(model.getTotalMenuPrice() + " SEK");
	
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
 
