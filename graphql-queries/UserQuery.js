const { GraphQLString, GraphQLList, GraphQLNonNull } = require("graphql");
const { UserModel } = require("../graphql-models/UserGQLModel");
const { getAllUsers, getUserById } = require("../database-queries/user-database-queries");

const getAllUsersQuery = {
  type: new GraphQLList(UserModel),
  resolve(parent, args) {
    return getAllUsers();
  }
};

const getUserByIdQuery = {
  type: UserModel,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return getUserById();
  }
};

module.exports = { getAllUsersQuery, getUserByIdQuery };
