"use client";

import React from "react";
import { io } from "socket.io-client";

import RoomList from "@/components/RoomList/RoomList";
import ChatRoom from "@/components/ChatRoom/ChatRoom";

const socket = io("http://localhost:3001");

export default function Home() {
  const [showChat, setShowChat] = React.useState(true);

  const handleJoinRoom = () => {
    socket.emit("joinRoom", "1");
  }

  if (!showChat) {
    return (
      <div>

      </div>
    )
  }
  return (
    <div className="flex flex-row h-[100dvh] border border-black ">
      <div className="h-full">
        <RoomList />
      </div>
      <div className="w-[68dvw] h-full bg-gray-300 ml-auto">
        <ChatRoom />
      </div>
    </div>
  )
}
