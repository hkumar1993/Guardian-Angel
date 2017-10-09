import GraphQLDate from 'graphql-date';
import NeedResolvers from './need-resolver';

export default {
  Date: GraphQLDate,
  Query: {
    getNeeds: NeedResolvers.getNeeds,
    getNeed: NeedResolvers.getNeed
  },

  Mutation: {
    createNeed: NeedResolvers.createNeed,
    updateNeed: NeedResolvers.updateNeed,
    deleteNeed: NeedResolvers.deleteNeed
  }
};
