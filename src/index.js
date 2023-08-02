const express = require("express");
const methodOverride = require('method-override')
const { engine } = require("express-handlebars");
const path = require("path");

// Configure server
const app = express();
const port = 3000;

// Sử dụng middleware để xử lý dữ liệu form
app.use(express.urlencoded({ extended: true }));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

// Connect Database
const db = require('./config/db')
db.connect();

// Static File
app.use(express.static(path.join(__dirname, "public")));

// Handlebars Engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "main",
    helpers: {
      sum: (a, b) => a + b,
    }
  }),
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Route
const route = require("./routes/index");
route(app);

// Server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
