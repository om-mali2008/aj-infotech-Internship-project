import { useState } from "react";
import "./SignIn.css";

function SignIn() {
  var username = "";
  var password = "";



  function handleSubmit() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    console.log("Username:", username);
    console.log("Password:", password);
  }

  return (
    <div className="SignIn">
      <h1>Sign In</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label className="username">Username:</label>

        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <br />
        <label className="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button className="button" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;