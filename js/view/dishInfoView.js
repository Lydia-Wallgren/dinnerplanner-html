//dishInfoView Object constructor
var DishInfoView = function (container,model) {
	//setting upp buttons
	this.confirmButton = container.find('#confirmDish');
	this.backToSelectButton= container.find('#backToSelect');
	this.ingredientDiv = container.find('#ingredients');

	//this.
	this.fillDishInfo = function(dish){
		//selectedDish hard-coded right now	
		var selectedDish = model.getDish(dish);
		container.find('#dishName').html(selectedDish.name);
		container.find("#infoImg").attr('src','../dinnerplanner-html/images/' + selectedDish.image);
		container.find("#infoPrep").html(selectedDish.description);
		container.find('#ingrediensForPeople').html('Ingredients for ' + model.getNumberOfGuests() + ' people');


		//var ingredientDiv = container.find('#ingredients');

		for (var i = selectedDish.ingredients.length - 1; i >= 0; i--) {
			var ingredient = selectedDish.ingredients[i];


			var ingRow = $("<div>");
			ingRow.addClass("row myIngRow");
			this.amountDiv = $("<div>");
			this.amountDiv.addClass('col-md-3');
			var quantity = Math.round(ingredient.quantity * model.getNumberOfGuests() * 10)/10;
			this.amountDiv.html(quantity + ' ' + ingredient.unit);

			ingRow.append(this.amountDiv);

			this.nameDiv = $("<div>");
			this.nameDiv.addClass('col-md-5');
			this.nameDiv.html(ingredient.name);

			ingRow.append(this.nameDiv);

			this.SEKdiv = $("<div>");
			this.SEKdiv.addClass('col-md-2');
			this.SEKdiv.html('SEK ');

			ingRow.append(this.SEKdiv);

			this.costDiv = $("<div>");
			this.costDiv.addClass('col-md-2');
			var price = Math.round(ingredient.price * model.getNumberOfGuests());
			this.costDiv.html(price);

			ingRow.append(this.costDiv);

			this.ingredientDiv.append(ingRow);
		};

		container.find('#totalCost').html(model.getDishPrice(selectedDish.ingredients));
	}

	this.fillDishInfo(model.getFocusedDishId());
	//Register an observer to the model
	model.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){
		this.ingredientDiv.empty();
		this.fillDishInfo(model.getFocusedDishId());
	}

}
 