Transit.Views.RoutesIndex = Backbone.View.extend({
  template: JST['backbone/templates/routes/index'],

  events: {
    'click .route_name': 'showDirectionsOrStops'
  },

  initialize: function (options) {
    this.routes = options.routes;
    this.agencyId = options.agencyId;
  },

  render: function () {
    var renderedContent = this.template({
      routes: this.routes,
      agencyId: this.agencyIdd,
    });

    this.$el.html(renderedContent);
    return this;
  },

  showDirectionsOrStops: function (event) {
    var routeId = event.target.getAttribute('route_id');
    var route = this.routes.get(routeId);
    var route_directions = route.get('directions');
    if (route_directions.length === 0) {
      this.showStops(route);
    } else {
      this.showDirections(route);
    }
  },

  showDirections: function (route) {
    var agencyId = route.get('agency_id');
    var routeId = route.get('id');
    Transit.directionsColl = new Transit.Collections.Directions(agencyId, routeId);

    $.when(Transit.directionsColl.fetch()).done(function () {
      var directionsView = new Transit.Views.DirectionsIndex({
        directions: Transit.directionsColl,
        agencyId: agencyId,
        routeId: routeId,
      });

      $('#stops').html('');
      $('#directions').html(directionsView.render().$el);
    });
  },

  showStops: function (route) {
    var agencyId = route.get('agency_id');
    var routeId = route.get('id');

    Transit.stopsColl = new Transit.Collections.Stops(agencyId, routeId);

    $.when(Transit.stopsColl.fetch()).done(function () {
      var stopsView = new Transit.Views.StopsIndex({
        stops: Transit.stopsColl,
        agencyId: agencyId,
        routeId: routeId,
      });

      $('#stops').html(stopsView.render().$el);
    });
  }
});