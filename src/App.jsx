// App.js
import  { useState } from 'react';
import './App.css';
import ImageDisplay from './ImageDisplay';
import TextOverlay from './TextOverlay';


function App() {
  const [apiKey] = useState('JacH9upbJxptTQs6jv7MFCtnx09MZjC9U1YfHb6aBoE');
  const [text, setText] = useState('');
  const [textOverlays, setTextOverlays] = useState([]);
  
  const handleAddText = () => {
    if (text) {
      setTextOverlays([...textOverlays, { text, position: { top: 50, left: 50 } }]);
      setText('');
    }
  };

  const handleDrag = (e, data, index) => {
    const updatedTextOverlays = [...textOverlays];
    updatedTextOverlays[index].position = { top: data.y, left: data.x };
    setTextOverlays(updatedTextOverlays);
  };

  const handleResize = (e, { size }, index) => {
    const updatedTextOverlays = [...textOverlays];
    updatedTextOverlays[index].position = {
      top: textOverlays[index].position.top,
      left: textOverlays[index].position.left,
      width: size.width,
      height: size.height,
    };
    setTextOverlays(updatedTextOverlays);
  };

  return (
      
    <div className="App">
      <h1>Image Text Overlay App</h1>
      <div className="controls">
        <input
          type="text"
          placeholder="Enter text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='input'
        />
        <button className='button' onClick={handleAddText}>Add Text</button>
      </div>
      <div className="text-overlays">
      <ImageDisplay apiKey={apiKey} />
        {textOverlays.map((overlay, index) => (
          <TextOverlay
            key={index}
            text={overlay.text}
            position={overlay.position}
            onDrag={(e, data) => handleDrag(e, data, index)}
            onResize={(e, size) => handleResize(e, size, index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
