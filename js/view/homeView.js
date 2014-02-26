//ExampleView Object constructor
var HomeView = function (container,model) {
	
	this.container = container;

	//we set the constant text
	
	var homeViewH2 = container.find("#homeViewH2");
	homeViewH2.html("A home dinner service");
	var homeViewP = container.find("#homeViewP");
	homeViewP.html("Here you will have lots of fun! <br/>Start quickly!");
	
	this.createDinnerButton = container.find("#createDinnerButton");
}
 
