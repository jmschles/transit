Transit.Collections.Departures = Backbone.Collection.extend({
  initialize: function(agencyId, routeId, stopId, directionId) {
    this.url = "/agencies/" + agencyId + "/routes/" + routeId
    if (typeof directionId != 'undefined' && directionId.length !== 0) {
      this.url += ("/directions/" + directionId);
    }
    this.url += ("/stops/" + stopId);
    this.url += "/departures";
  },
  model: Transit.Models.Departure,
});