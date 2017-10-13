import { gql } from 'react-apollo';

export default gql`
  subscription {
    needAdded {
      _id
      title
      description
      completed
      createdAt
      updatedAt
      user {
        _id
        username
        email
        firstName
        lastName
        avatar
        createdAt
        updatedAt
      }
    }
  }
`;
