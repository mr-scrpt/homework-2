import React, {Component} from 'react';
import Message from '../Message';


export default class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };
  changeInputMessage = (e) => {
    const msg = e.target.value;
    this.setState({messageInput: msg});
  };
  

  sendMessageOnEnter = (e) => {
    if (e.key === 'Enter'){
      this.setState((state) => {
          state.messages.push({text: state.messageInput});
      });
      this.setState({
        messageInput: ''
      });
    }
  };

  render() {
    const {messages} = this.state;

    const list = messages.map(item=>{
      return <Message text={item.text} />
    });
    const content = messages.length ? list : null;

    return (
      <div className="chat">
        <ul className="list">
          {content}
        </ul>
        <input type="text"
               className='input-message'
               onChange={this.changeInputMessage}
               onKeyPress={this.sendMessageOnEnter}
               value={this.state.messageInput}
               placeholder='What needs to be done'
        />
      </div>
    )
  }


};

