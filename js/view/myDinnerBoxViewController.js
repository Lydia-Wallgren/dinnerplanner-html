// MyDinnerBoxViewController Object constructor
var MyDinnerBoxViewController = function(view, model) {
	
	view.confirmDinnerButton.click(function() {
		window.changeStage("fullMenu");
	});
	
}
