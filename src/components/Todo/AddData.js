import { useState } from "react";
import axios from 'axios';
function AddData() {
    const [notesData, setnotesData] = useState({
        title: ''
    })
    const handleChange = (e) => {
        setnotesData({
            ...notesData,
            [e.target.name]: e.target.value
        })
    }
    const addNotes = () => {
        axios.post("http://localhost:5000/notes", notesData)
            .then((response) => {
                console.log(response.data);
                window.location.href="http://localhost:3000";
            })
            .catch((e) => {
                console.log("add  error", e);
            })
    }
    return (
        <>
            <h1>Add Data</h1>
            <input type="text" name="title" value={notesData.title} placeholder={"title"} onChange={handleChange} />
            <button onClick={addNotes}>Add</button>
        </>
    );
}

export default AddData;