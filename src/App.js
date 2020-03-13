import React from 'react';
import { Button } from 'react-bootstrap';
import SignIn from './Components/SignIn';
import './App.css';
import { StitchAuthProvider, useStitchAuth } from './Components/StitchAuth';

// Testing purposes only
import displayData from './Components/UseAtlasFunctions';
import { getCurrentUser } from './stitch/auth';

// App.propTypes = {};
export default function App() {
  return (
    <StitchAuthProvider>
      <AppUI />
    </StitchAuthProvider>
  );
}

// AppUI.propTypes = {};
function AppUI() {
  const {
    isLoggedIn,
    actions: { handleLogout }
  } = useStitchAuth();
  // handleLogout();
  console.log(getCurrentUser());
  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          <p>auth works! </p>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
}
