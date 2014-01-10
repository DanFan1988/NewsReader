NewReader.Models.Feed = Backbone.Model.extend({
  urlRoot: "/feeds",

  parse: function(data) {
    data.entries = new NewReader.Collections.Entries(data.entries, {feed_id: data.id });
    return data;
  }
})
