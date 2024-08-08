import React, { useState } from 'react';
// import axios from 'axios';
import axiosInstance from '../interceptor';

const ApiPage = () => {

  let [userList, updateUserList] = useState([]);
  let [userForm, updateUserForm] = useState({
    name : "",
    job : ""
  })

  const getAPIMethod = () => {

    const URL = "https://reqres.in/api/users?page=2";

    axiosInstance.get(URL)
      .then((response) => {
        console.log(response.data.data);

        updateUserList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      })

    /* axios.get(url)
       .then(() => {})
       .catch(() => {}) */

  }

  let usersResult = userList.map((value, index) => {
    return (
      <tr key={index}>
        <td>{value.id}</td>
        <td>{value.first_name}</td>
        <td>{value.last_name}</td>
        <td>{value.email}</td>
        <td>
          <img src={value.avatar} width="60" />
        </td>
      </tr>
    )
  })

  const handleInputField = (event) => {
    updateUserForm({...userForm, [event.target.name] : event.target.value });
  }

  const createUserAccount = () => {
    console.log(userForm);

    const newURL = "http://localhost:5000/api/create/user";
    // const url = "https://reqres.in/api/users";
   
    axiosInstance.post(newURL, userForm)
      .then( (response) => {
        console.log(response.data);
      })
      .catch( (error) => {
        alert(error.message);
        console.log(error);
      })
  }

  const getWelcomeAPIMethod = () => {
    const url = "http://localhost:5000/api/welcome";

    axiosInstance.get(url)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const loggout = () => {
    localStorage.clear();
  }

  return (
    <div>
      <button onClick={() => loggout()}>Loggout</button>
      <h2>GET Method</h2>
      <button onClick={() => getAPIMethod()}>Get API</button>
      <button onClick={() => getWelcomeAPIMethod()}>Get Welcome API</button>
      <table id="customers">
        <thead>
          <tr>
            <th>ID</th>
            <th>Frist Name</th>
            <th>Last Name</th>
            <th>Email ID</th>
            <th>Profile Picture</th>
          </tr>
        </thead>
        <tbody>
          {usersResult}
        </tbody>
      </table>

      <h2>POST Method</h2>
      <div>
        <label>Enter your Name</label>
        <input type='text' name='name' placeholder='Enter Name' onChange={handleInputField}/>
      </div>
      <div>
        <label>Enter your Job</label>
        <input type='text' name='job' placeholder='Enter Job' onChange={handleInputField}/>
      </div>
      <button onClick={() => createUserAccount()}>Submit</button>
    </div>
  );
};

export default ApiPage;