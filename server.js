const { app } = require("./app");
const { getAllUsers } = require("./database-queries/user-database-queries");
const { createSampleUsers } = require("./main-migration-script");
const { connectToDataBase } = require("./database-config");
const { client } = require("./redis-config");

const PORT = process.env.PORT | 5000;

app.listen(PORT, () => {
  console.log(`server is running on : http://localhost:${PORT}/api/graphql`);
});

(async () => {
  await connectToDataBase();
  await client.connect();
  const users = await getAllUsers();

  users.length === 0 ? await createSampleUsers() : console.log(`database has already been populated`);
})();
