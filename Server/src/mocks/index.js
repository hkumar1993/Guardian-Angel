import faker from "faker";

import Need from "../models/Need";
import User from "../models/User";
import Tag from "../models/Tag";
import UserTag from "../models/UserTag";
import NeedTag from "../models/NeedTag";

const NEEDS_TOTAL = 3;
const USERS_TOTAL = 3;
const TAGS_TOTAL = 3;
const USER_TAGS_TOTAL = 3;

export default async () => {
  try {
    await Need.remove();
    await User.remove();
    await Tag.remove();
    await UserTag.remove();
    await NeedTag.remove();

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

      await Array.from({ length: TAGS_TOTAL }).forEach(async () => {
        const tag = await Tag.create({
          title: faker.lorem.word()
        });

        await Array.from({ length: 1 }).forEach(async () => {
          await UserTag.create({
            user: user._id,
            tag: tag._id
          });
        });
      });
    });
  } catch (error) {
    throw error;
  }
};
