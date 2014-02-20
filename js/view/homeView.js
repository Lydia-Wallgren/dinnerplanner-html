//ExampleView Object constructor
var HomeView = function (container,model) {
	
	
	
	var body = document.body;
	body.style.backgroundImage = 'url(../dinnerplanner-html/images/Food-Image.jpg)';
	body.style.backgroundSize = "100%";

	var homeHeader = document.getElementById('homeHeader');
	homeHeader.style.background = "#FACE78";
	homeHeader.style.opacity = '0.6';
	homeHeader.style.paddingLeft = '5%';

	var homeView = document.getElementById('homeView');
	homeView.style.background = "white";
	homeView.style.opacity = '0.6';
	homeView.style.position = 'absolute';
	homeView.style.top = '25%';
	homeView.style.paddingLeft = '5%';
	homeView.style.paddingBottom = '2%';

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
 
