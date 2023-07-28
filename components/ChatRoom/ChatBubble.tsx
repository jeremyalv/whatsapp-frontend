import { MessageType } from '@/data/Messages'
import React from 'react'

interface ChatBubbleProps {
  message: MessageType;
  mine?: boolean;
}

const ChatBubble = ({
  message,
  mine
}: ChatBubbleProps) => {
  const hours = new Date(message.created_at).getHours().toString().padStart(2, '0');
  const minutes = new Date(message.created_at).getMinutes().toString().padStart(2, '0');
  const chatTimestamp: string =  hours + ":" + minutes;
  
  return (
    <div className={`relative flex flex-col ${mine ? "place-self-end" : "place-self-start"} group`}>
      <div className={`flex flex-col rounded-xl px-4 py-3 text-white 
      ${mine
        ? "bg-teal-green-light rounded-tr-none" 
        : "bg-neutral-600 rounded-tl-none"}
        group-hover:cursor-pointer group-hover:bg-opacity-[0.75] group-hover:duration-100
        `}>
        <div>
          {message.content}
        </div>

      </div>

      <div className={`flex flex-row w-full ${mine ? "justify-end" : "justify-start"}`}>
        {chatTimestamp}
      </div>
    </div>
  )
}

export default ChatBubble