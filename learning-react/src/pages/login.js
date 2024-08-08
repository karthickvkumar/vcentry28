import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  const navigate = useNavigate();
  // let name = "mr.abc";
  let [name, updateName] = useState("mr.abc");

  // let [username, updateUserName] = useState("");
  // let [password, updatePassword] = useState("");

  let [loginForm, updateLoginForm] = useState({
    username : "",
    password: ""
  })

  // const handleUsername = (event) => {
  //   console.log(event.target.value);

  //   updateUserName(event.target.value);
  // }

  // const handlePassword = (event) => {
  //   updatePassword(event.target.value);
  // }

  const handleInputField = (event) => {
    console.log(event.target.value, event.target.name);

    updateLoginForm({...loginForm, [event.target.name] : event.target.value});
  }


  const onLogin = () => {
    // let data = {
    //   username : "",
    //   password : ""
    // }

    // console.log(data);

    console.log(loginForm);
    localStorage.setItem("isAuthenticate", true);
    navigate("/about");
  }

  const rePrint = () => {
    //name = "karthi";
    updateName("karthi");
  }

  return(
    <div>
      <h2 id="loginHeading">Login Form</h2>
      <label>Enter your Username</label>
      <input type="text" name="username" placeholder="Please enter username" onChange={handleInputField} />
      <br></br>
      <label>Enter your Password</label>
      <input type="password" name="password" placeholder="Please enter password" onChange={handleInputField} />
      <br></br>
      <button onClick={() => onLogin()}>Login</button>

      {/* <h2>Your username is {username}</h2>
      <h2>Your password is {password}</h2> */}
      <h2>Your username is {loginForm.username}</h2>
      <h2>Your password is {loginForm.password}</h2>
      <h1>{name}</h1>
      <button onClick={() => rePrint()}>Click</button>
    </div>
  )
}

export default LoginPage;