import React, {useState} from "react";
import axios from "axios";

const AboutPage = () => {

  const [employeeList, updateEmployeeList] = useState([]);
  const [informationForm, submitInformationForm] = useState({
    "employeeName" : "",
    "designation" : "",
    "inTime" : "",
    "outTime" : "",
    "salary" : ""
  })

  const loadEmployeeList = () => {
    const url = "http://localhost:5000/api/employee/list";

    axios.get(url)
      .then((response) => {
        updateEmployeeList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  let result = employeeList.map((value, index) => {
    return(
      <tr key={index}>
        <td>{value.employeeName}</td>
        <td>{value.designation}</td>
        <td>{value.inTime}</td>
        <td>{value.outTime}</td>
        <td>{value.salary}</td>
        <td>
          <button>Delete</button>
        </td>
        <td>
          <button>Edit</button>
        </td>
      </tr>
    )
  })

  const handleInput = (event) => {
    submitInformationForm({...informationForm, [event.target.name] : event.target.value });
  }

  const uploadFormValue = () => {
    console.log(informationForm);

    const url = "http://localhost:5000/api/employee/create";

    axios.post(url, informationForm)
      .then((response) => {
        alert(response.data);
        loadEmployeeList();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return(
    <div>
      <h1>Welcome, About Us Page</h1>
      <div>
        <input type="text" name="employeeName" placeholder="Employee Name..." onChange={handleInput} />
        <input type="text" name="designation" placeholder="Employee Designation..." onChange={handleInput}/>
        <input type="number" name="salary" placeholder="Employee Salary.." onChange={handleInput} />
        <br/>
        
        <label>InTime</label><input type="time" name="inTime" onChange={handleInput}/>
        <label>OutTime</label><input type="time" name="outTime" onChange={handleInput} />
        <br/>
        <br/>
        <button onClick={() => uploadFormValue() }>Submit Employee Information</button>
        <br/>
      </div>
      <button onClick={() => loadEmployeeList()}>Load Employee List</button>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Employee Designation</th>
            <th>Employee InTime</th>
            <th>Employee OutTime</th>
            <th>Employee Salary</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {result}
        </tbody>
      </table>
    </div>
  )
}

export default AboutPage;