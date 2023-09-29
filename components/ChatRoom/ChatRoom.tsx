"use client";

import axios from 'axios';
import React from 'react';
import { RoomType } from '@/data/Rooms';
import { Messages, MessageType } from '@/data/Messages';

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
  const bottomOfRoomRef = React.useRef<HTMLDivElement>(null);
  const [messages, setMessages] = React.useState<MessageType[]>([]);

  const scrollToBottom = React.useCallback(() => {
    if (bottomOfRoomRef) {
      bottomOfRoomRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, []);

  React.useEffect(() => {
    console.log("Socket/room info had changed!");
    scrollToBottom();

    const fetchRoomMessages = async () => {
      if (room) {
        const updatedMessages = await getRoomMessages(room, Messages);
        setMessages(updatedMessages);
    }};

    // Fetch messages data
    fetchRoomMessages()
      .then(() => {
        if (room) {
          scrollToBottom();
          console.log("first time scroll to bottom");
        }
      })
    .catch(console.error);

    // When another user sends a message to the current room
    socket.on("receive_message", (message: string) => {
      console.log("ChatRoom component received message from server!");
      
      // Fetch messages data
        fetchRoomMessages()
        .then(() => {
          if (room) {
            scrollToBottom();
            console.log("refresh - scroll to bottom");
          }
        })
        .catch(console.error);
        })
  }, [socket, room, scrollToBottom]);


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
    <div className='flex flex-col w-full h-[100dvh] justify-center items-center'>
      <Header room={room} />
      <div className='w-full h-[2px] bg-gray-500 opacity-50'></div>
      {/* TODO - add tab above chat input field to scroll to bottom like line */}
      <ContentView bottomRef={bottomOfRoomRef}  roomMessages={messages} />
      <BottomMenu room={room} handleSentMessage={handleSentMessage} scrollToBottom={scrollToBottom} />   
    </div>
  )
}

export default ChatRoom