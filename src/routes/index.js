const RoutesHome = require("./RoutesHome")
const RoutesCourses = require("./RoutesCourse")


function route(app) {
  app.use("/", RoutesHome)

  app.use("/courses", RoutesCourses)
}

module.exports = route;
