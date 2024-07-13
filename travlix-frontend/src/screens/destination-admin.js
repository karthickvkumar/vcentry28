import React, {useState} from 'react';

const DestinationAdminPage = () => {

    const [destinationForm, uploadDestinationForm] = useState({
        destinationName : "",
        destinationImage : "",
        destinationCount : ""
    });

    const uploadImage = (event) => {
        //console.log(event.target.files);
        const reader = new FileReader();
        const file = event.target.files[0];

        reader.readAsDataURL(file);

        reader.onload = () => {
            console.log(reader.result);
            uploadDestinationForm({...destinationForm, [event.target.name] : reader.result })
        }
    }

    const handleInput = (event) => {
        uploadDestinationForm({...destinationForm, [event.target.name] : event.target.value })
    }

    const uploadDestination = () => {
        console.log(destinationForm);
    }

    return (
        <div>
            <h2>Destination Admin</h2>
            <div>
                <label>Enter Destination Name</label>
                <input type='text' placeholder='Destination Name' onChange={handleInput} name='destinationName'/>
            </div>
            <div>
                <label>Upload Destination Image</label>
                <input type='file' onChange={uploadImage} name='destinationImage'/>
            </div>
            <div>
                <label>Enter Destination Count</label>
                <input type='text' placeholder='Destination Count' onChange={handleInput} name='destinationCount'/>
            </div>
            <div>
                <button onClick={() => uploadDestination()}>Upload Destination</button>
            </div>
        </div>
    );
};

export default DestinationAdminPage;