export default `

  scalar Date

  type User {
    _id: ID!
    username: String
    email: String!
    firstName: String
    lastName: String
    avatar: String
    createdAt: Date!
    updatedAt: Date!
  }

  type Need {
    _id: String
    description: String
    completed: Boolean
    createdAt: Date!
    udpatedAt: Date!
  }

  type Status {
    message: String!
  }

  type Query {
    getNeeds: [Need]
    getNeed(_id: ID!): Need
  }

  type Mutation {
    createNeed(description: String!): Need
    updateNeed(_id: ID!, description: String, completed: Boolean): Need
    deleteNeed(_id: ID!): Status
    signup(email: String!, fullName: String!, password: String!, avatar: String, username: String): User
  }

  schema {
    query: Query
    mutation: Mutation

  }
`;
