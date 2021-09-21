import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export default function RoomScreen() {
  const [messages, setMessages] = useState([
    
    // ejemplo de mensaje de sistema
    {
      _id: 0,
      text: 'Nueva sala creada',
      createdAt: new Date().getTime(),
      system: true
    },
    // mensaje de ejemplo
    {
      _id: 1,
      text: 'Hola!',
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Test User'
      }
    }
  ]);

  // helper method that is sends a message
  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => handleSend(newMessage)}
      user={{ _id: 1 }}
    />
  );
}