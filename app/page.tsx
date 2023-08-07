"use client";

import React from "react";
import { Socket, io } from "socket.io-client";

import RoomList from "@/components/RoomList/RoomList";
import ChatRoom from "@/components/ChatRoom/ChatRoom";

import { MessageType, Messages } from "@/data/Messages";
import { RoomType } from "@/data/Rooms";

const socket = io("http://localhost:8080");

export default function Home() {
  const [showChat, setShowChat] = React.useState<boolean>(true); // TODO set to false later on when prod
  const [selectedRoom, setSelectedRoom] = React.useState<RoomType>();

  const handleJoinRoom = (room: RoomType) => {
    socket.emit("join_room", room);
    setSelectedRoom(room);
  }

  const handleSentMesage = (room: RoomType, message: string) => {
    socket.emit("send_message", {
      room,
      message
    });
  }

  React.useEffect(() => {
    socket.emit("hello");

    // When a user joins the room
    socket.on("user_joined_room", () => {
      console.log("A user joined the room.");
    });
  }, [socket]);

  if (!showChat) {
    return (
      <div>
        AuthPage
      </div>
    )
  }

  return (
    <div className="h-full w-full flex flex-row bg-chat-background">
      <div className="w-[35dvw] h-full">
        <RoomList joinRoom={handleJoinRoom} />
      </div>
      <div className="w-full h-full ml-auto right-0">
        <ChatRoom room={selectedRoom} handleSentMessage={handleSentMesage} />
      </div>
    </div>
  )
}
