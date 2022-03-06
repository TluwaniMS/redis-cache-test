const { SupportingUserInput } = require("../graphql-models/SupportingUserGQLModel");
const { GraphQLString, GraphQLNonNull } = require("graphql");
const {deleteUserByIdMutationResolver,updateUserByIdMutationResolver,createUserMutationResolver} = require('../resolvers/user-query-resolvers')

const deleteUserByIdMutation = {
  type: GraphQLString,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return deleteUserByIdMutationResolver(args._id);
  }
};

const updateUserByIdMutation = {
  type: GraphQLString,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLString) },
    userInfo: { type: new GraphQLNonNull(SupportingUserInput) }
  },
  resolve(parent, args) {
    return updateUserByIdMutationResolver(args._id, args.userInfo);
  }
};

const createUserMutation = {
  type: GraphQLString,
  args: {
    userInfo: { type: new GraphQLNonNull(SupportingUserInput) }
  },
  resolve(parent, args) {
    return createUserMutationResolver(args.userInfo);
  }
};

module.exports = { deleteUserByIdMutation, updateUserByIdMutation, createUserMutation };
