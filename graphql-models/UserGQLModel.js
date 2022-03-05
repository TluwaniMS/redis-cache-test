const { GraphQLNonNull, GraphQLString, GraphQLObjectType, GraphQLInt } = require("graphql");

const UserModel = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    surname: { type: new GraphQLNonNull(GraphQLString) },
    age: { type: new GraphQLNonNull(GraphQLInt) },
    gender: { type: new GraphQLNonNull(GraphQLString) }
  })
});

module.exports = { UserModel };
