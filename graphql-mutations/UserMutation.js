const { SupportingUserInput } = require("../graphql-models/SupportingUserGQLModel");
const { GraphQLString, GraphQLNonNull } = require("graphql");
const { deleteUserById, updateUserById, createUser } = require("../database-queries/user-database-queries");

const deleteUserByIdMutation = {
  type: GraphQLString,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return deleteUserById(args._id);
  }
};

const updateUserByIdMutation = {
  type: GraphQLString,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLString) },
    userInfo: { type: new GraphQLNonNull(SupportingUserInput) }
  },
  resolve(parent, args) {
    return updateUserById(args._id, args.userInfo);
  }
};

const createUserMutation = {
  type: GraphQLString,
  args: {
    userInfo: { type: new GraphQLNonNull(SupportingUserInput) }
  },
  resolve(parent, args) {
    return createUser(args.userInfo);
  }
};

module.exports = { deleteUserByIdMutation, updateUserByIdMutation, createUserMutation };
