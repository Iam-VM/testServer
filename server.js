require('dotenv').config({path: __dirname + '/.env'});
const express = require('express');
const graphqlHTTP = require('express-graphql');

//local
const db = require('./db');
const schema = require('./schema/schema');

const app = express();
db.authenticate();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(process.env['PORT'], () => {
    console.log('testServer: Connected to Port - 4000');
});