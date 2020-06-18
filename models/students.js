const Sequelize = require('sequelize');
const db = require('../db');

const students = db.instance.define('student', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    score: {
        type: Sequelize.INTEGER
    }
});

module.exports = students;