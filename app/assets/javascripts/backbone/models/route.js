Transit.Models.Route = Backbone.RelationalModel.extend({
  relations: [{
    type: Backbone.HasMany,
    key:  'directions',
    relatedModel: 'Direction',
    collectionType: Transit.Collections.Directions,
    reverseRelation: {
      key: 'route',
    }
  },
  {
    type: Backbone.HasMany,
    key:  'stops',
    relatedModel: 'Stop',
    collectionType: Transit.Collections.Stops,
    reverseRelation: {
      key: 'directionless_route',
    }
  }]
});