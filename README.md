# Guardian Angel

### [Check out the Guardian Angel Live Website!](http://guardian-angel.herokuapp.com)

## Background and Overview

Have you ever met someone in need but did not have the knowledge or resources to help them?
Have you ever wanted to help someone but did not know who to approach?

Guardian Angel is a social network that connects these kinds of people together.
You can be a Guardian, and partake in community outreach, finding the people in your area in need and listing them on the app.
You can be an Angel, who can scroll through the Needs Feed and provide the help someone needs.

Guardian Angel aims to crowd source pro-bono services to those in need, using the technology in our hands to reach out to those who don't have access to it.

## Technologies Used

This project was built using the following technologies:
* Frontend
  * React Native / Redux
  * Expo
  * Apollo

* Backend
  * NodeJs / Express
  * MongoDB
  * GraphQL

## Needs Feed

![NewsFeed](./docs/gifs/NewsFeed.gif)

The Home Feed displays all the current needs that are in the area. Users can view these needs directly and offer their services.

![NeedView](./docs/gifs/NeedView.gif)

## Profile

![Profile](./docs/gifs/gif.gif)

The User Profile page displays all the users posted needs and a button to message them directly.

## Messages

![Message](./docs/gifs/Message.gif)

Messages are sent in real-time and implemented using WebSockets. Users can message other users to get more information about needs.

## Dashboard

![Dashboard](./docs/gifs/Dashboard.gif)

The user Dashboard displays all needs the user has posted or applied to, the status of the need, and how many people have offered their service.
