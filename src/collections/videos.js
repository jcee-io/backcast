var Videos = Backbone.Collection.extend({

  model: Video,

  search: function(search = 'chris smoove') {
    search = search.split(' ').join('+');
    
    var results = [];

    
    var url = 'https://www.googleapis.com/youtube/v3/search';
    //url += window.YOUTUBE_API_KEY;
    jQuery.ajaxSetup({ async: false });

    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: url,
      type: 'GET',
      data: {
        'part': 'snippet',
        'maxResults': '10',
        'q': search,
        'key': window.YOUTUBE_API_KEY
      },
      contentType: 'application/json',
      success: function (data) {
        //var newSearch = new Videos(data.items);
        //console.log(data.items.slice());
        results = data.items;
        return data;

      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('SOMETHING WENT WRONG!!!', data);
        return data;
      }
    });
    

    return results;
  }

});
