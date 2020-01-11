import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function JoinChatRoom() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    
    return(
        <div className="joinContainer">
            <h1>Join Chat Room</h1>
            <div><input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /></div>
            <div><input placeholder="Room" className="joinInput" type="text" onChange={(event) => setRoom(event.target.value)} /></div>
            <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                <button>Sign in</button>
            </Link>
        </div>
    )
}