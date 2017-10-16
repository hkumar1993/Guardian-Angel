import { gql } from 'react-apollo';

export default gql`
  subscription {
    messageAdded {
      _id
      conversation {
        _id
      }
      text
      user {
        _id
        username
        email
        firstName
        lastName
        avatar
      }
      createdAt
    }
  }
`;
