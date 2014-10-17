Transit.Views.DeparturesIndex = Backbone.View.extend({
  template: JST['backbone/templates/departures/index'],

  events: {

  },

  initialize: function (options) {
    this.departures = options.departures;
  },

  render: function () {
    var renderedContent = this.template({
      departures: this.departures,
    });
    this.$el.html(renderedContent);
    return this;
  },
});