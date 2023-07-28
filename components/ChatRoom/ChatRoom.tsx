import React from 'react'
import { RoomType } from '@/data/Rooms'
import { MessageType } from '@/data/Messages'

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
      <div className='w-full h-full flex flex-row justify-center items-center'>
        No rooms selected. Start chatting now!
      </div>
    )
  }

  // Render chat room when room data is given
  return (
    <div className='w-full h-full flex flex-row justify-center items-center'>
      Room data is given! Under construction...      
    </div>
  )
}

export default ChatRoom