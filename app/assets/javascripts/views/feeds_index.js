NewReader.Views.FeedsIndexView = Backbone.View.extend({
  initialize: function(options) {
    this.feeds = options.feeds
  },

  events: {
    "click a.show_feed": "redirect"
  },

  template: JST['feed/feeds_index'],

  render: function() {
    var renderedContent = this.template({
      feeds: this.feeds
    })
    this.$el.html(renderedContent);

    return this.$el;
  }
})