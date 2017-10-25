var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    this.set('title', video.snippet.title);
    this.set('description', video.snippet.description);
    this.set('thumbnail', video.snippet.thumbnails.default.url);
    this.set('url', 'https://www.youtube.com/embed/' + video.id.videoId);
  },

  select: function() {
    this.trigger('select', this);
  }

});

