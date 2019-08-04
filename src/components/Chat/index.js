import React, {Component} from 'react';
import Message from '../Message';


export default class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };
  changeInputMessage = (e) => {
    const {value} = e.target;
    this.setState({messageInput: value});
  };


  sendMessageOnEnter = (e) => {
    if (e.key === 'Enter') {
      this.setState(({ messages, messageInput }) => ({messages: [...messages, { text: messageInput} ],  messageInput: ''}));
}
  };

  render() {
    const {messages, messageInput} = this.state;

    const list = messages.map((item, idx) => {
      return <Message text={item.text} key={idx}/>
    });

    return (
      <div className="chat">
        <ul className="list">
          {messages.length ? list : null}
        </ul>
        <input
          type="text"
          className='input-message'
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
          value={messageInput}
          placeholder='What needs to be done'
        />
      </div>
    )
  }


};

