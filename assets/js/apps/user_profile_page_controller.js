/*
   Author: Mark Sun
   Date: 10/15/16
*/
ApplicationManager.module("CoolApp.UserProfile", function(UserProfile
  , ApplicationManager, Backbone, Marionette, $, _){
    UserProfile.Controller = {
      display: function(){

          var user_profile_model = new UserProfile.Model();

          // Call fetch so that the model makes the data call
          user_profile_model.fetch({
              success: function(data) {
                  var user_profile_view = new UserProfile.Page({
                      model: user_profile_model
                  });

                  ApplicationManager.regions.main.show(user_profile_view);
              }
          })
      }
  }

});
