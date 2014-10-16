Transit.Views.RoutesIndex = Backbone.View.extend({
  template: JST['backbone/templates/routes/index'],

  events: {

  },

  initialize: function (options) {
    this.routes = options.routes;
  },

  render: function () {
    var renderedContent = this.template({
      routes: this.routes,
    });

    this.$el.html(renderedContent);
    return this;
  },
});