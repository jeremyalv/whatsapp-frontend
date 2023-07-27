export type RoomType = {
  _id: string,
  room_token: string,
  name: string,
  users: string[],
  last_message?: string,
}

export const Rooms: RoomType[] = [
  {
    "_id": "1",
    "room_token": "QWERTY",
    "name": "The Avengers",
    "users": [
      "1",
      "2",
      "3",
      "4",
    ],
    "last_message": "Hi team, it's so nice to meet you here! I wanted to announce that we're closing a $40M Series B with Sequoia next week."
  },
  {
    "_id": "2",
    "room_token": "ASDFGH",
    "name": "Top Secret",
    "users": [
      "1",
      "2",
    ],
    "last_message": "Did Avengers just close a $40M Series B with Sequoia? That's dope AF."
  }
]