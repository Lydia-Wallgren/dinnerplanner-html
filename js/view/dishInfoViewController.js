//dishInfoViewController Object constructor
var DishInfoViewController = function(view, model ) {
	
	view.confirmButton.click(function(){
		model.addDishToMenu(model.getFocusedDishId());
		
		window.changeStage("selection");
	});
	
	view.backToSelectButton.click(function() {
		window.changeStage("selection");
	});
}
