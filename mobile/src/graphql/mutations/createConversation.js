import { gql } from 'react-apollo';

export default gql`
  mutation createConversation($recipient: ID!) {
    createConversation(recipient: $recipient) {
      _id

      author {
        _id
        username
        firstName
        lastName
        avatar
        email
      }
      recipient {
        _id
        username
        firstName
        lastName
        avatar
        email
      }
      createdAt
    }
  }
`;
