import { gql } from 'react-apollo';

export default gql`
  query getUserNeeds($_id: ID!){
    getUserNeeds(_id: $_id){
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
