import faker from "faker";

import Need from "../models/Need";
import User from "../models/User";

const NEEDS_TOTAL = 3;
const USERS_TOTAL = 3;

export default async () => {
  try {
    await Need.remove();
    await User.remove();

    await Array.from({ length: USERS_TOTAL }).forEach(async (_, i) => {
      const user = await User.create({
        username: faker.internet.userName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        avatar: `https://randomuser.me/api/portraits/women/${i}.jpg`,
        password: "123456"
      });

      await Array.from({ length: NEEDS_TOTAL }).forEach(async () => {
        await Need.create({
          title: faker.lorem.sentence(),
          description: faker.lorem.paragraphs(1),
          user: user._id
        });
      });
    });
  } catch (error) {
    throw error;
  }
};
