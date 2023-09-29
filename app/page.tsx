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
import { headers } from "next/dist/client/components/headers";
import { config } from "dotenv";
import { useRouter } from "next/navigation";

const socket = io(`${process.env.NEXT_PUBLIC_SERVER_URL}`);

export default function Home() {
  const router = useRouter();

  const [selectedRoom, setSelectedRoom] = React.useState<RoomType>();
  const [roomsData, setRoomsData] = React.useState<RoomType[]>([]);
  const [isWriteMessageOpen, setIsWriteMessageOpen] = React.useState<boolean>(false);

  const getCookie = (key: string) => {
    var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return b ? b.pop() : "";
  }

  const handleJoinRoom = (room: RoomType): void => {
    socket.emit("join_room", room);
    setSelectedRoom(room);
  }

  const handleWriteMessageOpen = (): void => {
    setIsWriteMessageOpen(!isWriteMessageOpen);
  };

  const handleSentMesage = async (room: RoomType, content: string) => {
    // const roomId = "64d7356a565cb5dc4fa42a22";
    // const userId = "64d734debf25a464aa5010fc";
    
    const roomId = room._id;
    let userId;

    await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/verify`,
      {},
      {
        headers: {
          "Authorization": `Bearer ${getCookie("token")}`,
        }
      }
    )
    .then((res) => {
      userId = res.data.user.userId;
    })
    .catch((err) => {
      return router.replace(`/auth`);
      // if (err.code === "ERR_BAD_REQUEST") {
      // }
    });
    
    await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/room/${roomId}`, {
      // data
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
    // Authenticates for main page, send Bearer token
    const authenticate = async () => {
      await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/verify`,
      {},
      {
        // config
        headers: {
          "Authorization": `Bearer ${getCookie("token")}`,
        }
      }
      )
      .catch((err) => {
        if (err.code === "ERR_BAD_REQUEST") {
          router.replace(`/auth`);
          return;
        }
      });

    };

    authenticate();
    
    // Get room data in 3 second intervals
    const interval = setInterval(async () => {
      // console.log("refetch room data");
      const getRoomData = async () => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/room/all`);
        const roomsData = await res.data.rooms;
        // await console.log(roomsData);
        setRoomsData(roomsData);
      }
      getRoomData();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
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
