var SelectViewController = function(view, model){
	
	view.sButton.click(function(){
		

		//model.setNumberOfGuests(model.getNumberOfGuests() + 1);
		//console.log(model.getNumberOfGuests());
		//var mar = $('#dishList');


		var course = $('#courseSelect option:selected').text();
		console.log(course);



		var filter = $('#searchText').val();
		//$('#searchText').val('filter');
		view.refreshView(course, filter);
	});
	view.dSelect.change(function(){
		var course = $('#courseSelect option:selected').text();
		console.log(course);
		view.refreshView(course);

		$('#searchText').val('');



	});


}

