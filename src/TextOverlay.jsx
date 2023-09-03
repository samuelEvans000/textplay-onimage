/* eslint-disable react/prop-types */
// TextOverlay.js
import { useState, } from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';

const TextOverlay = ({ text,position, onDrag }) => {
  const [state, setState] = useState({ width: 320, height: 50 });
 
  return (
    
    <Draggable onDrag={onDrag}>
      <Resizable
        size={{ width: state.width, height: state.height }}
        onResizeStop={(e, direction, ref, d) => {
          setState({
             width: state.width + d.width, height: state.height + d.height,});
          }}
      >
        <div className="text-overlay" style={position} contentEditable="true">
          <h2>{text}</h2>
        </div>
      </Resizable>
    </Draggable>
  );
};

export default TextOverlay;
