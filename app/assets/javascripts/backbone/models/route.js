Transit.Models.Route = Backbone.RelationalModel.extend({
  relations: [{
    type: Backbone.HasMany,
    key:  'directions',
    relatedModel: 'Direction',
    collectionType: 'Directions',
    reverseRelation: {
      key: 'route',
    }
  }]
});