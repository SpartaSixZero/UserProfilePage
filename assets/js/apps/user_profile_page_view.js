/*
   Author: Mark Sun
   Date: 10/15/16
*/

ApplicationManager.module("CoolApp.UserProfile", function(UserProfile
  , ApplicationManager, Backbone, Marionette, $, _){
    UserProfile.Page = Marionette.ItemView.extend({
      template: "#user-profile-template",

      templateHelpers: function() {
          return {
              showName: function() {
                  return this.person["given-name"] + " " + this.person["last"]
              },

              showAddress: function() {
                  var address_obj = this.person.address;
                  return address_obj["house-number"] + " " + address_obj["street"] + " " + address_obj["unit-number"]
                  + " " + address_obj["city"] + " " + address_obj["st"] + " " + address_obj["zip"];
              }
          }
      },

      ui: {
      },

      events: {
      },

      onRender: function(){
      }
    })

});
