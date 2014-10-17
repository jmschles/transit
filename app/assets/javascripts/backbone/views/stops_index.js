Transit.Views.StopsIndex = Backbone.View.extend({
  template: JST['backbone/templates/stops/index'],

  events: {
    'click .stop_name': 'showDepartures'
  },

  initialize: function (options) {
    this.stops = options.stops;
    this.agencyId = options.agencyId;
    this.routeId = options.routeId;
    this.directionId = options.directionId;
  },

  render: function () {
    var renderedContent = this.template({
      stops: this.stops,
      agencyId: this.agencyId,
      routeId: this.routeId,
      directionId: this.directionId,
    });

    this.$el.html(renderedContent);
    return this;
  },

  showDepartures: function (event) {
    var stopId = event.target.getAttribute('stop_id');
    var agencyId = event.target.getAttribute('agency_id');
    var routeId = event.target.getAttribute('route_id');
    var directionId = event.target.getAttribute('direction_id');

    Transit.departuresColl = new Transit.Collections.Departures(agencyId, routeId, stopId, directionId);

    $.when(Transit.departuresColl.fetch()).done(function () {
      var departuresView = new Transit.Views.DeparturesIndex({
        departures: Transit.departuresColl,
        stops: stopId,
        agencyId: agencyId,
        routeId: routeId,
        directionId: directionId,
      });

      $('#departures').html(departuresView.render().$el);
    });
  }
});