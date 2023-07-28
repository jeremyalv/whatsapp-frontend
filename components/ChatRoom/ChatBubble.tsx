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
  return (
    <div className={`rounded-xl p-4 text-white 
    ${mine
      ? "place-self-end bg-teal-green-light rounded-tr-none" 
      : "place-self-start bg-neutral-600 rounded-tl-none"}`}>
      {message.content}
    </div>
  )
}

export default ChatBubble