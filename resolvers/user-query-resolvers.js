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
  let users;

  const cache = await getStoredDataInCache();

  if (cache) {
    console.log(`getting data from cache`);
    users = JSON.parse(cache);
  } else {
    console.log(`getting data from database`);
    users = await getAllUsers();
    await storeUsersDataInCache(JSON.stringify(users));
  }

  return users;
};

const deleteUserByIdMutationResolver = async (userId) => {
  await deleteUserById(userId);
  const cache = await getStoredDataInCache();

  cache ? deleteStoredDataInCache() : console.log(`No data has been cached`);

  return `Operation completed successfully.`;
};

const updateUserByIdMutationResolver = async (userId, userInfo) => {
  await updateUserById(userId, userInfo);
  const cache = await getStoredDataInCache();

  cache ? deleteStoredDataInCache() : console.log(`No data has been cached`);

  return `Operation completed successfully.`;
};

const createUserMutationResolver = async (userInfo) => {
  await createUser(userInfo);
  const cache = await getStoredDataInCache();

  cache ? deleteStoredDataInCache() : console.log(`No data has been cached`);

  return `Operation completed successfully.`;
};

module.exports = {
  getAllUsersQueryResolver,
  deleteUserByIdMutationResolver,
  updateUserByIdMutationResolver,
  createUserMutationResolver
};
