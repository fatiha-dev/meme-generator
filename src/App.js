import './App.css';
import { Header } from './components/Header';
import { Meme } from './components/Meme';
import { useState } from 'react';

function App() {
  return (
    <div>
      <Header/>
      <Meme />
    </div>
      
  );
}

export default App;
