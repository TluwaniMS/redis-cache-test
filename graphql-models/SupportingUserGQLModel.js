const { GraphQLInputObjectType, GraphQLInt, GraphQLString, GraphQLNonNull } = require("graphql");

const SupportingUserInput = new GraphQLInputObjectType({
  name: "UserInputObject",
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    surname: { type: new GraphQLNonNull(GraphQLString) },
    age: { type: new GraphQLNonNull(GraphQLInt) },
    gender: { type: new GraphQLNonNull(GraphQLString) }
  })
});

module.exports = { SupportingUserInput };
