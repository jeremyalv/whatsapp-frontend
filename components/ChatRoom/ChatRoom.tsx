import React from 'react'
import { RoomType } from '@/data/Rooms'
import { MessageType } from '@/data/Messages'

import Header from './Header'
import ContentView from './ContentView'
import BottomMenu from './BottomMenu'

interface ChatRoomProps {
  room?: RoomType,
  roomMessages?: MessageType[]
}

const ChatRoom = ({
  room,
  roomMessages
}: ChatRoomProps) => {
  // If no room data are given, display template component
  if (!room) {
    return (
      <div className='w-full h-full flex flex-col justify-center items-center'>
        No rooms selected. Start chatting now!
      </div>
    )
  }

  // Render chat room when room data is given
  return (
    <div className='flex flex-col w-full h-full justify-center items-center'>
      <Header room={room} />
      <ContentView />
      <BottomMenu />   
    </div>
  )
}

export default ChatRoom