import { gql } from 'react-apollo';

export default gql`
  query getLastMessage($_id: ID!){
    getLastMessage(_id: $_id){
      _id
      content
      createdAt
    }
  }
`;
