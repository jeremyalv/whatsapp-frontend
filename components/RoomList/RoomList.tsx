import React from 'react'
import { FiEdit } from 'react-icons/fi'
import { Rooms } from "@/data/Rooms";

import RoomRow from './RoomRow';
import SearchRoom from './SearchRoom';

type Props = {}

// Chat Sidebar
const RoomList = (props: Props) => {
  return (
    <div className={`
      w-full
      py-3 px-4 h-screen overflow-y-scroll 
      scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200
      scrollbar-h-[10px] scrollbar-w-[4px] scrollbar-rounded-xl
    `}>
      {/* Navbar */}
      <div className='py-1'></div>
      <div className='flex flex-row justify-between items-center px-4'>
        <h1 className='text-2xl font-semibold'>
          Chats
        </h1>

        <div className='px-2'> 
          <FiEdit className="text-slate-600 text-2xl stroke-[1.5]" />
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
        {Array.from({ length: 10 }).map((_, key) => {
          return Rooms.map((room, key) => {
            return (
              <div key={key}>
                <RoomRow room={room} />
              </div>
            )
          })
        })}
      </div>
      
    </div>
  )
}

export default RoomList