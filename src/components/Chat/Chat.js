import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';
import './Chat.css';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
let socket;
const Chat = ({ location }) => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'https://react-chatbox-app.herokuapp.com/';
    useEffect(() => {
        const { name, room } = queryString.parse(location.search)

        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);
        socket.emit('join', { name, room }, (err) => {
            console.log(err)
        });
        return () => {
            socket.emit('disconnect');
            socket.off()
        }
    }, [ENDPOINT, location.search]);
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        });
    }, [messages]);
    // Functioning send message
    const sendMessage = (event) => {
        event.preventDefault();
        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }
    //console.log(messages,message);
    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room}/>
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    );
}
export default Chat;