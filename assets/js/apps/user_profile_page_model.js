/*
   Author: Mark Sun
   Date: 10/15/16
*/

ApplicationManager.module("CoolApp.UserProfile", function(UserProfile
  , ApplicationManager, Backbone, Marionette, $, _){
    // Faking our model for now...
    // TODO: Add datacall to grab our data from RESTful API...
    UserProfile.Model = Backbone.Model.extend({
        /*
        defaults: {
            "person": {
                "address": {
                    "house-number": "1488",
                    "street": "Glenwood Avenue",
                    "city": "Raleigh",
                    "st": "North Carolina",
                    "zip": "27608",
                    "unit-number": "5c"
                },
                "gender": "female",
                "given-name": "Elizabeth",
                "last": "Williams",
                "picLocation": "/assets/img/female3.img"
            }
        }
        */
        url: "http://applicant.pointsource.us/api/testUser/57ffaa4af62a2d8f3c05dcb7"

    })

});
