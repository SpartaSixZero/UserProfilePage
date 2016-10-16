/*
   Author: Mark Sun
   Date: 10/15/16
*/
ApplicationManager.module("CoolApp", function(CoolApp, ApplicationManager,
    Backbone, Marionette, $, _) {
        CoolApp.Router = Marionette.AppRouter.extend({
            appRoutes: {
                "userProfile": "displayUserProfile"
            }
        })

        var API = {
            displayUserProfile: function(){
                CoolApp.UserProfile.Controller.display();
            }
        };

        CoolApp.on("start", function(){
            new CoolApp.Router({
                controller: API
            })
        })

});
