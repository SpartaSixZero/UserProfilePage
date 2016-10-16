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
          //user_profile_model.fetch();

          var user_profile_collection = new UserProfile.Collection({
              model: user_profile_model
          })

          user_profile_collection.fetch({
              success: function(data) {
                    var person = data.models[0].attributes;
                    user_profile_model.set("address", person.address);
                    user_profile_model.set("gender", person.gender);
                    user_profile_model.set("givenname", person["given-name"]);
                    user_profile_model.set("last", person.last);
                    user_profile_model.set("picLocation", person.picLocation);

                    var user_profile_view = new UserProfile.Page({
                        model: user_profile_model
                    });

                    ApplicationManager.regions.main.show(user_profile_view);
              }
          })
      }
    }

});
