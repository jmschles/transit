Transit.Collections.Routes = Backbone.Collection.extend({
  initialize: function(agency_id) {
    this.agency_id = agency_id;
    this.url = "/agencies/" + agency_id + "/routes";
  },
  model: Transit.Models.Route,
});