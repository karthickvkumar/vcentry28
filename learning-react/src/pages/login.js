import React from "react";

const LoginPage = () => {
  return(
    <div>
      <h2 id="loginHeading">Login Form</h2>
      <label>Enter your Username</label>
      <input type="text" placeholder="Please enter username" />
      <br></br>
      <label>Enter your Password</label>
      <input type="password" placeholder="Please enter password" />
      <br></br>
      <button>Login</button>
    </div>
  )
}

export default LoginPage;