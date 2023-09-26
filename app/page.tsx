"use client";

import {} from "dotenv/config";

import axios from "axios";
import React from "react";
import { Socket, io } from "socket.io-client";

import RoomList from "@/components/RoomList/RoomList";
import WriteNewChat from "@/components/RoomList/WriteNewChat";
import ChatRoom from "@/components/ChatRoom/ChatRoom";
import SideMenu from "@/components/SideMenu/SideMenu";

import { MessageType, Messages } from "@/data/Messages";
import { RoomType } from "@/data/Rooms";

const socket = io(`${process.env.NEXT_PUBLIC_SERVER_URL}`);

export default function Home() {
  // TODO set to false later on when prod for auth
  const [showChat, setShowChat] = React.useState<boolean>(true); 
  const [selectedRoom, setSelectedRoom] = React.useState<RoomType>();
  const [roomsData, setRoomsData] = React.useState<RoomType[]>([]);
  const [isWriteMessageOpen, setIsWriteMessageOpen] = React.useState<boolean>(true);

  const handleJoinRoom = (room: RoomType) => {
    socket.emit("join_room", room);
    setSelectedRoom(room);
  }

  const handleWriteMessageOpen = () => {
    setIsWriteMessageOpen(!isWriteMessageOpen);
  };

  // @Jere TODO room arg ga kepake karena lgsg cek dari params.
  const handleSentMesage = async (room: RoomType, content: string) => {
    // @Jere TODO, hardcoded for now.
    const roomId = "64d7356a565cb5dc4fa42a22";
    const userId = "64d734debf25a464aa5010fc";
    await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/room/${roomId}`, {
      "content": content,
      "user": userId,
    });
    
    socket.emit("send_message", {
      room,
      message: content
    });
  }

  // Update rooms data
  React.useEffect(() => {
    // Get room data in 3 second intervals
    const interval = setInterval(async () => {
      console.log("refetch room data");
      const getRoomData = async () => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/room/all`);
        const roomsData = await res.data.rooms;
        await console.log(roomsData);
        setRoomsData(roomsData);
      }
      getRoomData();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    // Authenticates for main page
    // const authenticate = async () => {
    //   // await axios.get();
    // };

    // authenticate();

    socket.emit("hello");

    // When a user joins the room
    socket.on("user_joined_room", () => {
      console.log("A user joined the room.");
    });

    // // When another user sends a message to the current room
    // socket.on("receive_message", (message: string) => {
    //   console.log("receive message:", message);
    // })
  }, []);

  if (!showChat) {
    return (
      <div>
        AuthPage
      </div>
    )
  }

  return (
    <>
      <SideMenu />
      <div className="h-full w-full flex flex-row bg-chat-background">
        <div className="relative flex flex-col w-[35dvw] h-full">
          {isWriteMessageOpen 
          ? (
              <div
                className={`
                absolute
                top-[8dvh]
                -right-[14.75dvw]
                z-10
                `}  
              >
                <WriteNewChat
                  isWriteMessageOpen={isWriteMessageOpen} 
                />
              </div> 
            )
          : null
          }
          <RoomList 
            rooms={roomsData} 
            joinRoom={handleJoinRoom} 
            handleWriteMessageOpen={handleWriteMessageOpen} 
          />
        </div>
        <div className="w-full h-full ml-auto right-0">
          <ChatRoom socket={socket} room={selectedRoom} handleSentMessage={handleSentMesage} />
        </div>
      </div>
    </>
  )
}
