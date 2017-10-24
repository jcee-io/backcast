var AppView = Backbone.View.extend({

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.list = new VideoListView({collection: this.videos});
    this.player = new VideoPlayerView();
    
    this.list.render();
    this.player.render();
    this.render();

  
  },


  render: function() {

    //this.list.render();

    this.$el.html(this.template());
    return this;
  },
  handleClick: function() {
    this.player.render();
  },
  template: templateURL('src/templates/app.html')

});
