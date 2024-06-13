import React from 'react';
import AppLayout from './AppLayout/AppLayout';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';


const App = () => {
  return (
    <div>
      <Login />
      <Navbar />
      <AppLayout />

    </div>
  );
}

export default App;
