import React, {useState} from "react";

const LoginPage = () => {

  let [username, updateUserName] = useState("");
  let [password, updatePassword] = useState("");

  const handleUsername = (event) => {
    updateUserName(event.target.value);
  }

  const handlePassword = (event) => {
    updatePassword(event.target.value);
  }

  const onLogin = () => {
    let data = {
      username : username,
      password : password
    }

    console.log(data);
  }

  return(
    <div>
      <h2 id="loginHeading">Login Form</h2>
      <label>Enter your Username</label>
      <input type="text" placeholder="Please enter username" onChange={handleUsername} />
      <br></br>
      <label>Enter your Password</label>
      <input type="password" placeholder="Please enter password" onChange={handlePassword} />
      <br></br>
      <button onClick={() => onLogin()}>Login</button>

      <h2>Your username is {username}</h2>
      <h2>Your password is {password}</h2>
    </div>
  )
}

export default LoginPage;