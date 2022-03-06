const { GraphQLString, GraphQLList, GraphQLNonNull } = require("graphql");
const { UserModel } = require("../graphql-models/UserGQLModel");
const { getUserById } = require("../database-queries/user-database-queries");
const { getAllUsersQueryResolver } = require("../resolvers/user-query-resolvers");

const getAllUsersQuery = {
  type: new GraphQLList(UserModel),
  resolve(parent, args) {
    return getAllUsersQueryResolver();
  }
};

const getUserByIdQuery = {
  type: UserModel,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return getUserById(args._id);
  }
};

module.exports = { getAllUsersQuery, getUserByIdQuery };
