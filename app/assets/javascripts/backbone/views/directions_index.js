Transit.Views.DirectionsIndex = Backbone.View.extend({
  template: JST['backbone/templates/directions/index'],

  events: {
    'click .direction_name': 'showStops'
  },

  initialize: function (options) {
    this.directions = options.directions;
    this.agencyId = options.agencyId;
    this.routeId = options.routeId;
  },

  render: function () {
    var renderedContent = this.template({
      directions: this.directions,
      agencyId: this.agencyId,
      routeId: this.routeId,
    });

    this.$el.html(renderedContent);
    return this;
  },

  showStops: function (event) {
    var agencyId = event.target.getAttribute('agency_id');
    var routeId = event.target.getAttribute('route_id');
    var directionId = event.target.getAttribute('direction_id');

    Transit.stopsColl = new Transit.Collections.Stops(agencyId, routeId, directionId);

    $.when(Transit.stopsColl.fetch()).done(function () {
      var stopsView = new Transit.Views.StopsIndex({
        stops: Transit.stopsColl,
        agencyId: agencyId,
        routeId: routeId,
        directionId: directionId,
      });

      $('#stops').html(stopsView.render().$el);
    });
  }
});