//MainHeaderView Object constructor
var MainHeaderView = function (container,model) {

	this.container = container;
	
	this.title = container.find("#headerTitle");
	
	this.updateStyle = function(stage) {
		if (stage != "home") {
			$("body").removeClass("homeBackground");			
			container.removeClass("homeHeader");
		}
	}
}
 
