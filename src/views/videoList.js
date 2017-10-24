var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('sync', this.render, this);
    

  },

  render: function() {
    this.$el.children().detach();


    //render the list first before
    this.$el.html(this.template());

    for (var i = 0; i < this.collection.length; i++) {
      var entry = new VideoListEntryView(this.collection[i]);
      entry.render();
    }

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
