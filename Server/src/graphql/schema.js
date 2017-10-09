export default `

  scalar Date

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
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
