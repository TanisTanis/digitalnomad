const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 4000;
const { typeDefs, resolvers } = require('./gql');


const app = express();
app.use(bodyParser.json());

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
