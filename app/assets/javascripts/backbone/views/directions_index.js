Transit.Views.DirectionsIndex = Backbone.View.extend({
  template: JST['backbone/templates/directions/index'],

  events: {

  },

  initialize: function (options) {
    this.directions = options.directions;
  },

  render: function () {
    var renderedContent = this.template({
      directions: this.directions,
    });

    this.$el.html(renderedContent);
    return this;
  },
});