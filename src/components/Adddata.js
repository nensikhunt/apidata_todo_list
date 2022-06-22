import axios from "axios";
import { useState } from "react";
function Adddata() {
    const [notesData, setnotesData] = useState({
        title: "",
        content: ""
    })
    const adddataChange = (e) => {
        setnotesData({
            ...notesData,
            [e.target.name]: e.target.value
        })
    }
    const addNotes = async () => {
        await axios.post("http://localhost:5000/notes", notesData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            })
    }

    return (
        <>
                <input type={"text"} name={'title'} placeholder={"title"} value={notesData.title} onChange={adddataChange} required />
                <input type={"text"} name={'content'} placeholder={"content"} value={notesData.content} onChange={adddataChange} required />
                <button onClick={addNotes}>add</button>
        </>
    );
}

export default Adddata;