import { gql } from 'react-apollo';

export default gql`
  query getUserConversations($_id: ID!){
    getUserConversations(_id: $_id){
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
      updatedAt
      createdAt
    }
  }
`;
