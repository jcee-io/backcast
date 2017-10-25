//api key AIzaSyB36XgCWiWOMw65FDn-mjJcj8RcXwYERwM

var AppView = Backbone.View.extend({
  el: '#app',
  events: {
    'click #submit' : 'handleClick'
  }, 
  initialize: function() {
    
    //exampleVideoData: an array of objects
    //everything is now a video object
    //var videos = window.exampleVideoData.map(element => new Video(element));
    //collection: basically an list of videos
    this.initSearch = new Videos().search('colt steele');

    this.videos = new Videos(this.initSearch); 
    //we want to view the collection, our way of accessing the collection
  
    this.list = new VideoListView({collection: this.videos});

    this.search = new SearchView();

    this.render();
    this.list.render();
    this.search.render();
    //console.log(this.videos.search());
    
  
  },
  
  handleClick: function() {
    var result = $('#search').val();
    var searched = new Videos().search(result);

    var newVideos = new Videos(searched);
  
    new VideoListView({collection: newVideos}).render();
  },
  render: function() {

    //this.list.render();

    this.$el.html(this.template());
    return this;
  },
  template: templateURL('src/templates/app.html')

});
