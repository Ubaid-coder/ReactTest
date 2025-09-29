
import { useEffect } from "react";
import Dashboard from "./components/Dashboard.jsx";
import { useNavigate } from "react-router-dom";


import { useState } from "react";

function App() {
  const router = useNavigate();
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/verify', {
      method: 'GET',
      credentials: 'include'
    })
      .then(data => data.json())
      .then(data => {
        if (data.loggedIn) {
          setUserName(data.username);
          // router('/');
        } else {
          // router('/signIn');
        }
      });
  }, [router]);

  return <Dashboard user={userName} />;
}

export default App