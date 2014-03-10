App.Router.map(function(){
  this.route("home", { path: "/" });
    this.resource("plants", function () {
      this.resource("plant", { path: ":plant_id" });
  });
});