Transit.Models.Stop = Backbone.RelationalModel.extend({
  relations: [{
    type: Backbone.HasMany,
    key:  'departures',
    relatedModel: 'Departure',
    collectionType: Transit.Collections.Departures,
    reverseRelation: {
      key: 'stop',
    }
  }]
});