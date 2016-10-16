/*
   Author: Mark Sun
   Date: 10/15/16
*/
ApplicationManager.module("CoolApp.UserProfile", function(UserProfile
  , ApplicationManager, Backbone, Marionette, $, _){
    UserProfile.Controller = {
      display: function(){

          // Create model here and pass it to the ItemView
          var user_profile_model = new UserProfile.Model();
          user_profile_model.fetch(); 
          var user_profile_view = new UserProfile.Page({
              model: user_profile_model
          });
          ApplicationManager.regions.main.show(user_profile_view);
      }
    }

});
