const express = require('express')
const { engine } = require('express-handlebars');
const path = require('path')

// Configure server
const app = express()
const port = 3000

// Static File
app.use(express.static(path.join(__dirname, 'public')))

// Handlebars Engine
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Route
const homeRoutes = require('./routes/homeRoutes');
const newRoutes = require('./routes/newRoutes');
app.use('/new', newRoutes);
app.use('/', homeRoutes);

// Server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})