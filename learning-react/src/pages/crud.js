import React, {useState} from 'react';
import axios from 'axios';

const CRUDOperationPage = () => {

  const [studentList, updateStudentList] = useState([]);

  const loadStudentDetails = () => {
    const url = "http://localhost:5000/api/list/students";

    axios.get(url)
      .then((response) => {
        updateStudentList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  let record = studentList.map((value, index) => {
    return(
      <div key={index} className='student-list'>
        <h3>{value.name}</h3>
        <h3 className='hello'>{value.age}</h3>
        <h3>{value.location}</h3>
      </div>
    )
  })

  return (
    <div>
      <h2>Student's Details here,</h2>
      <button onClick={() => loadStudentDetails()}>Load Student's details</button>
      <div className='student-container'>
        {record}
      </div>
    </div>
  );
};

export default CRUDOperationPage;