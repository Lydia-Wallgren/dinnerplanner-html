// MyDinnerBoxViewController Object constructor
var MyDinnerBoxViewController = function(view, model) {
	
	view.confirmDinnerButton.click(function() {
		window.changeStage("overView");
	});
	
	view.numberOfPersonsSelector.change(function() {
		model.setNumberOfGuests(this.value);
	});
	view.removeStarter.click(function(){
		console.log('starter');
		model.removeDishFromMenu(this.id);
	});
	console.log("controller: " + view.removeMain);
	view.removeMain.click(function(){
		console.log('main');
		model.removeDishFromMenu(this.id);
	});
	view.removeDessert.click(function(){
		model.removeDishFromMenu(this.id);
	});
}
