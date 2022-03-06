const {
  getStoredDataInCache,
  deleteStoredDataInCache,
  storeUsersDataInCache
} = require("../services/redis-caching-services");
const {
  getAllUsers,
  updateUserById,
  deleteUserById,
  createUser
} = require("../database-queries/user-database-queries");

const getAllUsersQueryResolver = async () => {
  const users = await getAllUsers();

  const cache = await getStoredDataInCache();

  console.log(cache);

  return users;
};

const deleteUserByIdMutationResolver = async (userId) => {
  await deleteUserById(userId);

  return `Operation completed successfully.`;
};

const updateUserByIdMutationResolver = async (userId, userInfo) => {
  await updateUserById(userId, userInfo);

  return `Operation completed successfully.`;
};

const createUserMutationResolver = async (userInfo) => {
  await createUser(userInfo);

  return `Operation completed successfully.`;
};

module.exports = {
  getAllUsersQueryResolver,
  deleteUserByIdMutationResolver,
  updateUserByIdMutationResolver,
  createUserMutationResolver
};
