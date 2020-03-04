import React from 'react';
import SignIn from './Components/SignIn';
import './App.css';

// Testing purposes only
import displayData from './Components/UseAtlasFunctions';

function App() {
  displayData();
  return (
    <div className="App">
      <SignIn />
    </div>
  );
}

export default App;
