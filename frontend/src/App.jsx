//npm create vite@latest
//npm install axios

import { useState } from 'react'
import Login from "./components/login";
import Signup from "./components/signup";
import Feed from "./components/feed"

function App() {
  const [page,setPage]=useState("login");
  const [user,setUser]=useState(null);
  return (
    <>
     <div>
      <h1>Authentication Media </h1>
      {
        user ? (
          <Feed user={user} setUser={setUser} />
        ) : (
          page === "login"
            ? <Login setPage={setPage} setUser={setUser} />
            : <Signup setPage={setPage} />
        )
      }
     </div>

    </>
  )
}

export default App
