import React from 'react';
import Dropdown from './components/Dropdown';
import './App.css';

const options = [
  'Profile Information',
  'Change Password',
  'Become PRO',
  'Help',
  'Log Out',
];

function App() {
  return (
    <div className="App">
      <Dropdown options={options} />
    </div>
  );
}

export default App;
