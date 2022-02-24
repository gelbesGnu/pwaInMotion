import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';



const App = () => {

  const [angleY, setAngleY] = useState(null);



  
  return (
    <Tilt 
      gyroscope={true} 
      tiltReverse={false} 
      glareEnable={true}
      tiltMaxAngleX={45} 
      tiltMaxAngleY={45}
      
      glarePosition={'top'}
      
      perspective={500}
      onMove={setAngleY}
      
    >
      <div style={{ height: '300px', backgroundColor: 'deeppink', margin: 50 }}>
        <h1>y:{angleY}</h1>
      </div>
    </Tilt>
  )
};
export default App;