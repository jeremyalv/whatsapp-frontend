export type MessageType = {
  _id: string,
  content: string,
  room: string,
  user: string,
}

export const Messages: MessageType[] = [
  {
    "_id": "1",
    "content": "Hello World",
    "room": "1",
    "user": "1",
  },
  {
    "_id": "2",
    "content": "Hello World",
    "room": "1",
    "user": "2",
  },
  {
    "_id": "3",
    "content": "Hello World",
    "room": "1",
    "user": "3",
  },
  {
    "_id": "4",
    "content": "Hello World",
    "room": "1",
    "user": "4",
  },
  {
    "_id": "5",
    "content": "Nice!",
    "room": "1",
    "user": "1",
  },
  {
    "_id": "6",
    "content": "First message!",
    "room": "2",
    "user": "1",
  },
]