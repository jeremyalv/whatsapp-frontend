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
    <div className={`w-full h-[12dvh] relative flex flex-row items-center px-4 border border-black`}>
      <div className='flex flex-row items-center grow'>
        {/* Room avatar */}
        <div className={`relative w-[56px] h-[56px] rounded-full overflow-hidden`}>
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
      <div className={`flex flex-row items-center gap-x-2 right-0`}>
        <PiVideoCamera className="text-xl text-slate-500" />
        <PiPhone className="tewxt-xl text-slate-500" />
          
        <RxDividerVertical className="text-xl text-slate-500" />
        <LiaSearchSolid className="text-xl text-slate-500" />
      </div>
      
    </div>
  )
}

export default Header