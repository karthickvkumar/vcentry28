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

  let [errorForm, updateError] = useState({
    username : false,
    age : false,
    dateOfBirth: false,
    inTime :false,
    gender: false,
    hobbies : false,
    qualification: false,
    address : false
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
    console.log(profileForm);

    updateError({...errorForm, 
      username : profileForm.username == "" ? true : false,
      age : profileForm.age == "" ? true : false,
      dateOfBirth: profileForm.dateOfBirth == "" ? true : false,
      inTime :profileForm.inTime == "" ? true : false,
      gender: profileForm.gender == "" ? true : false,
      hobbies : profileForm.hobbies.length === 0 ? true : false,
      qualification: profileForm.qualification == "" ? true : false,
      address : profileForm.address == "" ? true : false,
    })
  }

  return (
    <div>
      <h2>Profile Information</h2>
      <div>
        <div className='bottom-space'>
          <label className='lableText'>Enter your User Name</label>
          <input type='text' name='username' placeholder='Enter username' onChange={handleInputField} />
          {errorForm.username && <span className='error-msg'>Username should not be empty</span>}
        </div>
        <div className='bottom-space'>
          <label className='lableText'>Enter your Age</label>
          <input type='number' name='age' placeholder='Enter age' onChange={handleInputField}/>
          {errorForm.age && <span className='error-msg'>Age should not be empty</span>}
        </div>
        <div className='bottom-space'>
          <label className='lableText'>Select D.O.B</label>
          <input type='date' name='dateOfBirth' onChange={handleInputField}/>
          {errorForm.dateOfBirth && <span className='error-msg'>D.O.B should not be empty</span>}
        </div>
        <div className='bottom-space'>
          <label className='lableText'>Enter you In Time</label>
          <input type='time' name='inTime' onChange={handleInputField}/>
          {errorForm.inTime && <span className='error-msg'>In Time should not be empty</span>}
        </div>
        <div className='bottom-space'>
          <label className='lableText'>Select you Gender</label>
          <input type='radio' value='Male' name="gender" onChange={handleInputField}/>Male
          <input type='radio' value='Female' name="gender" onChange={handleInputField}/>Female
          <input type='radio' value='Others' name="gender" onChange={handleInputField}/>Others

          {errorForm.gender && <span className='error-msg'>Gender should not be empty</span>}
        </div>
        <div className='bottom-space'>
          <label className='lableText'>Select you Hobbies</label>
          <input type='checkbox' name='hobbies' value='Cricket' onChange={handleInputField}/>Cricket
          <input type='checkbox' name='hobbies' value='Football' onChange={handleInputField}/>Football
          <input type='checkbox' name='hobbies' value='Chess' onChange={handleInputField}/>Chess
          <input type='checkbox' name='hobbies' value='Basketball' onChange={handleInputField}/>Basketball
          <input type='checkbox' name='hobbies' value='Hockey' onChange={handleInputField}/>Hockey

          {errorForm.hobbies && <span className='error-msg'>Hobbies should not be empty</span>}
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
          {errorForm.qualification && <span className='error-msg'>Qualification should not be empty</span>}
        </div>
        <div className='bottom-space'>
          <label className='lableText'>Enter your Address</label>
          <textarea name='address' placeholder='Enter address' onChange={handleInputField}></textarea>
          {errorForm.address && <span className='error-msg'>Address should not be empty</span>}
        </div>
        <div className='bottom-space'>
          <button onClick={() => submitFrom()}>Submit Form</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;