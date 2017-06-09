import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
  type Client {
    id: Int!
    first: String
    last: String
    email: String
    phone: String
  }

  type Service {
    id: Int!
    description: String!
    rate: Int!
  }

  type Expense {
    id: Int!
    description: String!
    cost: Int!
  }

  type Event {
    id: Int!
    comments: String!
    date: String!
    client: Client
  }

  type Query {
    clients: [Client]
    services: [Service]
    expenses: [Expense]
    events: [Event]
  }

  type Mutation {
    addClient(first: String!, last: String!, email: String!, phone: String!): Client
    removeClient(id: Int!): Client
    addService(description: String!, rate: Int!): Service
    removeService(id: Int!): Service
    addExpense(description: String!, cost: Int!): Expense
    removeExpense(id: Int!): Expense
    addEvent(comments: String!, date: String!): Event
    removeEvent(id: Int!): Event
  }`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
