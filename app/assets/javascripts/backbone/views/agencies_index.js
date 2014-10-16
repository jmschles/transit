Transit.Views.AgenciesIndex = Backbone.View.extend({
  template: JST['backbone/templates/agencies/index'],

  events: {
    'click .agency_name': 'showRoutes'
  },

  initialize: function (options) {
    this.agencies = options.agencies;
  },

  render: function () {
    var renderedContent = this.template({
      agencies: this.agencies,
    });

    this.$el.html(renderedContent);
    return this;
  },

  showRoutes: function (event) {
    var that = this;
    var agency_id = event.target.id;

    Transit.routesColl = new Transit.Collections.Routes(agency_id);

    $.when(Transit.routesColl.fetch()).done(function () {
      var routesView = new Transit.Views.RoutesIndex({
        routes: Transit.routesColl,
      });

      $('#routes').html(routesView.render().$el);
    });
  }
});