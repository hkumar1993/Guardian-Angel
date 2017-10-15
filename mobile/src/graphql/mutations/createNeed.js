import { gql } from 'react-apollo';


export default gql`
  mutation createNeed($title: String!, $description: String!) {
    createNeed(title: $title, description: $description) {
      _id
      title
      description
      completed
      createdAt
      updatedAt
      user {
        _id
        username
        firstName
        lastName
        email
        avatar
        createdAt
        updatedAt
      }
    }
  }
`;
