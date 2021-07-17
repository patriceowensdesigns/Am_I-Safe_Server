const Sequelize = require('sequelize');
const sequelize = new Sequelize('Am-I-Safe-Server', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then (
    function() {
        console.log('Connected to Am-I-Safe-Server postgres database');
    },
    function(err){
        console.log(err);
    }
);

User = sequelize.import('./models/user');
Search = sequelize.import('./models/search');
Pinned = sequelize.import('./models/pinned');


// User.hasMany(Search);
// Search.belongsTo(User);

User.hasOne(Pinned);
Pinned.belongsTo(User);





module.exports = sequelize;