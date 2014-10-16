Transit.Routers.Transit = Backbone.Router.extend({
  routes: {
    "": "showAgencyList",
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.$agenciesEl = options.$agenciesEl;
    this.$routesEl = options.$routesEl;
  },

  showAgencyList: function() {
    var that = this;

    Transit.agenciesColl = new Transit.Collections.Agencies();

    $.when(Transit.agenciesColl.fetch()).done(function () {
      var agenciesView = new Transit.Views.AgenciesIndex({
        agencies: Transit.agenciesColl,
      });

      that.$agenciesEl.html(agenciesView.render().$el)
    });
  },
});