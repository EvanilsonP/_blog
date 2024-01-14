require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const app = express();
const PORT = 5000 || process.env.PORT;
const connectDB = require('./server/config/db');
// Connecting to database
connectDB();

// In order to pass some data in the search button we use this middleware / Be able to pass data thru forms
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));



// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');      

app.use('/', require('./server/routes/main'));

app.listen(PORT, () => console.log(`Up and running on PORT ${PORT}`)); 