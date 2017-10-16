import { gql } from 'react-apollo';

export default gql`
  subscription {
    needAdded {
      _id
      title
      description
      completed
      area{
        zipcode
      }
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
