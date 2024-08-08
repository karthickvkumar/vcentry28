import React, {useRef} from 'react';

const Uncontrolled = () => {

    const nameInput = useRef();
    const ageInput = useRef();

    const submit = () => {
        console.log(nameInput.current.value);
        console.log(ageInput.current.value);
        nameInput.current.focus();
    }

    return (
        <div>
            <label>Enter Name:</label>
            <input type="text" ref={nameInput} />
            <label>Enter Age:</label>
            <input type="text" ref={ageInput}/>
            <br></br>
            <button onClick={() => submit()}>Submit</button>
        </div>
    );
};

export default Uncontrolled;