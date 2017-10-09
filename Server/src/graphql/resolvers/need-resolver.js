import Need from '../../models/Need';

export default {
  getNeeds: () => Need.find({})
};
