//ExampleView Object constructor
var DishInfoView = function (container,model) {
	
	//selectedDish hard-coded right now
	var selectedDish = model.getDish(100);
	container.find('#dishName').html(selectedDish.name);
	container.find("#infoImg").attr('src','../dinnerplanner-html/images/' + selectedDish.image);
	container.find("#infoPrep").html(selectedDish.description);


	var ingredientDiv = container.find('#ingredients');

	for (var i = selectedDish.ingredients.length - 1; i >= 0; i--) {
		var ingredient = selectedDish.ingredients[i];

		this.amountDiv = $("<div>");
		this.amountDiv.addClass('col-md-3');
		var quantity = Math.round(ingredient.quantity * model.getNumberOfGuests() * 10)/10;
		this.amountDiv.html(quantity + ' ' + ingredient.unit);

		ingredientDiv.append(this.amountDiv);

		this.nameDiv = $("<div>");
		this.nameDiv.addClass('col-md-5');
		this.nameDiv.html(ingredient.name);

		ingredientDiv.append(this.nameDiv);

		this.SEKdiv = $("<div>");
		this.SEKdiv.addClass('col-md-2');
		this.SEKdiv.html('SEK ');

		ingredientDiv.append(this.SEKdiv);

		this.costDiv = $("<div>");
		this.costDiv.addClass('col-md-2');
		var price = Math.round(ingredient.price * model.getNumberOfGuests());
		this.costDiv.html(price);

		ingredientDiv.append(this.costDiv);
	};

	container.find('#totalCost').html(model.getDishPrice(selectedDish.ingredients));

}
 