const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

//users created to be able to use the routes in the routes js file
const users = require('./routes/users');

//bodyParser created to be able to use the body-parser
const bodyParser = require('body-parser');

app.get('/', (req, res) => res.send('default route'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//use the users routes for this file. This gets all the routes and controllers working
app.use(users);

app.listen(port, () => {
  console.log('app is listening on:', port)
});
