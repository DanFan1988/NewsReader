window.NewReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Data: {},
  initialize: function() {
    NewReader.Data.current_user = NewReader.Models.User
    NewReader.Data.feeds = new NewReader.Collections.Feeds;
    NewReader.Data.feeds.fetch({success: function () {
      new NewReader.Routers.Router();
      Backbone.history.start();
    }});
  }
};

$(document).ready(function(){
  NewReader.initialize();
});
