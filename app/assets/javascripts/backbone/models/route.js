Transit.Models.Route = Backbone.RelationalModel.extend({
  relations: [{
    type: Backbone.HasMany,
    key:  'directions',
    relatedModel: 'Direction',
    collectionType: Transit.Collections.Directions,
    reverseRelation: {
      key: 'route',
    }
  }]
});