import { gql } from 'react-apollo';

export default gql`
  query getUserNeeds($_id: ID!){
    getUserNeeds(_id: $_id){
      _id
      title
      description
      user{
        _id
        avatar
      }
    }
  }
`;
