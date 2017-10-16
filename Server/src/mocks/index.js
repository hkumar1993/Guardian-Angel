import faker from 'faker';

import Need from "../models/Need";
import User from "../models/User";
import Tag from "../models/Tag";
import UserTag from "../models/UserTag";
import NeedTag from "../models/NeedTag";
import Area from "../models/Area";
import Conversation from "../models/Conversation";
import Message from "../models/Message";

const NEEDS_TOTAL = 3;
const USERS_TOTAL = 3;
const TAGS_TOTAL = 3;
const USER_TAGS_TOTAL = 3;
const AREAS_TOTAL = 5;

export default async () => {
  try {
    await Need.remove();
    await User.remove();
    await Tag.remove();
    await UserTag.remove();
    await NeedTag.remove();
    await Area.remove();
    await Conversation.remove();
    await Message.remove();

    await Array.from({ length: 1 }).forEach(async (_, i) => {
      const user1 = await User.create({
        username: "test1",
        firstName: "test1",
        lastName: "test1",
        email: "test1@test.com",
        avatar: `https://randomuser.me/api/portraits/women/${i}.jpg`,
        password: "123456"
      });
      const user2 = await User.create({
        username: "test2",
        firstName: "test2",
        lastName: "test2",
        email: "test2@test.com",
        avatar: `https://randomuser.me/api/portraits/women/${i}.jpg`,
        password: "123456"
      });

      await Array.from({ length: 1 }).forEach(async (_, i) => {
        const convo = await Conversation.create({
          author: user1._id,
          recipient: user1._id
        });

        await Array.from({ length: 1 }).forEach(async (_, i) => {
          console.log("-=-=-=-=-=-=-=-=-=-=-=-=", user1.id);
          await Message.create({
            conversation: convo._id,
            user: user1.id,
            text: "This is a test message."
          });
        });
        await Array.from({ length: 1 }).forEach(async (_, i) => {
          await Message.create({
            conversation: convo._id,
            author: user2.id,
            content: "This is a test response message."
          });
        });
      });
    });

    await Array.from({ length: USERS_TOTAL }).forEach(async (_, i) => {
      const user = await User.create({
        username: faker.internet.userName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        avatar: `https://randomuser.me/api/portraits/women/${i}.jpg`,
        password: '123456'
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

      await Array.from({ length: AREAS_TOTAL }).forEach(async () => {
        await Area.create({
          zipcode: 12345,
          name: faker.lorem.word()
        });
      });
    });
  } catch (error) {
    throw error;
  }
};
