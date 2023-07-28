import React from 'react'
import { RoomType } from '@/data/Rooms'
import { Messages, MessageType } from '@/data/Messages'

import Header from './Header'
import ContentView from './ContentView'
import BottomMenu from './BottomMenu'

interface ChatRoomProps {
  room?: RoomType,
}

const getRoomMessages = (room: RoomType, allMessages: MessageType[]): MessageType[] => {
  const roomId = room._id;
  return allMessages.filter((message) => message.room === roomId);
};

const ChatRoom = ({
  room,
}: ChatRoomProps) => {
  // If no room data are given, display template component
  if (!room) {
    return (
      <div className='w-full h-full flex flex-col justify-center items-center'>
        No rooms selected. Start chatting now!
      </div>
    )
  }

  const roomMessages = getRoomMessages(room, Messages);

  // Render chat room when room data is given
  return (
    <div className='flex flex-col w-full h-full justify-center items-center divide-y-2 divide-gray-300'>
      <Header room={room} />
      <ContentView roomMessages={roomMessages} />
      <BottomMenu />   
    </div>
  )
}

export default ChatRoom