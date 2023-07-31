const RoutesHome = require("./RoutesHome");
const RoutesNew = require("./RoutesNew");

function route(app) {
  app.use("/", RoutesHome);

  app.use("/new", RoutesNew);
}

module.exports = route;
