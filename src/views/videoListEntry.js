var VideoListEntryView = Backbone.View.extend({
  el: '.video-list',

  initialize: function() {
    this.player = new VideoPlayerView({model: this.model.attributes});
  },
  render: function() {
    var html = [
      '<div class="video-list-entry media">',
      '<div class="media-left">',
      '<img class="media-object" src="' + this.model.attributes.thumbnail + '" />',
      '</div>',
      '<div class="media-body">',
      '<div value="' + this.model.attributes.url + '" class="video-list-entry-title">' + this.model.attributes.title + '</div>',
      '<div class="video-list-entry-detail">' + this.model.attributes.description + '</div>',
      '</div>',
      '</div>'
    ].join('');

    $('.video-list').append(html);

    return this;

  },
  renderPlayerInit: function() {

    this.player.render();
  },
  template: templateURL('src/templates/videoListEntry.html')

});

