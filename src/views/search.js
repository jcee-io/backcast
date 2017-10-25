var SearchView = Backbone.View.extend({
  initialize: function() {

  },

  render: function() {
    $('.search').html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
