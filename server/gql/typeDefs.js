const { gql } = require('apollo-server-express');

const { GraphQLScalarType, Kind } = require('graphql');

const typeDefs = gql`
  scalar Date

  type Query {
    hello: String!
    jobs: [Job]!
    user(email: String!): User!
    company(companyEmail: String!): Company!
    job(name: String!): [Job]!
    singleJob(id: String): [Job]!
    searchedJobs(title: String!, location: String!, remote: Boolean!, fullTime: Boolean!, partTime: Boolean!, shortTerm: Boolean!): [Job]!
  }

  type Mutation {
    addSchedule(email: String!, location: String!, date: Date, indefinitely: Boolean!, timeZone: String!): String!
    addJob(company: String!, title: String!, location: String!, remote: String!, type: String!, payRange: String, description: String!): String!
  }

  type Job {
    id: String!
    title: String!
    company: String!
    location: String!
    remote: String!
    type: String!
    payRange: String!
    description: String!
  }

  type User {
    email: String
    phone: String
    firstName: String
    lastName: String
    currentlyEmployed: String
    company: String
    schedule: Schedule
  }

  type Schedule {
    location: String
    timeZone: String
    date: Date
    indefinitely: Boolean
  }

  type Company {
    name: String!
    companyEmail: String!
    employees: [Employee]!
  }

  type Employee {
    firstName: String!
    lastName: String!
    location: String!
    email: String!
    phone: String!
  }

`;

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10); // Convert hard-coded AST string to type expected by parseValue
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

module.exports = typeDefs;
