import React, {useState} from 'react';
import axios from 'axios';

const CRUDOperationPage = () => {

  const [studentList, updateStudentList] = useState([]);
  const [studentForm, submitStudentForm] = useState({
    name : "",
    age : "",
    location: ""
  })

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
        <button onClick={() => deleteStudent(value.id)}>Delete</button>
      </div>
    )
  });

  const deleteStudent = (id) => {
    const url = "http://localhost:5000/api/delete/student/" + id;

    axios.delete(url)
      .then((response) => {
        alert(response.data);
        loadStudentDetails();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const handleInputField = (event) => {
    submitStudentForm({...studentForm, [event.target.name] : event.target.value });
  }

  const uploadStudnetDetails = () => {
    console.log(studentForm);

    const url = "http://localhost:5000/api/create/student";
    axios.post(url, studentForm)
      .then((response) => {
        alert(response.data);
        loadStudentDetails();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div>
      <h2>Create Student Information</h2>
      <input type='text' name="name" placeholder='Enter your Name' onChange={handleInputField} />
      <input type='text' name="age" placeholder='Enter your Age' onChange={handleInputField}/>
      <input type='text' name="location" placeholder='Enter your Location' onChange={handleInputField}/>
      <button onClick={() => uploadStudnetDetails()}>Submit</button>

      <h2>Student's Details here,</h2>
      <button onClick={() => loadStudentDetails()}>Load Student's details</button>
      <div className='student-container'>
        {record}
      </div>
    </div>
  );
};

export default CRUDOperationPage;