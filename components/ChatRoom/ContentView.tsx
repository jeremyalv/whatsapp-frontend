import React from 'react'
import { MessageType } from '@/data/Messages'
import ChatBubble from './ChatBubble'
import { RoomType } from '@/data/Rooms'

interface ContentViewProps {
  roomMessages?: MessageType[];
}

const ContentView = ({
  roomMessages,
}: ContentViewProps) => {
  return (
    <div className={`flex flex-col w-full h-full py-4 px-4 gap-y-4`}> 
      {roomMessages?.map((message, key) => {
        return (
          <ChatBubble 
            key={key} 
            message={message} 
            mine={key % 3 ? false : true} />
        );
      })}
    </div>
  )
}

export default ContentView