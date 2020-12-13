import { useState, useEffect } from "react";

import Messages from "./messages.component";
import Compose from "./compose.component";
import Channels from "../channels/channels.component"

import { API } from "./constants";

function getMessages() {
  return fetch(`${API}/channel/general`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((error) => console.error(error));
}


  
function Chat() {
  const [messages, setMessages] = useState([]);

  function loadMessages() {
    getMessages().then(({ messages }) => {
      setMessages(messages);

    });
  }

  useEffect(() => {
    loadMessages();
    
  }, []);

  

  return (  
    
    <div className="container">
    <Channels/>
     
    <div className="chatSpace">
        <div className="messagesContainer">
       <Messages messages={messages} /> 
        </div>
        <Compose  onSuccess={() => {
         loadMessages();
         this.scrollToBottom();
         }}
        />

      </div>
   </div>
  );
}

export default Chat;