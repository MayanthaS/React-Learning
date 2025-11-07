import { useState } from 'react'
import {ChatInput} from './components/Chatinput'

import './App.css'

 

     
    

function App() {
        const [chatMessages, setChatMessages] = useState([
          { message: 'Hello ChatBot', sender: 'user', id: 1 },
          { message: 'Hello! How can I help you?', sender: 'robot', id: 2 }
        ]);

        return (
          <div className="app-container">
           
            <ChatMessages chatMessages={chatMessages} />
             <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }

export default App
