NewReader.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "newsIndex",
    "feeds/:id": "newsShow",
    "feeds/:feed_id/entries/:id": "entryShow"
  },

  newsIndex: function(){
    var that = this;
    var feeds = NewReader.Data.feeds
    NewReader.Data.feeds.fetch( {
      success: function() {
        var view = new NewReader.Views.FeedsIndexView({
          feeds: feeds
         });
         that._swapView(view)
      }
    });
  },

  newsShow: function(id){
    var feed = NewReader.Data.feeds.get(id);
    var view = new NewReader.Views.FeedShowView({
      feed: feed
    });
    this._swapView(view);
  },

  _swapView: function(view){
    this._currentView && this._currentView.remove()
    this._currentView = view
    $('div#feeds_content').html(view.render())
  },

  entryShow: function(feed_id, id) {
    var entry = NewReader.Data.feeds.get(feed_id).get('entries').get(id);
    var view = new NewReader.Views.EntryShowView({
      entry: entry
    });
    this._swapView(view);
  }

})