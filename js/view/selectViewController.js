var SelectViewController = function(view, model){
	
	view.sButton.click(function(){
		var course = $('#courseSelect option:selected').text();
		var filter = $('#searchText').val();
		
		view.refreshView(course, filter);
	});
	
	view.dSelect.change(function(){
		var course = $('#courseSelect option:selected').text();
		view.refreshView(course);

		$('#searchText').val('');
	});
	
	view.dishList.click(function(e){
		model.setFocusedDishId(e.target.id);
		window.changeStage("info");
	});
}

