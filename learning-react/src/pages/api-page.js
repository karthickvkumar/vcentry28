import React, { useState } from 'react';
import axios from 'axios';

const ApiPage = () => {

  let [userList, updateUserList] = useState([]);
  let [userForm, updateUserForm] = useState({
    name : "",
    job : ""
  })

  const getAPIMethod = () => {

    const URL = "https://reqres.in/api/users?page=2";

    axios.get(URL)
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

    const url = "https://reqres.in/api/users";
   
    axios.post(url, userForm)
      .then( (response) => {
        console.log(response.data);
      })
      .catch( (error) => {
        alert(error.message);
        console.log(error);
      })
  }

  return (
    <div>
      <h2>GET Method</h2>
      <button onClick={() => getAPIMethod()}>Get API</button>
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