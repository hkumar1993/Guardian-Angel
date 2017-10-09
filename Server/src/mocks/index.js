import faker from 'faker';

import Need from '../models/Need';

const NEEDS_TOTAL = 10;

export default async () => {
  try {
    await Need.remove();

    await Array.from({ length: NEEDS_TOTAL }).forEach(async () => {
      await Need.create({
        description: faker.lorem.paragraphs(1)
      });
    });
  } catch (error) {
    throw error;
  }
};
