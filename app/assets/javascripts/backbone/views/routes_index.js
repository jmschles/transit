Transit.Views.RoutesIndex = Backbone.View.extend({
  template: JST['backbone/templates/routes/index'],

  events: {
    'click .route_name': 'showDirectionsOrStops'
  },

  initialize: function (options) {
    this.routes = options.routes;
  },

  render: function () {
    var renderedContent = this.template({
      routes: this.routes,
    });

    this.$el.html(renderedContent);
    return this;
  },

  showDirectionsOrStops: function (event) {
    var route_id = event.target.getAttribute('route_id');
    var route = this.routes.get(route_id);
    var route_directions = route.get('directions');
    if (route_directions.length === 0) {
      this.showStops(route);
    } else {
      this.showDirections(route);
    }
  },

  showDirections: function (route) {
    var agency_id = route.get('agency_id');
    var route_id = route.get('id');
    Transit.directionsColl = new Transit.Collections.Directions(agency_id, route_id);

    $.when(Transit.directionsColl.fetch()).done(function () {
      var directionsView = new Transit.Views.DirectionsIndex({
        directions: Transit.directionsColl,
      });

      $('#directions').html(directionsView.render().$el);
    });
  },

  showStops: function (route) {

  }
});