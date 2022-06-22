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
            title:
            <input type={"text"} name={'title'} value={notesData.title} onChange={adddataChange} required /><br />
            content:
            <input type={"text"} name={'content'} value={notesData.content} onChange={adddataChange} required /><br />
            <button onClick={addNotes}>add</button>
        </>
    );
}

export default Adddata;