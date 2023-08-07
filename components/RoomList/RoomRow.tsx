import React from 'react'
import Image from 'next/image'
import { RoomType } from '@/data/Rooms'

interface RoomRowProps {
  room: RoomType,
  joinRoom: (room: RoomType) => void
}

const RoomRow = ({
  room,
  joinRoom
}: RoomRowProps) => {
  return (
    <div 
      onClick={() => {
        joinRoom(room);
      }}
      className={`w-full flex flex-row my-1 py-3 px-4 rounded-lg bg-opacity-50 hover:bg-gray-300 hover:cursor-pointer hover:bg-opacity-[0.45]`}
    >
      <div className='relative rounded-full overflow-hidden w-[60px] h-[60px]'>
        <Image
          src="/images/test.jpg"
          alt='room image'
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>

      <div className='px-2'></div>
      
      <div className='truncate w-4/5 flex flex-col'>
        <p className='text-black text-md font-semibold'>
          {room.name}
        </p>

        <div className='py-.5'></div>
        
        <p className='w-full text-slate-700 truncate line-clamp-2'>
          {room.last_message}
        </p>
      </div>
    </div>
  )
}

export default RoomRow