import { useState } from "react";
import axios from 'axios';

function UpdateData(props) {
    const [notesData, setnotesData] = useState({
        title: ''
    })
    const handleChange = (e) => {
        setnotesData({
            ...notesData,
            [e.target.name]: e.target.value
        })
    }
    const updateNotes = async () => {
        await axios.put(`http://localhost:5000/notes/${props.id}`, notesData)
            .then((response) => {
                console.log(response.data);
                window.location.href="http://localhost:3000";
            })
            .catch((e) => {
                console.log(e);
            })

    }
    return (
        <>
            <h1>Update Data</h1>
            <input type="text" name="title" value={notesData.title} onChange={handleChange} placeholder={"title"} />
            <button onClick={updateNotes}>Update</button>
        </>
    );
}

export default UpdateData;