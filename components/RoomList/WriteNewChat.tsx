import React from 'react';
import NewChatRow from './NewChatRow';

interface RoomListHeaderProps {
  isWriteMessageOpen: boolean;
}

const RoomListHeader = ({
  isWriteMessageOpen
}: RoomListHeaderProps) => {
  return (
    <div 
      className={`
      relative
      ${isWriteMessageOpen ? "" : "hidden"}
      h-[600px]
      w-[320px]
      p-4 
      rounded-lg
      bg-dark-chat-background
      bg-opacity-85
      transition
      duration-300
      `}
    >
      <div className='pb-4 font-semibold text-xl'>
        New Chat
      </div>

      {/* Chats list */}
      <div className={`
        flex flex-col gap-y-2 
        w-full
        h-[500px]
        overflow-y-scroll
        overscroll-contain
        scrollbar
        scrollbar-thumb-gray-600 scrollbar-track-gray-200
        scrollbar-w-[3px] scrollbar-rounded-full
        pr-0.5
      `}
      >
        <NewChatRow />
        <NewChatRow />
        <NewChatRow />
        <NewChatRow />
        <NewChatRow />
        <NewChatRow />
        <NewChatRow />
        <NewChatRow />
        <NewChatRow />
        <NewChatRow />
        <NewChatRow />
        <NewChatRow />
        <NewChatRow />
        <NewChatRow />
        <NewChatRow />
        <NewChatRow />
      </div>
    </div>
  );
};

export default RoomListHeader;
