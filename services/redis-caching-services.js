const { client } = require("../redis-config");

const storeUsersDataInCache = async (usersData) => {
  await client.set("Users", usersData);
};

const getStoredDataInCache = async () => {
  const users = await client.get("Users");

  return users;
};

const deleteStoredDataInCache = async () => {
  await client.del("Users");
};

module.exports = { storeUsersDataInCache, getStoredDataInCache, deleteStoredDataInCache };
