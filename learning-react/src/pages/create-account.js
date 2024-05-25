import React, {useState} from 'react';

const CreateAccountPage = () => {

  let [accountForm, updateAccountForm] = useState({
    firtName : "", 
    lastName : "", 
    email: "" , 
    password : ""
  });

  // let accountList = [];
  let [accountList, updateAccountList ] = useState([]);

  const handleInputField = (event) => {
    updateAccountForm({...accountForm, [event.target.name] : event.target.value });
  }

  const submit = () => {
    console.log(accountForm);

    // accountList.push({...accountForm});

    updateAccountList([...accountList, accountForm])
  }

  let resultList = accountList.map((value, index) => {
    return(
      <tr key={index}>
        <td>{value.firtName}</td>
        <td>{value.lastName}</td>
        <td>{value.email}</td>
        <td>{value.password}</td>
    </tr>
    )
  })
  

  return (
    <div>
      <h2>Account Creation Form</h2>
      <div>
        <div className='bottom-space'>
          <label className='lableText'>Enter your First Name</label>
          <input type='text' name="firtName" placeholder='Enter first name' onChange={handleInputField} />
        </div>
        <div className='bottom-space'>
          <label className='lableText'>Enter your Last Name</label>
          <input type='text' name='lastName' placeholder='Enter last name' onChange={handleInputField}/>
        </div>
        <div className='bottom-space'>
          <label className='lableText'>Enter your Email ID</label>
          <input type='text' name='email' placeholder='Enter email' onChange={handleInputField}/>
        </div>
        <div className='bottom-space'>
          <label className='lableText'>Enter your Password</label>
          <input type='password' name='password' placeholder='Enter password' onChange={handleInputField}/>
        </div>
        <div className='bottom-space'>
          <button onClick={() => submit()}>Submit Form</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
            {resultList}
        </tbody>
      </table>
    </div>
  );
};

export default CreateAccountPage;