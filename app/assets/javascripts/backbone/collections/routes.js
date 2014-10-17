Transit.Collections.Routes = Backbone.Collection.extend({
  initialize: function(agencyId) {
    this.agencyId = agencyId;
    this.url = "/agencies/" + agencyId + "/routes";
  },
  model: Transit.Models.Route,
});