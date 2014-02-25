//ExampleView Object constructor
var DishInfoView = function (container,model) {
	
	//selectedDish hard-coded right now
	var selectedDish = model.getDish(100);
	container.find('#dishName').html(selectedDish.name);
	container.find("#infoImg").attr('src','../dinnerplanner-html/images/' + selectedDish.image);
	container.find("#infoPrep").html(selectedDish.description);
}
 
