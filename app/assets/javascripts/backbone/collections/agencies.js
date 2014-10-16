Transit.Collections.Agencies = Backbone.Collection.extend({
  model: Transit.Models.Agency,
  url: "/agencies",
  // comparator: function(agency) {
  //   return agency.get('name');
  // }

});