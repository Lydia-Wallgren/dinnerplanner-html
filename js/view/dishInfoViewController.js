//ExampleViewController Object constructor
var DishInfoViewController = function(view, model ) {
	
	view.confirmButton.click(function(){
		//should come from select view
		var id = 1;
		model.addDishToMenu(id);
		//console.log(model.getSelectedDish('starter'));
	});
	
	view.backToSelectButton.click(function() {
		window.changeStage("select");
	});

}
