//ExampleView Object constructor
var MyDinnerBoxView = function(container, model ) {

	this.confirmDinnerButton = container.find("#confirmDinnerButton");
	this.totalCost = container.find("#myMenuPrice");
	this.dishListView = container.find("#dishListView");
	this.numberOfPersonsSelector = container.find("#numberOfPersons");
	
	this.refreshView = function () {
		this.dishListView.empty();
		
		var starter = model.getDish(model.getSelectedDish('starter'));
		if (starter != null) {
			var selectedStarter = $("<div>");
			selectedStarter.addClass("col-md-6");
			selectedStarter.html(starter.name);
			this.dishListView.append(selectedStarter);
			
			var starterSEK = $("<div>");
			starterSEK.addClass("col-md-6");	
			var starterCost = $("<div>");
			starterCost.addClass("pull-right");
			starterCost.html(model.getDishPrice(starter.ingredients));
			
			starterSEK.append(starterCost);

			this.removeStarter = $("<button>");
			this.removeStarter.attr("type","button");
			this.removeStarter.addClass("btn removeBtn");
			this.removeStarter.attr("id",starter.id);

			var spanStarter = $("<span>");
			spanStarter.addClass("glyphicon glyphicon-remove-circle");
			
			this.removeStarter.append(spanStarter);
			starterCost.append(this.removeStarter);

			this.dishListView.append(starterSEK);

		}
		var main = model.getDish(model.getSelectedDish('main dish'));
		if (main != null) {
			var selectedMain = $("<div>");
			selectedMain.addClass("col-md-6");
			selectedMain.html(main.name);
			this.dishListView.append(selectedMain);
			
			var mainSEK = $("<div>");
			mainSEK.addClass("col-md-6");	
			var mainCost = $("<div>");
			mainCost.addClass("pull-right");
			mainCost.html(model.getDishPrice(main.ingredients));
			
			mainSEK.append(mainCost);
			
			this.removeMain = $("<button>");
			this.removeMain.attr("type","button");
			this.removeMain.addClass("btn removeBtn");
			this.removeMain.attr("id",main.id);

			var spanMain = $("<span>");
			spanMain.addClass("glyphicon glyphicon-remove-circle");
			
			this.removeMain.append(spanMain);
			mainCost.append(this.removeMain);

			this.dishListView.append(mainSEK);
			console.log('main: + ' + this.removeMain);
		}
		var dessert = model.getDish(model.getSelectedDish('dessert'));
		if (dessert != null) {
			var selectedDessert = $("<div>");
			selectedDessert.addClass("col-md-6");
			selectedDessert.html(dessert.name);
			this.dishListView.append(selectedDessert);
			
			var dessertSEK = $("<div>");
			dessertSEK.addClass("col-md-6");	
			var dessertCost = $("<div>");
			dessertCost.addClass("pull-right");
			dessertCost.html(model.getDishPrice(dessert.ingredients));
			
			dessertSEK.append(dessertCost);
			
			this.removeDessert = $("<button>");
			this.removeDessert.attr("type","button");
			this.removeDessert.addClass("btn removeBtn");
			this.removeDessert.attr("id",dessert.id);

			var spanDessert = $("<span>");
			spanDessert.addClass("glyphicon glyphicon-remove-circle");
			
			this.removeDessert.append(spanDessert);
			dessertCost.append(this.removeDessert);

			this.dishListView.append(dessertSEK);
		}
		
		this.totalCost.html(model.getTotalMenuPrice().toFixed(1) + " SEK");
	}
	
	/*****************************************  
	      Observer implementation    
	*****************************************/
	
	//Register an observer to the model
	model.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){
		this.refreshView();
	}
	
	this.refreshView();
}
 
