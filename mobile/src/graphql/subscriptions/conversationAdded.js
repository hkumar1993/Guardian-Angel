import { gql } from 'react-apollo';

export default gql`
  subscription {
    conversationAdded {
      _id
      author {
        username
        firstName
        lastName
        avatar
      }
      recipient {
        username
        firstName
        lastName
        avatar
      }
      createdAt
      updatedAt
    }
  }
`;
