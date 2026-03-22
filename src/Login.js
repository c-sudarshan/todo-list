import { useState } from "react";

function Login(){

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = (e)=>{
    e.preventDefault();

    if(!username || !password){
      alert("Enter username and password");
      return;
    }

    alert("Login Successful");
  }

  return(
    <div>
      <h2>Login Page</h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />

        <br/><br/>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <br/><br/>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;