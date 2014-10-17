Transit.Models.Direction = Backbone.RelationalModel.extend({
  relations: [{
    type: Backbone.HasMany,
    key:  'stops',
    relatedModel: 'Stop',
    collectionType: Transit.Collections.Stops,
    reverseRelation: {
      key: 'direction',
    }
  }]
})