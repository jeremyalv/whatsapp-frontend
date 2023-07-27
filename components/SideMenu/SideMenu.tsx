import React from 'react'

import { 
  PiChatCircleText,
  PiPhone,
  PiGear,
  PiUserCircle
} from "react-icons/pi"
import {  } from "react-icons/pi"


type Props = {}

const SideMenu = (props: Props) => {
  return (
    <div className='flex flex-col h-[100dvh] w-[3.5dvw] bg-primary-500 items-center justify-between pt-3 pb-2.5'>
      {/* Sidebar Menu */}
      <div>
        <div className='py-2.5 px-2 hover:bg-gray-100 hover:bg-opacity-25 hover:cursor-pointer'>
          <PiChatCircleText className="text-2xl text-white" />
        </div>
        <div className='py-2.5 px-2 hover:bg-gray-100 hover:bg-opacity-25 hover:cursor-pointer'>
          <PiPhone className="text-2xl text-white" />
        </div>
      </div>

      <div>
        <div className='py-2.5 px-2 hover:bg-gray-100 hover:bg-opacity-25 hover:cursor-pointer'>
          <PiGear className="text-2xl text-white" />
        </div>
        <div className='py-2.5 px-2 hover:bg-gray-100 hover:bg-opacity-25 hover:cursor-pointer'>
          <PiUserCircle className="text-2xl text-white" />
        </div>
      </div>
    </div>
  )
}

export default SideMenu