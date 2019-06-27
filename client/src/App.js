import React from 'react';
import './App.css';
import DetailBar from './DetailBar';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <DetailBar />
    </div>
  );
}

export default App;
