import React from 'react';

const OutputScreen = (props) => {
  return(
    <div className="output_screen">
      <input type="text" value={props.value} />
    </div>
  );
}

export default OutputScreen;