Transit.Routers.Transit = Backbone.Router.extend({
  routes: {
    "": "index",
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  index: function() {
    var that = this;

    Transit.agenciesColl = new Transit.Collections.Agencies();

    $.when(Transit.agenciesColl.fetch()).done(function () {
      var agenciesView = new Transit.Views.AgenciesIndex({
        agencies: Transit.agenciesColl,
      });

      that.$rootEl.html(agenciesView.render().$el)
    });
  }

});