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
    <div className={`flex flex-col w-full h-full max-h-[80dvh] py-4 px-4 gap-y-4
    overflow-y-scroll scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-300
    scrollbar-w-[6px] scrollbar-rounded-full
    `}> 
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