var SelectView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)


	this.dishList = container.find("#dishList");
	this.selectDish = container.find("#selectDish");

	this.sButton = container.find("#searchButton");



	this.refreshView = function(type, filter){


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
		/*
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
			this.dishPreview=$("<div>");
			this.dishPreview.attr("id","dishPreview");
			this.dishPreview.attr("class","col-md-3");

			//img tag
			this.image=$("<img>");
			this.image.attr("src", "../dinnerplanner-html/images/"+ dishes[i].image);
			this.image.attr("class", "imageStyle");

			//p tag
			this.imageText=$("<p>");
			this.imageText.html(dishes[i].name);
			this.imageText.attr("class", "under-pic-dl");

			//appending everything
			row.append(this.dishPreview);
			this.dishPreview.append(this.image);
			this.dishPreview.append(this.imageText);

		}
		this.dishList.append(row);

		model.addObserver(this);


	}

	//this.refreshView("Filter by course", "");


}

