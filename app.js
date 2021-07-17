require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./db');

const User = require('./controllers/userController');
const Search = require('./controllers/searchController');
const Pinned = require('./controllers/pinnedController');
const Source = require('./controllers/sourceController');

/*Test Code
app.use('/test', function(req, res) {
    res.send('This is a message from the test endpoint on the server!')
})
*/

sequelize.sync();
// sequelize.sync({force: true})

app.use(express.json());

app.use(require('./middleware/headers'));

app.use('/user', User);

// app.use(require('./middleware/validate-session'));

app.use('/search', Search);

app.use('/pinned', Pinned);

app.use('/source', Source);

app.listen(3000, function() {
    console.log('App is listening on port 3000');
})