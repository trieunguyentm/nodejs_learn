const RoutesHome = require("./RoutesHome")
const RoutesNew = require("./RoutesNew")
const RoutesCourses = require("./RoutesCourse")

function route(app) {
  app.use("/", RoutesHome);

  app.use("/new", RoutesNew);

  app.use("/courses", RoutesCourses)
}

module.exports = route;
