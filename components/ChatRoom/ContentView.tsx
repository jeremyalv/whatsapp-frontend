import React, { useEffect, RefObject } from 'react'
import { MessageType } from '@/data/Messages'
import ChatBubble from './ChatBubble'
import { RoomType } from '@/data/Rooms'

interface ContentViewProps {
  roomMessages?: MessageType[];
  bottomRef?: RefObject<HTMLDivElement>;
}

const ContentView = ({
  roomMessages,
  bottomRef,
}: ContentViewProps) => {
  const [messages, setMessage] = React.useState<MessageType[] | undefined>([]);
  
  useEffect(() => {
    setMessage(roomMessages?.reverse());
    // Get room data in intervals
    // const interval = setInterval(() => {
    //   // console.log("refetch room data");
    //   setMessage(roomMessages?.reverse());
    // }, 5 * 1000);

    // return () => clearInterval(interval);
  }, [roomMessages]);
  
  return (
    <div className='w-full h-full flex flex-col-reverse overflow-auto'>
      <div className={`
      flex flex-col-reverse w-full h-full max-h-[80dvh] pt-4 px-4 gap-y-4
      overflow-y-scroll scrollbar 
      scrollbar-thumb-gray-500 scrollbar-track-gray-300
      scrollbar-w-[6px] scrollbar-rounded-full
      `}> 
        {/* Because the columns are doubly reversed, the "bottomRef" is placed at the top. */}
        <div className='mt-4' ref={bottomRef}></div>

        {
          // Reverse array for chatroom UX
          messages?.map((message, key) => {
            return (
              <ChatBubble 
                key={key} 
                message={message} 
                mine={key % 3 ? false : true} 
              />
            );
          })
        }
      {/* TODO - Newest chat bubble is not scrolled through when adding new msg */}
      {/* https://reacthustle.com/blog/react-auto-scroll-to-bottom-tutorial */}
      </div>
    </div>
  )
}

export default ContentView

// Double reversal reference
// https://stackoverflow.com/questions/18614301/keep-overflow-div-scrolled-to-bottom-unless-user-scrolls-up