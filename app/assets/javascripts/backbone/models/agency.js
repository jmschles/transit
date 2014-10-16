Transit.Models.Agency = Backbone.RelationalModel.extend({
  relations: [{
    type: Backbone.HasMany,
    idAttribute: 'id',
    key:  'routes',
    relatedModel: 'Route',
    collectionType: 'Routes',
    reverseRelation: {
      key: 'agency',
    }
  }]
});