import React from 'react';

import './App.css';
import Header from './component/Header'
import Sidebar from './component/Sidebar';
import Layout from './component/Layout';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Layout />
    </div>
  );
}

export default App;
