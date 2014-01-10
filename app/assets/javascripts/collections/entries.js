NewReader.Collections.Entries = Backbone.Collection.extend({
  initialize: function(models, options){
    this.feed_id = options.feed_id
  },

  model: NewReader.Models.Entry,

  url: function () {
    return "feeds/" + this.feed_id + "/entries";
  }
})