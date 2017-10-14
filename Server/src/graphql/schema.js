export default `

  scalar Date

  type Status {
    message: String!
  }

  type Auth {
    token: String!
  }

  type Message {
    _id: ID!
    conversation: ID!
    author: ID!
    content: String!
  }

  type Conversation {
    _id: ID!
    author: User!
    recipient: User!
    updatedAt: Date!
    createdAt: Date!
  }

  type AreaFollow {
    _id: ID!
    user: ID!
    area: ID!
  }

  type Area {
    _id: ID!
    zipcode: Int!
    name: String
  }

  type NeedRequest {
    _id: ID!
    need: Need!
    user: User!
  }

  type NeedTag {
    _id: ID!
    need: Need!
    tag: Tag!
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
    conversations: [Conversation]
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
    _id: ID!
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
    getNeedRequest(_id: ID!): [NeedRequest]
    getMessage(_id: ID!): Message
    getConversation(_id: ID!): Conversation
    getUserConversations(_id: ID!): [Conversation]
    getConversationMessages(_id: ID!): [Message]
    getUserTag(_id: ID!): UserTag
    getNeedTag(_id: ID!): NeedTag
    getUserTags(_id: ID!): [UserTag]
    getNeedTags(_id: ID!): [NeedTag]
    getUserNeeds(_id: ID!): [Need]
    me: Me
  }

  type Mutation {
    createNeed(title: String!, description: String!): Need
    updateNeed(_id: ID!, description: String, completed: Boolean): Need
    deleteNeed(_id: ID!): Status
    createConversation(recipient: ID!): Conversation
    deleteConversation(_id: ID!): Conversation
    createMessage(conversation: ID!, author: ID!, content: String!): Message
    createUserTag(user: ID!, tag: ID!): UserTag
    createNeedTag(need: ID!, tag: ID!): NeedTag
    deleteNeedTag(_id: ID!): Status
    deleteUserTag(_id: ID!): Status
    signup(email: String!, fullName: String!, password: String!, avatar: String, username: String): Auth
    login(email: String!, password: String!): Auth
  }

  type Subscription {
<<<<<<< HEAD
    needAdded: Need
=======
    conversationJoined: Conversation
>>>>>>> f7224be0437e6e8e021bd943330e5864e965446c
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;
