//= require_self
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

window.Transit = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {},

  initialize: function() {
    // intialize router
    new Transit.Routers.Transit({
      "$rootEl": $("#content"),
      "$agenciesEl": $("#agencies"),
      "$routesEl": $("#routes"),
      "$directionsEl": $("#directions"),
      "$stopsEl": $("#stops"),
    });

    Backbone.Relational.store.addModelScope(this.Models);

    Dispatcher = _.extend({}, Backbone.Events);
    // new FlashMessage();

    Backbone.history.start();
  },
};

$(document).ready(function() {
  var url = window.location.href;
  Transit.initialize();
});