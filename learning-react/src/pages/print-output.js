import React, {useState} from 'react';

const PrintOutputPage = () => {

  // let [variableName, functionName] = useState(initailData);
  let [contentMessage, updateContentMessage] = useState("Hello useState!");

  var username = "karthickkumar";  // Function Scope (Local scope)
  let name = ""; // Block level scope (Local scope)
  const age = 10;
  // Interpolation {variableName}   -- Primitive type

  var userDetails = {
    firstName : "karthick",
    lastName : "kumar"
  }
  // Object - {objectVariableName.key}

  var userDetailList = [ 
    {
      firstName : "mr.abc",
      lastName : "123"
    },
    {
      firstName : "mr.def",
      lastName : "456"
    },
    {
      firstName : "mr.ghi",
      lastName : "789"
    },
  ]

  var finalResult = userDetailList.map(function(value, index){
    return(
      <li key={index}>User Full name is {value.firstName} {value.lastName}</li>
    )
  });

  /*
  Callback Function  () => {}
  variableName.map((value, index) => {

  })
 */
  console.log(finalResult);
  
  function displays(){
    // ES5 Function Syntax
    //Function Level Scope
    if(true){
      //Block Level Scope
      var userOld = "ES5";
      let userNew = "ES6";   // can reassign value
      const userConst = "ES100";   // cannot reassign value
      console.log(userNew); 
      console.log(userConst);  
   
      //Edit
      userOld = "0000";
      userNew = "1111"; 
      userConst = "2222";
      console.log(userNew); 
    }
     console.log(userOld);
  }

  let userMessage = "Hello";

  const display = () => {
    // ES6 Function Syntax
    const message = "Hello! Good Day";
    alert(message);
  }

  const getInputValue = (event) => {
    // console.log(event.target.value);
    userMessage = event.target.value;
    console.log(userMessage);

    //dynamic variable
    updateContentMessage(event.target.value);
  }

  
  return (
    <div>
      <h1>Printing a Variable value into HTML</h1>
      <h2>The username is {username}</h2>
      <h2>Full name is {userDetails.firstName} {userDetails.lastName}</h2>

      <ol>
        {finalResult}
      </ol>

      <button onClick={() => display()}>Display</button>
      <br/>

      <input type="text" placeholder="Enter any message" onChange={getInputValue} />
      <h2>{userMessage}</h2>
      <h2>{contentMessage}</h2>
    </div>
  );
};

export default PrintOutputPage;