import React from 'react';

interface RoomListHeaderProps {
  height: number;
  width: number;
  isWriteMessageOpen: boolean;
}

const RoomListHeader = ({
  height,
  width,
  isWriteMessageOpen
}: RoomListHeaderProps) => {
  return (
    <div 
      className={`
      ${isWriteMessageOpen ? "" : "hidden"}
      h-[${height}px] 
      w-[${width}px]
      p-4
      rounded-lg
      bg-dark-chat-background
      `}
    >
      Hello World
    </div>
  );
};

export default RoomListHeader;
