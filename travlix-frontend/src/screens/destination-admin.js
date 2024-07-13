import React, {useState} from 'react';
import axios from "axios";

const DestinationAdminPage = () => {

    const [destinationForm, uploadDestinationForm] = useState({
        name : "",
        image : "",
        count : ""
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
        // console.log(destinationForm);
        const url = "http://localhost:4000/api/destinaiton/add";
        axios.post(url, destinationForm)
            .then((resposne) => {
                alert(resposne.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <h2>Destination Admin</h2>
            <div>
                <label>Enter Destination Name</label>
                <input type='text' placeholder='Destination Name' onChange={handleInput} name='name'/>
            </div>
            <div>
                <label>Upload Destination Image</label>
                <input type='file' onChange={uploadImage} name='image'/>
            </div>
            <div>
                <label>Enter Destination Count</label>
                <input type='text' placeholder='Destination Count' onChange={handleInput} name='count'/>
            </div>
            <div>
                <button onClick={() => uploadDestination()}>Upload Destination</button>
            </div>
        </div>
    );
};

export default DestinationAdminPage;