//ExampleView Object constructor
var HomeView = function (container,model) {
	
	
	//we set the constant text
	
	var homeViewH2 = document.getElementById('homeViewH2');
	homeViewH2.innerHTML = "A home dinner service";
	homeViewP.innerHTML = "Here you will have lots of fun! <br/>Start quickly!";

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
 
