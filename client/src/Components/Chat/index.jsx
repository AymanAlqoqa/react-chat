import React from 'react';
import socketIO from 'socket.io-client';

class Chat extends React.Component {
  state = {};
  componentDidMount() {
    this.socket = socketIO('http://localhost:8080');
  }
  render() {
    return (
      <button onClick={() => this.socket.emit('sayhello', 'hellooooo!')}>
        Click me
      </button>
    );
  }
}

export default Chat;
