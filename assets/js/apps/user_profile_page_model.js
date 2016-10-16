/*
   Author: Mark Sun
   Date: 10/15/16
*/

ApplicationManager.module("CoolApp.UserProfile", function(UserProfile
  , ApplicationManager, Backbone, Marionette, $, _){
    UserProfile.Model = Backbone.Model.extend({})

    UserProfile.Collection = Backbone.Collection.extend({
        url: "http://applicant.pointsource.us/api/testUser/57ffaa4af62a2d8f3c05dcb7",

        parse: function(data) {
            return data.person;
        }
    })

});
