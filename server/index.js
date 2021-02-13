const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 4000;
const { typeDefs, resolvers } = require('./gql');
const cors = require('cors');

// const corsOptions = {
//   origin: 'http://localhost:4000/',
//   credentials: true
// };

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
