import React, { useState, useEffect } from "react";
import { socket } from "../services/socket";

import ChatBox from "../components/ChatBox";
import Message from "../components/Message";
import UsersList from "../components/UsersList";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (msg) => {
    socket.emit("send_message", msg);
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => socket.off("receive_message");
  }, []);

  return (
    <div>
      <h2>Chat en tiempo real</h2>

      <UsersList />

      <div>
        {messages.map((msg, i) => (
          <Message key={i} text={msg} />
        ))}
      </div>

      <ChatBox sendMessage={sendMessage} />
    </div>
  );
};

export default Chat;