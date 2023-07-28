import React from 'react'
import Image from 'next/image'

import { RoomType } from '@/data/Rooms'

import { 
  PiVideoCamera,
  PiPhone
} from "react-icons/pi";

import {
  LiaSearchSolid
} from "react-icons/lia";

import {
  RxDividerVertical
} from "react-icons/rx";

interface HeaderProps {
  room: RoomType
}

const Header = ({
  room
}: HeaderProps) => {
  return (
    <div className={`w-full h-[12dvh] relative flex flex-row items-center px-4 hover:bg-gray-300 hover:bg-opacity-50 hover:duration-300 hover:cursor-pointer`}>
      <div className='flex flex-row items-center grow'>
        {/* Room avatar */}
        <div className={`relative w-[52px] h-[52px] rounded-full overflow-hidden`}>
          <Image 
            src="/images/test.jpg"
            alt='room image'
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Spacing */}
        <div className='px-2'></div>

        {/* Room name */}
        <h1 className={`font-[500] text-lg`}>
          {room.name}
        </h1>
      </div>

      {/* Chat room menu */}
      <div className={`flex flex-row items-center gap-x-0 pr-4`}>
        <div className='rounded-lg px-4 py-3 hover:bg-gray-400 hover:bg-opacity-25 hover:cursor-pointer'>
          <PiVideoCamera className="text-2xl text-slate-600" />
        </div>

        <div className='px-.5'></div>
        
        <div className='rounded-lg px-4 py-3 hover:bg-gray-400 hover:bg-opacity-25 hover:cursor-pointer'>
          <PiPhone className="text-2xl text-slate-600" />
        </div>
          
        <RxDividerVertical className="text-2xl text-slate-600" />

        <div className='rounded-lg px-4 py-3 hover:bg-gray-400 hover:bg-opacity-25 hover:cursor-pointer'>
          <LiaSearchSolid className="text-2xl text-slate-600" />
        </div>
      </div>
      
    </div>
  )
}

export default Header