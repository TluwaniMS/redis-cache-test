const { GraphQLObjectType, GraphQLSchema } = require("graphql");

const Query = new GraphQLObjectType({
  name: "RootQuery",
  fields: {}
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {}
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
