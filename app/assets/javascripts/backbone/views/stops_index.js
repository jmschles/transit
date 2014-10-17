Transit.Views.StopsIndex = Backbone.View.extend({
  template: JST['backbone/templates/stops/index'],

  events: {

  },

  initialize: function (options) {
    this.stops = options.stops;
    this.agencyId = options.agencyId;
    this.routeId = options.routeId;
  },

  render: function () {
    var renderedContent = this.template({
      stops: this.stops,
      agencyId: this.agencyId,
      routeId: this.routeId
    });

    this.$el.html(renderedContent);
    return this;
  },
});