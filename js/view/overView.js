//overView Object constructor
var OverView = function (container,model) {
	
	this.backToEdit = container.find('#backToEdit');
	this.goToFullMenu = container.find('#goToFullMenu');

	
	//function to set the columns 
	var addkolum = function (a,b,c){
		//only one dish selected
		if(b == null && c == null){
			return "col-md-2 col-md-offset-5";
		}
		//all dish selected
		else if(b != null && c != null){
			if(a == model.getDish(model.getSelectedDish('starter'))){
				return "col-md-2 col-md-offset-3";
			}
			else{
				return "col-md-2";
			}
		}
		//two selected
		else{
			if(a == model.getDish(model.getSelectedDish('dessert'))){
				return "col-md-2";
			}
			else if(a == model.getDish(model.getSelectedDish('starter'))){
				return "col-md-2 col-md-offset-4";
			}
			else if(a == model.getDish(model.getSelectedDish('main dish')) && b == null){
				return "col-md-2 col-md-offset-4";
			}
			else if(a == model.getDish(model.getSelectedDish('main dish')) && b != null){
				return "col-md-2";
			}
		}
	}
	
	this.fillOverView = function(){

		//we set the constant text	
		var homeViewH2 = container.find("#homeViewH2");
		homeViewH2.html("<b>My Dinner: " + model.getNumberOfGuests() + " people</b>");

		//getting dish from model
		this.starterDish = model.getDish(model.getSelectedDish('starter'));
		this.mainDish = model.getDish(model.getSelectedDish('main dish'));
		this.dessertDish = model.getDish(model.getSelectedDish('dessert'));
		
		//starter
		if(this.starterDish == null){
			container.find("#starterdiv").hide();
		}
		else{
			container.find("#starterdiv").show();
			container.find("#starterImg").attr('src','../dinnerplanner-html/images/' + this.starterDish.image);
			container.find("#starterName").html(this.starterDish.name);
			container.find('#starterPrice').html(model.getDishPrice(this.starterDish.ingredients) + " SEK");
			var kol = addkolum(this.starterDish,this.mainDish,this.dessertDish);
			container.find("#starterdiv").removeClass().addClass(kol);
		}
		
		//main
		if(this.mainDish == null){
			container.find("#maindishdiv").hide();
		}
		else{
			container.find("#maindishdiv").show();
			container.find("#mainImg").attr('src','../dinnerplanner-html/images/' + this.mainDish.image);
			container.find("#mainName").html(this.mainDish.name);
			container.find('#mainPrice').html(model.getDishPrice(this.mainDish.ingredients) + " SEK");
			var kol = addkolum(this.mainDish,this.starterDish,this.dessertDish);
			container.find("#maindishdiv").removeClass().addClass(kol);
		}
		
		//dessert
		if(this.dessertDish == null){
			container.find("#dessertdiv").hide();
		}
		else{
			container.find("#dessertdiv").show();
			container.find("#dessertImg").attr('src','../dinnerplanner-html/images/' + this.dessertDish.image);
			container.find("#dessertName").html(this.dessertDish.name);
			container.find('#dessertPrice').html(model.getDishPrice(this.dessertDish.ingredients) + " SEK");
			var kol = addkolum(this.dessertDish,this.starterDish,this.mainDish);
			container.find('#dessertdiv').removeClass().addClass(kol);
		}

		//if no dish is selected
		if(this.starterDish == null && this.mainDish == null && this.dessertDish == null){
			container.find('#lefttotaldiv').addClass('col-md-offset-7');
		}
		
		//set total price
		container.find('#totalPrice').html(model.getTotalMenuPrice() + " SEK");
	}
	
	this.fillOverView();
	/*****************************************  
	      Observer implementation    
	*****************************************/
	
	//Register an observer to the model
	model.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){
		this.fillOverView();
	}
}
 
