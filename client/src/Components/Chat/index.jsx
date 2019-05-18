import React from 'react';
import socketIO from 'socket.io-client';

class Chat extends React.Component {
  state = {};
  componentDidMount() {
    const socket = socketIO('http://localhost:5000');
  }
  render() {
    return <div>Chat</div>;
  }
}

export default Chat;
