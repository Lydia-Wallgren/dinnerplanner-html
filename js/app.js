$(function() {
	//The global variable so we can access it from other controller and views
	window.stage = "home";
	// Stages: home selection info fullMenu
	
	//We instantiate our model
	var model = new DinnerModel();

	//var dl = new SelectView($("#dishList"),model);
	//var myDinnerBox = new myDinnerBoxView($("#myDinnerBox"),model);
	
	//And create the needed controllers and views
	var mainHeaderView = new MainHeaderView($("#mainHeaderView"), model);
	var mainHeaderViewController = new MainHeaderViewController(mainHeaderView, model);

	var homeView = new HomeView($("#homeView"), model);
   	var homeViewController = new HomeViewController(homeView, model);
	
	var myDinnerBoxView = new MyDinnerBoxView($("#myDinnerBoxView"), model);
	var myDinnerBoxViewController = new MyDinnerBoxViewController(myDinnerBoxView, model);
	
	var dishInfoView = new DishInfoView($("#dishInfoView"), model);
	var dishInfoViewController = new DishInfoViewController(dishInfoView, model);
	
	var fullMenuView = new FullMenuView($("#fullMenuView"), model);
	var fullMenuViewController = new FullMenuViewController(fullMenuView, model);
	
	//var overView = new OverView($("#overView"),model);
	//var overViewController = new OverViewController(overView,model);
	
	window.stageStyleUpdates = [mainHeaderView];
	window.stageVisibilities = [[$("#homeBackground"), ["home"]],
								[$("#homeView"), ["home"]],
								[$("#myDinnerBoxView"), ["selection", "info"]],
								[$("#dishInfoView"), ["info"]],
								[$("#fullMenuView"), ["fullMenu"]]
								];
	
	window.changeStage = function(stage) {
				
		// Change Styles
		for (var i = 0; i < window.stageStyleUpdates.length; ++i) {
			window.stageStyleUpdates[i].updateStyle(stage);
		}
		
		// Update Visibilites
		for (var i = 0; i < window.stageVisibilities.length; ++i) {
			var view = window.stageVisibilities[i][0];
			var visibilities = window.stageVisibilities[i][1];
			
			var visible = false;
			for (var j = 0; j < visibilities.length; ++j) {
				if (visibilities[j] == stage) {
					visible = true;
					break;
				}
			}
			
			if (visible) view.show();
			else view.hide();
		}
		
		window.stage = stage;
	}
});