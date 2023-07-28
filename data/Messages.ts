export type MessageType = {
  _id: string,
  content: string,
  room: string,
  user: string,
}

export const Messages: MessageType[] = [
  {
    "_id": "1",
    "content": "Hello World!",
    "room": "1",
    "user": "1",
  },
  {
    "_id": "2",
    "content": "It's nice to meet everyone here!",
    "room": "1",
    "user": "2",
  },
  {
    "_id": "3",
    "content": "Who's bringing pizza?",
    "room": "1",
    "user": "3",
  },
  {
    "_id": "4",
    "content": "I think Josh is.",
    "room": "1",
    "user": "4",
  },
  {
    "_id": "5",
    "content": "Sounds awesome!",
    "room": "1",
    "user": "1",
  },
  {
    "_id": "6",
    "content": "First message!",
    "room": "2",
    "user": "1",
  },
  {
    "_id": "7",
    "content": "Second Message message!",
    "room": "2",
    "user": "2",
  },
  {
    "_id": "8",
    "content": "See you guys at 5.",
    "room": "1",
    "user": "1",
  },
]