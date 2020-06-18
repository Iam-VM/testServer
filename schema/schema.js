const graphql = require('graphql');
const models = require('../models/models');

const {GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt
} = graphql;

const StudentType = new GraphQLObjectType({
    name: 'student',
    fields: () => ({
        name: {type: GraphQLString},
        email: {type: GraphQLInt},
        score: {type: GraphQLInt}
    })
});

const RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        student: {
            type: StudentType,
            args: {id : {type: GraphQLInt}},
            async resolve(parent, args){
                const fetchedArray = models.students.findAll({
                    where: {id: args.id}
                })
                return fetchedArray[0].dataValues;
            }
        }
    }
});

module.exports = new GraphQLSchema({query: RootQueryType});