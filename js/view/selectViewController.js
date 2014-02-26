var SelectViewController = function(view, model){
	view.sButton.click(function(){
		view.dishList.empty();

		//model.setNumberOfGuests(model.getNumberOfGuests() + 1);
		//console.log(model.getNumberOfGuests());
		//var mar = $('#dishList');



		var filter = $('#searchText').val();
		//$('#searchText').val('filter');
		view.refreshView("Filter by course", filter);
	});


}

