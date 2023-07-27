import React from 'react'
import { FiEdit } from 'react-icons/fi'
import { Rooms } from "@/data/Rooms";

import RoomRow from './RoomRow';

type Props = {}

// Chat Sidebar
const RoomList = (props: Props) => {
  return (
    <div className='py-3 px-4 overflow-y-scroll h-screen'>
      {/* Navbar */}
      <div className='flex flex-row justify-between items-center'>
        <div className='text-2xl font-semibold'>
          Chats
        </div>

        <div className='px-2'> 
          <FiEdit className="text-2xl stroke-[1.5]" />
        </div>
      </div>

      {/* Room list */}
      <div className=''>
        {Array.from({ length: 10 }).map((_, key) => {
          return Rooms.map((room, key) => {
            return (
              <div key={key}>
                <RoomRow />
              </div>
            )
          })
        })}
      </div>
      
    </div>
  )
}

export default RoomList