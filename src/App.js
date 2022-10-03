import './App.css';
import Header from './components/Header'
import React from 'react'
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Header title="影片標記系統" />
      <Content />
    </div>
  );
}

export default App;
