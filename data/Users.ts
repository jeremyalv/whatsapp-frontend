export type UserType = {
  _id: string;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  avatar_url: string;
  token: string;
}

export const Users: UserType[] = [
  {
    "_id": "1",
    "email": "jere.alva@email.com",
    "username": "jerealva",
    "first_name": "Jere",
    "last_name": "Alva",
    "avatar_url": "",
    "token": ""   
  },
  {
    "_id": "2",
    "email": "john.doe@email.com",
    "username": "johndoe",
    "first_name": "John",
    "last_name": "Doe",
    "avatar_url": "",
    "token": ""
  },
  {
    "_id": "3",
    "email": "clara.smith@email.com",
    "username": "clarasmith",
    "first_name": "Clara",
    "last_name": "Smith",
    "avatar_url": "",
    "token": ""
  },
  {
    "_id": "4",
    "email": "damian.jo@email.com",
    "username": "damianjo",
    "first_name": "Damian",
    "last_name": "Johnson",
    "avatar_url": "",
    "token": ""
  }
]