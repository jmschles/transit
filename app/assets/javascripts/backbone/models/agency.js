Transit.Models.Agency = Backbone.RelationalModel.extend({
  relations: [{
    type: Backbone.HasMany,
    key:  'routes',
    relatedModel: 'Route',
    collectionType: Transit.Collections.Routes,
    reverseRelation: {
      key: 'agency',
    }
  }]
});