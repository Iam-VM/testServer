require('dotenv').config({path: __dirname + '/.env'});
const Sequelize = require('sequelize');

const db = {};


db.instance = new Sequelize('testserver', process.env['DB_USER'], process.env['DB_PASSWORD'], {
    host: 'localhost',
    dialect: 'postgres'
});

db.authenticate = () => {
    db.instance.authenticate()
        .then(() => {console.log('testserver: db authentication success...!!!')})
        .catch((err) => {console.log('testserver: db authentication failed with err : ' + err)});
};

module.exports = db;