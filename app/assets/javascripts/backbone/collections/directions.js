Transit.Collections.Directions = Backbone.Collection.extend({
  initialize: function(agency_id, route_id) {
    this.route_id = route_id;
    this.url = "/agencies/" + agency_id + "/routes/" + route_id + "/directions";
  },
  model: Transit.Models.Direction,
});