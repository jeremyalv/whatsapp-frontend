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
    <div className="h-full w-full flex flex-row bg-chat-background">
      <div className="w-[35dvw] h-full">
        <RoomList />
      </div>
      <div className="w-full h-full ml-auto right-0">
        <ChatRoom />
      </div>
    </div>
  )
}
