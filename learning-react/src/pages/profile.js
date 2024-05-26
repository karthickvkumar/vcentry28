import React, {useState} from 'react';

const ProfilePage = () => {

  let [profileForm, updateProfile] = useState({
    username : "",
    age : "",
    dateOfBirth: "",
    inTime :"",
    gender: "",
    hobbies : [],
    qualification: "",
    address : ""
  });

  const handleInputField = (event) => {
    // console.log(event.target.value, event.target.name);
    if(event.target.name === "hobbies"){
      if(event.target.checked){
        profileForm.hobbies.push(event.target.value);
      }
      else{
        let index = profileForm.hobbies.indexOf(event.target.value);
        profileForm.hobbies.splice(index, 1);
      }
    }
    else{
      updateProfile({...profileForm, [event.target.name] :  event.target.value });
    }
  } 

  const submitFrom = () => {
    console.log(profileForm)
  }

  return (
    <div>
      <h2>Profile Information</h2>
      <div>
        <div className='bottom-space'>
          <label className='lableText'>Enter your User Name</label>
          <input type='text' name='username' placeholder='Enter username' onChange={handleInputField} />
        </div>
        <div className='bottom-space'>
          <label className='lableText'>Enter your Age</label>
          <input type='number' name='age' placeholder='Enter age' onChange={handleInputField}/>
        </div>
        <div className='bottom-space'>
          <label className='lableText'>Select D.O.B</label>
          <input type='date' name='dateOfBirth' onChange={handleInputField}/>
        </div>
        <div className='bottom-space'>
          <label className='lableText'>Enter you In Time</label>
          <input type='time' name='inTime' onChange={handleInputField}/>
        </div>
        <div className='bottom-space'>
          <label className='lableText'>Select you Gender</label>
          <input type='radio' value='Male' name="gender" onChange={handleInputField}/>Male
          <input type='radio' value='Female' name="gender" onChange={handleInputField}/>Female
          <input type='radio' value='Others' name="gender" onChange={handleInputField}/>Others
        </div>
        <div className='bottom-space'>
          <label className='lableText'>Select you Hobbies</label>
          <input type='checkbox' name='hobbies' value='Cricket' onChange={handleInputField}/>Cricket
          <input type='checkbox' name='hobbies' value='Football' onChange={handleInputField}/>Football
          <input type='checkbox' name='hobbies' value='Chess' onChange={handleInputField}/>Chess
          <input type='checkbox' name='hobbies' value='Basketball' onChange={handleInputField}/>Basketball
          <input type='checkbox' name='hobbies' value='Hockey' onChange={handleInputField}/>Hockey
        </div>
        <div className='bottom-space'>
          <label className='lableText'>Enter your Qualification</label>
          <select name='qualification' defaultValue={""} onChange={handleInputField}>
            <option disabled value="">Select your Highest Qualification</option>
            <option>SSLC</option>
            <option>HSC</option>
            <option>Bachelor of Arts & Science</option>
            <option>Bachelor of Engineering</option>
            <option>Bachelor of IT</option>
            <option>Master Degree</option>
          </select>
        </div>
        <div className='bottom-space'>
          <label className='lableText'>Enter your Address</label>
          <textarea name='address' placeholder='Enter address' onChange={handleInputField}></textarea>
        </div>
        <div className='bottom-space'>
          <button onClick={() => submitFrom()}>Submit Form</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;