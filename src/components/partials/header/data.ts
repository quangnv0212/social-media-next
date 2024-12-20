import { faker } from "@faker-js/faker";

const previousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
const dayBeforePreviousDay = new Date(
  new Date().getTime() - 24 * 60 * 60 * 1000 * 2
);

export const profileUser = {
  id: 11,
  avatar: "https://avatars.githubusercontent.com/u/67807021",
  fullName: "Mcc Callem",
  bio: "admin",
  role: "admin",
  about: faker.lorem.paragraph(),
  status: "online",
  settings: {
    isTwoStepAuthVerificationEnabled: true,
    isNotificationsOn: false,
  },
  date: "10 am",
};

export const contacts = [
  {
    id: 1,
    fullName: "Mcc Callem",
    role: "admin",
    about: "admin",
    avatar: "https://avatars.githubusercontent.com/u/67807021",
    status: "online",
    unreadmessage: 0,
    date: "10 am",
  },
  {
    id: 2,
    fullName: "Adalberto Granzin",
    role: "admin",
    about: "admin",
    avatar: "https://avatars.githubusercontent.com/u/67807021",
    status: "online",
    unreadmessage: 1,
    date: "10 am",
  },
  {
    id: 3,
    fullName: "Adalberto Granzin",
    role: "admin",
    about: "admin",
    avatar: "https://avatars.githubusercontent.com/u/67807021",
    status: "busy",
    unreadmessage: 1,
    date: "10 am",
  },
  {
    id: 4,
    fullName: "Adalberto Granzin",
    role: "admin",
    about: "admin",
    avatar: "https://avatars.githubusercontent.com/u/67807021",
    status: "online",
    unreadmessage: 2,
    date: "10 am",
  },
  {
    id: 5,
    fullName: "Adalberto Granzin",
    role: "admin",
    about: "admin",
    avatar: "https://avatars.githubusercontent.com/u/67807021",
    status: "busy",
    unreadmessage: 0,
    date: "10 am",
  },
  {
    id: 6,
    fullName: "Adalberto Granzin",
    role: "admin",
    about: "admin",
    avatar: "https://avatars.githubusercontent.com/u/67807021",
    status: "online",
    unreadmessage: 2,
    date: "10 am",
  },
  {
    id: 7,
    fullName: "Adalberto Granzin",
    role: "admin",
    about: "admin",
    avatar: "https://avatars.githubusercontent.com/u/67807021",
    status: "online",
    unreadmessage: 0,
    date: "10 am",
  },
  {
    id: 8,
    fullName: "Adalberto Granzin",
    role: "admin",
    about: "admin",
    avatar: "https://avatars.githubusercontent.com/u/67807021",
    status: "away",
    unreadmessage: 0,
    date: "10 am",
  },
  {
    id: 9,
    fullName: "Adalberto Granzin",
    role: "admin",
    about: "admin",
    avatar: "https://avatars.githubusercontent.com/u/67807021",
    status: "offline",
    unreadmessage: 0,
    date: "10 am",
  },
  {
    id: 10,
    fullName: "Adalberto Granzin",
    role: "admin",
    about: "admin",
    avatar: "https://avatars.githubusercontent.com/u/67807021",
    status: "away",
    unreadmessage: 1,
    date: "10 am",
  },
];

export const chats = [
  {
    id: 1,
    userId: 1,
    unseenMsgs: 0,
    chat: [
      {
        message: "Hi",
        time: "Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)",
        senderId: 11,
        replayMetadata: false,
      },
      {
        message: "Hello. How can I help You?",
        time: "Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)",
        senderId: 2,
        replayMetadata: false,
      },
      {
        message: "Can I get details of my last transaction I made last month?",
        time: "Mon Dec 11 2018 07:46:10 GMT+0000 (GMT)",
        senderId: 11,
        replayMetadata: false,
      },
      {
        message: "We need to check if we can provide you such information.",
        time: "Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)",
        senderId: 2,
        replayMetadata: false,
      },
      {
        message: "I will inform you as I get update on this.",
        time: "Mon Dec 11 2018 07:46:15 GMT+0000 (GMT)",
        senderId: 2,
        replayMetadata: false,
      },
      {
        message: "If it takes long you can mail me at my mail address.",
        time: dayBeforePreviousDay,
        senderId: 11,
        replayMetadata: false,
      },
    ],
  },
  {
    id: 2,
    userId: 2,
    unseenMsgs: 1,
    chat: [
      {
        message: "How can we help? We're here for you!",
        time: "Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)",
        senderId: 11,
        replayMetadata: false,
      },
      {
        message:
          "Hey John, I am looking for the best admin template. Could you please help me to find it out?",
        time: "Mon Dec 10 2018 07:45:23 GMT+0000 (GMT)",
        senderId: 1,
        replayMetadata: false,
      },
      {
        message: "It should be Bootstrap 5 compatible.",
        time: "Mon Dec 10 2018 07:45:55 GMT+0000 (GMT)",
        senderId: 1,
        replayMetadata: false,
      },
      {
        message: "Absolutely!",
        time: "Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)",
        senderId: 11,
        replayMetadata: false,
      },
      {
        message: "Modern admin is the responsive bootstrap 5 admin template.!",
        time: "Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",
        senderId: 11,
        replayMetadata: false,
      },
      {
        message: "Looks clean and fresh UI.",
        time: "Mon Dec 10 2018 07:46:23 GMT+0000 (GMT)",
        senderId: 1,
        replayMetadata: false,
      },
      {
        message: "It's perfect for my next project.",
        time: "Mon Dec 10 2018 07:46:33 GMT+0000 (GMT)",
        senderId: 1,
        replayMetadata: false,
      },
      {
        message: "How can I purchase it?",
        time: "Mon Dec 10 2018 07:46:43 GMT+0000 (GMT)",
        senderId: 1,
        replayMetadata: false,
      },
      {
        message: "Thanks, from ThemeForest.",
        time: "Mon Dec 10 2018 07:46:53 GMT+0000 (GMT)",
        senderId: 11,
        replayMetadata: false,
      },
      {
        message: "I will purchase it for sure. 👍",
        time: previousDay,
        senderId: 1,
        replayMetadata: false,
      },
    ],
  },
];
