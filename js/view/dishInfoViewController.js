//ExampleViewController Object constructor
var DishInfoViewController = function(view, model ) {
	
	view.confirmButton.click(function(){
		//should come from select view
		model.addDishToMenu(model.getFocusedDishId());
		//console.log(model.getSelectedDish('starter'));
		
		window.changeStage("fullMenu");
	});
	
	view.backToSelectButton.click(function() {
		window.changeStage("selection");
	});

}
