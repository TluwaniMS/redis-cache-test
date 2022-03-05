const express = require("express");
const dotenv = require("dotenv");
const schema = require("./main-graphql-schema");
const { graphqlHTTP } = require("express-graphql");

const app = express();

dotenv.config();
app.use(
  "/api/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

module.exports = { app };
