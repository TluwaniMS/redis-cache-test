const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const {
  deleteUserByIdMutation,
  updateUserByIdMutation,
  createUserMutation
} = require("./graphql-mutations/UserMutation");
const { getAllUsersQuery, getUserByIdQuery } = require("./graphql-queries/UserQuery");

const Query = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: getAllUsersQuery,
    getUserById: getUserByIdQuery
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    deleteUserById: deleteUserByIdMutation,
    updateUserById: updateUserByIdMutation,
    createUser: createUserMutation
  }
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
