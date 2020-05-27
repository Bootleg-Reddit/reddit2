import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import {useSelector,useDispatch} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'

import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const ENDPOINT = 'https://justanotherredditclone.herokuapp.com/';
  const isLoggedIn = useSelector((state)=> state.userReducer.isLoggedIn);
  const username = useSelector((state)=> state.userReducer.username);
  const history = useHistory()

  useEffect(() => {

    if(!localStorage.getItem('reddit_token')){
      console.log('not logged in')
      history.push(`/`);
    }
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(username)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, localStorage.getItem('reddit_token')]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="outerContainer">
      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default Chat;
