import { gql } from 'react-apollo';


export default gql`
  mutation createNeed($title: String!, $description: String!, $area: Int!) {
    createNeed(title: $title, description: $description, area: $area) {
      _id
      title
      description
      area {
        _id
        zipcode
        name
      }
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
