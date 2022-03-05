const { Users } = require("./sample-data/users-sample-data");
const { createMultipleUsers } = require("./database-queries/user-database-queries");

const createSampleUsers = async () => {
  await createMultipleUsers(Users);

  console.log(`database populated successfully.`);
};

module.exports = { createSampleUsers };
