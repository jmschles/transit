Transit.Collections.Stops = Backbone.Collection.extend({
  initialize: function(agencyId, routeId, directionId) {
    this.url = "/agencies/" + agencyId + "/routes/" + routeId
    if (typeof directionId != 'undefined') { this.url += ("/directions/" + directionId); };
    this.url += "/stops";
  },
  model: Transit.Models.Stop,
});