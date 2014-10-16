Transit.Models.Agency = Backbone.RelationalModel.extend({
  relations: [{
    type: Backbone.HasMany,
    key:  'routes',
    relatedModel: 'Route',
    collectionType: 'Routes',
    reverseRelation: {
      key: 'agency',
    }
  }]
});