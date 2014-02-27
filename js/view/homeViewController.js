//HomeViewController Object constructor
var HomeViewController = function(view, model ) {
	
	view.createDinnerButton.click(function() {
		window.changeStage("selection");
	});
	
}
