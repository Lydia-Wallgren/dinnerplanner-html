//ExampleViewController Object constructor
var OverViewController = function(view, model ) {
	
	view.goToFullMenu.click(function() {
		window.changeStage("fullMenu");
	});

	view.backToEdit.click(function() {
		window.changeStage("select");
	});

}
