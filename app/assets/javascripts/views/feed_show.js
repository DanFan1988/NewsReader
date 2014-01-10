NewReader.Views.FeedShowView = Backbone.View.extend({
  initialize: function(options) {
    this.feed = options.feed;
    this.listenTo(this.feed.get('entries'), 'add remove change reset', this.render);
  },

  events: {
    "click button.refresh": "refresh"
  },

  template: JST['feed/feed_show'],

  render: function() {
    var renderedContent = this.template({
      feed: this.feed
    })
    this.$el.html(renderedContent);

    return this.$el;
  },

  refresh: function() {
    this.feed.get('entries').fetch();
  }
})
