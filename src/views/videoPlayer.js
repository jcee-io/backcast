var VideoPlayerView = Backbone.View.extend({
  render: function() {

    $('.player').html(this.template());
    $('.embed-responsive-item').attr('src', this.model.url);
    $('.video-player-details').html(`
      <h3>${this.model.title}</h3>
      <div>${this.model.description}</div>
    `);
    return this;
  },

  handleClick: function() {
    this.render();
  },

  template: templateURL('src/templates/videoPlayer.html')

});
