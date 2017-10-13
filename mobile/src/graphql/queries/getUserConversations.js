import { gql } from 'react-apollo';

export default gql`
  query getUserConversations($_id: ID!){
    getUserConversation(_id: $_id){
      _id
      author {
        firstName
        lastName
        avatar
      }
      recipient {
        firstName
        lastName
        avatar
      }
    }
  }
`;
