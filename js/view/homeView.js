//ExampleView Object constructor
var HomeView = function (container,model) {
	
	this.container = container;

	//we set the constant text
	
	var homeViewH2 = container.find("#homeViewH2");
	homeViewH2.html("A home dinner service");
	var homeViewP = container.find("#homeViewP");
	homeViewP.html("Here you will have lots of fun! <br/>Start quickly!");

	//document.getElementById('homeBody').className += " homeBody";
	
	this.createDinnerButton = container.find("#createDinnerButton");

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
 
