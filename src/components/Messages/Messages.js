import React from 'react';
import './Messages.css';
import Message from '../Message/Message';
import ScrollToBottom from 'react-scroll-to-bottom';
const Messages = ({messages,name}) => (
    <ScrollToBottom className="messages">
        {messages.map((mess, index) => <div key ={index}><Message message={mess} name={name}/></div>)}
    </ScrollToBottom>
);

export default Messages;