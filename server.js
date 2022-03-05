const { app } = require("./app");
const { connectToDataBase } = require("./database-config");

const PORT = process.env.PORT | 5000;

app.listen(PORT, () => {
  console.log(`server is running on : http://localhost:${PORT}/api/graphql`);
});

(async () => {
  await connectToDataBase();
})();
