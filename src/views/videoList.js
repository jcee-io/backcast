var VideoListView = Backbone.View.extend({
  el: '.list',
  initialize: function() {
    //this.collection.on('sync', this.render, this);
    $('#app').on('click', '.video-list-entry-title', function(event) {
      var myParent = $(event.target).parent();
      var firstChild = myParent[0].childNodes[0];
      var secondChild = myParent[0].childNodes[1];
      
      var player = new VideoPlayerView({model: {
        title: $(firstChild).text(),
        url: $(firstChild).attr('value'),
        description: $(secondChild).text()
      }});
      
      player.render();
    });

  },

  render: function() {
    this.$el.children().detach();
  

    //render the list first before
    $('.list').html(this.template());
    $('.video-list').html('');
      
 
    for (var i = 0; i < this.collection.models.length; i++) {

      var entry = new VideoListEntryView({model: this.collection.models[i]});
      entry.render();

      if (i === 0) {
        entry.renderPlayerInit();
      }
    }

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
