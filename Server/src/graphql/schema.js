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
    conversation: Conversation!
    user: User!
    text: String!
    createdAt: Date!
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
    area: Area!
    user: User!
    createdAt: Date!
    updatedAt: Date!
  }

  type Query {
    getNeeds: [Need]
    getNeed(_id: ID!): Need
    getNeedRequest(_id: ID!): [NeedRequest]
    getNeedRequests(_id: ID!): [NeedRequest]
    getUserRequests(_id: ID!): [NeedRequest]
    getMessage(_id: ID!): Message
    getLastMessage(_id: ID!): Message
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
    createNeed(title: String!, description: String!, area: Int!): Need
    updateNeed(_id: ID!, description: String, completed: Boolean): Need
    deleteNeed(_id: ID!): Status
    createConversation(recipient: ID!): Conversation
    deleteConversation(_id: ID!): Conversation
    createMessage(conversation: ID!, user: ID!, text: String!): Message
    createUserTag(user: ID!, tag: ID!): UserTag
    createNeedTag(need: ID!, tag: ID!): NeedTag
    deleteNeedTag(_id: ID!): Status
    deleteUserTag(_id: ID!): Status
    createNeedRequest(user: ID!, need: ID!): NeedRequest
    signup(email: String!, fullName: String!, password: String!, avatar: String, username: String): Auth
    login(email: String!, password: String!): Auth
  }

  type Subscription {
    needAdded: Need
    messageAdded: Message
    conversationAdded: Conversation
    needRequestAdded: NeedRequest
    needRequestDeleted: NeedRequest
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;
