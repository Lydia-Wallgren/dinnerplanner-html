var SelectView = function (container,model) {

	this.dishList = container.find("#dishList");
	this.selectDish = container.find("#selectDish");

	this.sButton = container.find("#searchButton");
	this.dSelect = container.find("#courseSelect")



	this.refreshView = function(type, filter){
		this.dishList.empty();


		if(type == "Filter by course"){
			var dishes = $.merge( $.merge(model.getAllDishes("starter", filter), model.getAllDishes("main dish", filter)) ,model.getAllDishes("dessert", filter));
		}
		if(type == "Starter"){
			var dishes = model.getAllDishes("starter", filter);
		}
		if(type == "Main Course"){
			var dishes = model.getAllDishes("main dish", filter);
		}
		if(type == "Dessert"){
			var dishes = model.getAllDishes("dessert", filter);
		}
		/* Dish html to be created
		<div class= "row text-center">
			<div class= "col-md-3" id="dishPreview">
				<img src="../dinnerplanner-html/images/meatballs.jpg" class="imageStyle" id="dessertImg">
				<p class="under-pic-dl" id="dessertName">Dessert</p>
			</div>
		</div>
		*/ 
		var row = $("<div>");
		row.addClass("row text-center");
		for (i=0; i < dishes.length; i++){
			//dishPreview div
			var dishPreview = $("<div>");
			dishPreview.attr("id","dishPreview");
			dishPreview.attr("class","col-md-3");

			//img tag
			var image = $("<img>");
			image.attr("src", "../dinnerplanner-html/images/"+ dishes[i].image);
			image.attr("class", "imageStyle clickable");
			image.attr("id", dishes[i].id);

			//p tag
			var imageText = $("<p>");
			imageText.html(dishes[i].name);
			imageText.attr("class", "under-pic-dl");

			//appending everything
			dishPreview.append(image);
			dishPreview.append(imageText);
			row.append(dishPreview);
		}
		this.dishList.append(row);
	}

	this.refreshView("Filter by course", "");
	
	model.addObserver(this);
	//This function gets called when there is a change at the model
	this.update = function(arg){
		
	}

}

