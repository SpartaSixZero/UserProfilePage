/*
   Author: Mark Sun
   Date: 10/15/16
*/

ApplicationManager.module("CoolApp.UserProfile", function(UserProfile
  , ApplicationManager, Backbone, Marionette, $, _){
    UserProfile.Page = Marionette.ItemView.extend({
      template: "#user-profile-template",

      ui: {
          profilePicCell: "#profile-pic-cell"
      },

      events: {
      },

      onRender: function(){
          if(this.model.get("gender") === "male")
          {
              this.ui.profilePicCell.css("border-color", "#37d5fe");
          }
          else {
              this.ui.profilePicCell.css("border-color", "#ee4494");
          }
      }
    })

});
