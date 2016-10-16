/*
  Author: Mark Sun
  Date: 10/15/16
*/

var ApplicationManager = new Marionette.Application();

ApplicationManager.on("before:start", function(){
    var RegionContainer = Marionette.LayoutView.extend({
    el: "#app-container",

    regions: {
      main: "#main-region"
    }
  });

  ApplicationManager.regions = new RegionContainer();
})

ApplicationManager.navigate = function(route,  options){
  options || (options = {});
  Backbone.history.navigate(route, options);
};

ApplicationManager.getCurrentRoute = function(){
  return Backbone.history.fragment
};


ApplicationManager.on("start", function(){

  if (Backbone.history){
    Backbone.history.start();
  }

  if(this.getCurrentRoute() === ""){
    Backbone.history.navigate("userProfile");
    ApplicationManager.CoolApp.UserProfile.Controller.display();
  }
})
