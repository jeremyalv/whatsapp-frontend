import React from 'react'
import { MessageType } from '@/data/Messages'

interface ContentViewProps {
  roomMessages?: MessageType[]
}

const ContentView = ({
  roomMessages
}: ContentViewProps) => {
  return (
    <div className={`w-full h-full border border-red-500`}>
      {roomMessages?.map((message, key) => {
        return (
          <div key={key}>
            {message.content}
          </div>
        );
      })}
    </div>
  )
}

export default ContentView