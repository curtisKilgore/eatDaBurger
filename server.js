const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

// Make instance of the express app
var app = express();
var PORT = process.env.PORT || 3100;

// Serve static content for the app from the "public" directory in the application directory
app.use(express.static('public'));

// parse application
app.use(bodyParser.urlencoded({ extended: true}));

// This sets the default layout for all of the handlebars pages
app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them
const routes = require('./controllers/burgers_controller.js');

// 
app.use(routes);

app.listen(PORT, function() {
    console.log('Server listening on: http://localhost:' + PORT);
});



