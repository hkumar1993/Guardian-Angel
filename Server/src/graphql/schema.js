export default `
  type Need {
    _id: String
    description: String
    completed: Boolean
  }

  type Query {
    getNeeds: [Need]
  }

  schema {
    query: Query
  }
`;
