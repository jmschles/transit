Transit.Views.AgenciesIndex = Backbone.View.extend({
  template: JST['backbone/templates/agencies/index'],

  events: {

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
});