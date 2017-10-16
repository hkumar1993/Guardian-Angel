import { gql } from 'react-apollo';

export default gql`
  mutation createMessage( $conversation: ID!, $user: ID!, $text: String!) {
    createMessage( conversation: $conversation, user: $user, text: $text) {
      _id
      text
      conversation {
        _id
      }
      user {
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
