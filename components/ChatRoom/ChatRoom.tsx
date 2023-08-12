"use client";

import axios from 'axios';
import React, { useState } from 'react'
import { RoomType } from '@/data/Rooms'
import { Messages, MessageType } from '@/data/Messages'

import Header from './Header'
import ContentView from './ContentView'
import BottomMenu from './BottomMenu'
import { Socket } from 'socket.io-client';

interface ChatRoomProps {
  socket: Socket;
  room?: RoomType;
  handleSentMessage: (room: RoomType, message: string) => void;
}

const getRoomMessages = async (room: RoomType, allMessages: MessageType[]): Promise<MessageType[]> => {
  const roomId = room._id;
  const res = await axios.get(`http://localhost:3010/api/room/64d7356a565cb5dc4fa42a22`);
  await console.log(res.data.room_messages);
  const dbMessageJson = await res.data.room_messages;

  // const result = allMessages.filter((message) => message.room === roomId).concat(dbMessageJson);
  const result = dbMessageJson;
  
  return result;
};

const ChatRoom = ({
  socket,
  room,
  handleSentMessage
}: ChatRoomProps) => {  
  const [messages, setMessages] = React.useState<MessageType[]>([]);

  React.useEffect(() => {
    console.log("Socket info has changed!");
    const fetchData = async () => {
      if (room) {
        const updatedMessages = await getRoomMessages(room, Messages);
        setMessages(updatedMessages);
        console.log("messages:", updatedMessages);
      }
    };

    fetchData()
      .catch(console.error);
  }, [socket]);


  // If no room data are given, display template component
  if (!room) {
    return (
      <div className='w-full h-full flex flex-col justify-center items-center text-lg font-base'>
        No rooms selected. Start chatting now!
      </div>
    )
  }

  // Render chat room when room data is given
  return (
    <div className='flex flex-col w-full h-[100dvh] justify-center items-center divide-y-2 divide-gray-300'>
      <Header room={room} />
      <ContentView roomMessages={messages} />
      <BottomMenu room={room} handleSentMessage={handleSentMessage} />   
    </div>
  )
}

export default ChatRoom