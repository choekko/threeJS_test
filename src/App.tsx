import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as THREE from 'three';
import { useEffect } from 'react';
import Cube from './components/Cube';

function App() {



  return (
    <div className="App">
      <h1>
        야호
      </h1>
      <Cube />
    </div>
  );
}

export default App;
