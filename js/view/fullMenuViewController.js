//FullMenuViewController Object constructor
var FullMenuViewController = function(view, model ) {
	
		view.backToEditButton.click(function() {
			window.changeStage("selection");
		});
}
