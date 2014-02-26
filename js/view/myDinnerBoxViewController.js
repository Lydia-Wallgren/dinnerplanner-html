// MyDinnerBoxViewController Object constructor
var MyDinnerBoxViewController = function(view, model) {
	
	view.confirmDinnerButton.click(function() {
		window.changeStage("info");
	});
	
	view.numberOfPersonsSelector.change(function() {
		model.setNumberOfGuests(this.value);
	});
	
}
