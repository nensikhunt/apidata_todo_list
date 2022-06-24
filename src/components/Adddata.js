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
                window.location.href="http://localhost:3000";
            })
            .catch((e) => {
                console.log(e);
            })
            window.location.reload();

        setnotesData({
            ...notesData,
            title: "",
            content: ""
        })
    }

    return (
        <>
            <input type={"text"} name={'title'} placeholder={"title"} value={notesData.title} onChange={adddataChange} />
            <input type={"text"} name={'content'} placeholder={"content"} value={notesData.content} onChange={adddataChange} />
            <button onClick={addNotes}><i className={"fa fa-plus"}></i></button>
        </>
    );
}

export default Adddata;