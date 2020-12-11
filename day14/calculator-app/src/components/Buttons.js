import React from 'react';

const Buttons = (props) => {
  return(
    <input type="button" value={props.value} onClick={props.handleClick} />
  );
}

export default Buttons;