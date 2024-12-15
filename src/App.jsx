import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';
import MacContainer from './MacContainer';


function App() {
  return (
    <div className='w-full h-screen font-[Helvetica_Nov_Display]'>
      <div className='navbar line flex gap-10 py-10 absolute top-0 left-1/2 -translate-x-1/2'>
      {["iphone","ipad","service","ios","mac","products","iphone","ipad","service","ios","mac","products"].map(e=> 
      <a href='' className='text-white font-[500] text-sm capitalize'>{e}</a>
      )}
      </div>
      <div className='absolute flex flex-col items-center  top-32 left-1/2 -translate-x-1/2 font-[Helvetica_Nov_Display] text-white  '>
         <h3 className='masked text-6xl tracking-tighter font-[700]'>macbook pro .</h3>
         <h5>Built for Apple Intelligence</h5>
         <p className='text-center '>Experience the perfect blend of design and performance with the Apple MacBook. Crafted to enhance your creativity and productivity, it seamlessly bridges your professional and personal life with powerful capabilities and stunning visuals.</p>
      </div>
      <Canvas camera={{fov:12,position:[0,-10,220]}}>
      {/* <OrbitControls/> */}
      <Environment  
       files="./studio_small_09_2k.hdr"
       
      />
      <ScrollControls pages={3}>
      <MacContainer/>
      </ScrollControls>
      
    </Canvas>
    </div>
  );
};

export default App
