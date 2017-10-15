import { gql } from 'react-apollo';

export default gql`
  subscription {
    messageAdded {
      _id
      conversation
      text
      createdAt
      user {
        _id
        username
        email
        firstName
        lastName
        avatar
      }
    }
  }
`;
