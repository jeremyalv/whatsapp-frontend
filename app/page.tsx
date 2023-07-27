"use client";

import React from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080");

export default function Home() {
  const [showChat, setShowChat] = React.useState(false);
  return (
    <div>
      {showChat ? (
        <div>
        </div> 
      ) : (
        <div className="w-[65dvw] h-[100dvh] border border-black bg-gray-300 ml-auto">
          
        </div>
      )}
      
    </div>
  )
}
