"use client";

import React from 'react'

import {
  VscSend
} from 'react-icons/vsc'

import {
  AiOutlinePaperClip
} from 'react-icons/ai'

import { RoomType } from '@/data/Rooms';

interface BottomMenuProps {
  room: RoomType;
  handleSentMessage: (room: RoomType, message: string) => void;
}

const BottomMenu = ({
  room,
  handleSentMessage
}: BottomMenuProps) => {
  const [message, setMessage] = React.useState<string>('');

  return (
    <div 
      className={`w-full flex flex-row justify-between items-center h-[10dvh] py-2 px-2`}
      onKeyDown={(event) => {
        // Handles enter key for sending messages
        if (event.key == "Enter" && message !== "") {
          handleSentMessage(room, message);
          setMessage("");
        }
      }}
    >
      <div className='w-[60px] flex flex-row justify-center items-center mx-2'>
        <div className='rounded-lg px-4 py-3 hover:bg-gray-400 hover:bg-opacity-25 hover:cursor-pointer group'>
          <AiOutlinePaperClip className="text-2xl text-gray-500 group-hover:text-black" />
        </div>
      </div>

      <div className='w-full h-full grow'>
        <input 
          type="text" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Type a message'
          className={`w-full h-full p-4 rounded outline-none bg-transparent focus:bg-gray-300 focus:bg-opacity-50`} 
        />
      </div>

      <div className='w-[60px] flex flex-row justify-center items-center mx-2'>
        <div 
          className='rounded-lg px-4 py-3 hover:bg-gray-400 hover:bg-opacity-25 hover:cursor-pointer'
          onClick={() => {
            message !== "" && handleSentMessage(room, message);
            setMessage("");
          }}
        >
          <VscSend className={`text-2xl ${message === "" ? "text-gray-500": "text-black"}`} />
        </div>
      </div>
    </div>
  )
}

export default BottomMenu