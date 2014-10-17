Transit.Collections.Directions = Backbone.Collection.extend({
  initialize: function(agencyId, routeId) {
    this.routeId = routeId;
    this.url = "/agencies/" + agencyId + "/routes/" + routeId + "/directions";
  },
  model: Transit.Models.Direction,
});