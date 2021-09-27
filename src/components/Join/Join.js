import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Join.css';
const Join = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div className="form-group">
                    <label>Name</label>
                    <input required type="text" name="Name" className="joinInput" placeholder="Name" onChange={(event) => setName(event.target.value)} />
                    <label>Room</label>
                    <input required type="text" name="Room" className="joinInput" placeholder="Room" onChange={(event) => setRoom(event.target.value)}/>
                </div>
                <Link onClick={event => (name && room) ? null : event.preventDefault()} to={`/chat?name=${name}&room=${room}`}><button type="submit" className="button mt-20">Submit</button></Link>
            </div>
        </div>
    );
}
export default Join;