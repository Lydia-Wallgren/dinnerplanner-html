$(function() {
	//The global variable so we can access it from other controller and views
	window.stage = "starter";
	
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"),model);
   	//var exampleViewController = new ExampleViewController(exampleView,model);

	//var homeView = new HomeView($("#homeView"),model);
   	//var homeViewController = new HomeViewController(homeView,model);
	//var overView = new OverView($("#overView"),model);
	var fullMenuView = new FullMenuView($("#fullMenuView"),model);
});