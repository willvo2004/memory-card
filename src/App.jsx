import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MemoryCardList from './components/MemoryCardList/MemoryCardList';


function App() {

  return (
    <>
      <Header />
      <MemoryCardList />
    </>
  );
}

export default App;
