import { gql } from 'react-apollo';

export default gql`
  subscription {
    conversationJoined {
      messages
      _id
      createdAt
      author
      recipient
    }
  }
`
