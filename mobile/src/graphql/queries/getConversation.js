import { gql } from 'react-apollo';

export default gql`
  query getConversation($_id: ID!){
    getConversation(_id: $_id){
      _id
      author {
        _id
        username
        firstName
        lastName
        avatar
      }
      recipient {
        _id
        username
        firstName
        lastName
        avatar
      }
    }
  }
`;
