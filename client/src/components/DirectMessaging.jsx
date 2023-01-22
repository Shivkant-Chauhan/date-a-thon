import React, {useState} from 'react';
import {ChatEngine, getOrCreateChat} from 'react-chat-engine';

const DirectMessaging = () => {
    const[username, setUsername] = useState('')
    function implementingDirectChat(credentials){
        getOrCreateChat(
            credentials,
            {is_direct_chat: true, usernames:[username]},
            () => setUsername('')
        )
    }

    const displayChatInterface = (credentials) => {
      return (
        <div>
          <input
              type="text"
              placeholder='Find username'
              value={username}
              onChange = {(e) => setUsername(e.target.value)}
          />
          <button onClick={() => implementingDirectChat(credentials)}>
              Create Chat
          </button>

        </div>
      )
    }

    return(
      <ChatEngine
        height='100vh'
        userName='shivkant'
        userSecret='secretPassword'
        projectID='2823e87a-55ac-4526-b654-07564cfec5b3'
        displayNewChatInterface={(credentials) => displayChatInterface(credentials)}
      />
    )
}

export default DirectMessaging;