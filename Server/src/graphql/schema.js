export default `

  scalar Date

  type Status {
    message: String!
  }

  type Auth {
    token: String!
  }

  type UserTag {
    _id: ID!
    user: User!
    tag: Tag!
  }

  type Tag {
    _id: ID!
    title: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    firstName: String
    lastName: String
    avatar: String
    createdAt: Date!
    updatedAt: Date!
  }

  type Me {
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
    title: String
    description: String
    completed: Boolean
    user: User!
    createdAt: Date!
    updatedAt: Date!
  }


  type Query {
    getNeeds: [Need]
    getNeed(_id: ID!): Need
    getUserTags(_id: ID!): [UserTag]
    getUserNeeds(_id: ID!): [Need]
    me: Me
  }

  type Mutation {
    createNeed(title: String!, description: String!): Need
    updateNeed(_id: ID!, description: String, completed: Boolean): Need
    deleteNeed(_id: ID!): Status
    createUserTag(userID: ID!, tagID: ID!): UserTag
    signup(email: String!, fullName: String!, password: String!, avatar: String, username: String): Auth
    login(email: String!, password: String!): Auth
  }

  schema {
    query: Query
    mutation: Mutation

  }
`;
