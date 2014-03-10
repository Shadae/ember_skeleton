App.PlantRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find("plant", params.plant_id)
  }
});