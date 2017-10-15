import { gql } from 'react-apollo';

export default gql`
  {
    getNeeds {
      _id
      title
      description
      area {
        zipcode
      }
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
