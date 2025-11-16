import { useState } from "react";
import "./App.css";
import LoginPage from "./LoginPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  return (
    <>
      {!loggedIn && (
        <LoginPage
          onLogin={(user) => {
            setLoggedIn(true), setUserEmail(user);
          }}
        />
      )}
      {loggedIn && (
        <>
          <h1>Welcome, {userEmail}!</h1>
          <button
            onClick={() => {
              setLoggedIn(false), setUserEmail("");
            }}
          >
            Logout
          </button>
        </>
      )}
    </>
  );
}

export default App;
