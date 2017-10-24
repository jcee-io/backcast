var VideoListEntryView = Backbone.View.extend({
  model: Video,
  events: {
    'click .video-list-entry-title': 'handleClick'
  },
  initialize: function() {
    
  },
  render: function() {


    this.$el.html(this.template(this.model.attributes));
    return this;

  },
  handleClick: function() {
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
