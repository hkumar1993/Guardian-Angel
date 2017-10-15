import { gql } from 'react-apollo';

export default gql`
  query getConversationMessages($_id: ID!){
    getConversationMessages(_id: $_id){
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

_id: ID!
conversation: ID!
author: ID!
