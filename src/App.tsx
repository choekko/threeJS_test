import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as THREE from 'three';
import { useEffect } from 'react';
import Cube from './components/Cube';
import ObjFile from './components/ObjFile';
import Test from './components/Test';

function App() {



  return (
    <div className="App">
        <div className="description" style={{margin: '20px', fontSize: '50px'}}>
            멍뭉이
        </div>
      <div className="obj__wrap">
        <ObjFile/>
      </div>
      <div className="description">
          <span>Mouse Drag : <span className='highlight'>Rotate</span></span>
          <span>Mouse Scroll : <span className='highlight'>Zoom</span></span>
      </div>
      <div className="notice">
        <span> 반응형 사이즈 조절 가능 </span>
        <span> <span className='highlight'>모바일 Drag, Pinch, Spread</span> 에도 반응 </span>
          <span> 라이팅(lighting) 고정 상태로 회전할 수 있도록 구현 가능 </span>
      </div>
    </div>
  );
}

export default App;
