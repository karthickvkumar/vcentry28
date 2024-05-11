import React from 'react';

const PrintOutputPage = () => {

  var username = "karthickkumar";
  // Interpolation {variableName}   -- Primitive type

  var userDetails = {
    firstName : "karthick",
    lastName : "kumar"
  }
  // Object - {variableName.key}

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
  })

  console.log(finalResult);

  return (
    <div>
      <h1>Printing a Variable value into HTML</h1>
      <h2>The username is {username}</h2>
      <h2>Full name is {userDetails.firstName} {userDetails.lastName}</h2>

      <ol>
        {finalResult}
      </ol>
    </div>
  );
};

export default PrintOutputPage;