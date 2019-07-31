import React, {Component} from 'react';

const Message = (props) => {
  const {text} = props;
  return (
    <li>
      {text}
    </li>
  )

};
export default Message