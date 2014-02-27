// MyDinnerBoxViewController Object constructor
var MyDinnerBoxViewController = function(view, model) {
	
	view.confirmDinnerButton.click(function() {
		window.changeStage("overView");
	});
	
	view.numberOfPersonsSelector.change(function() {
		model.setNumberOfGuests(this.value);
	});
	
	view.dishListView.click(function(e){
		if (e.target.id != '') model.removeDishFromMenu(e.target.id);
	});
}
