import React from 'react'
import { FiEdit } from 'react-icons/fi'
import { RoomType } from "@/data/Rooms";

import RoomRow from './RoomRow';
import SearchRoom from './SearchRoom';

interface RoomListProps {
  rooms: RoomType[];
  joinRoom: (room: RoomType) => void;
  handleWriteMessageOpen: () => void;
}

// Chat Sidebar
const RoomList = ({
  rooms,
  joinRoom,
  handleWriteMessageOpen,
}: RoomListProps) => {  
  return (
    <div className={`
      w-full
      py-2 px-4 h-screen overflow-y-scroll 
      scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-300
      scrollbar-w-[4px] scrollbar-rounded-full
    `}>
      {/* Navbar */}
      <div className='py-1'></div>
      <div className='relative flex flex-row justify-between items-center px-0'>
        <h1 className='text-2xl font-semibold pl-4'>
          Chats
        </h1>

        {/* Write Button */}
        <div 
          className='rounded-lg px-4 py-3 hover:bg-gray-400 hover:bg-opacity-25 hover:cursor-pointer'
          onClick={() => handleWriteMessageOpen()}
        > 
          <FiEdit 
            className="text-slate-600 text-2xl stroke-[1.5]" 
          />
        </div>
      </div>

      <div className='py-1.5'></div>

      {/* Search Room */}
      <div className='px-4'>
        <SearchRoom type='text' placeholder='Search your messages here' className='bg-inherit text-black placeholder:text-slate-500' />
      </div>
      
      <div className='py-2'></div>
      
      {/* Room list */}
      <div className=''>
        {
          rooms?.map((room, key) => {
            return (
              <div key={key}>
                <RoomRow room={room} joinRoom={joinRoom} />
              </div>
            )
          })
        }
      </div>
      
    </div>
  )
}

export default RoomList