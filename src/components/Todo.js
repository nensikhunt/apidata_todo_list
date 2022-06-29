import axios from 'axios';
import { useEffect, useState } from 'react';
import './Todo.css';

function Todo() {
    const [data, setdata] = useState([]);
    const [title, settitle] = useState("");
    const [button, setbutton] = useState(false)
    const [id, setId] = useState('')
    useEffect(() => {
        axios.get("http://localhost:5000/notes")
            .then((response) => {
                setdata(response.data);
            })
            .catch((e) => {
                console.log(e);
            })
    }, [])
    const changetitle = (e) => {
        settitle(e.target.value);
        console.log(e.target.value);
    }
    const addtitle = () => {
        axios.post("http://localhost:5000/notes", { title: title })
            .then((response) => {
                console.log(response.data);
                window.location.reload();
            })
            .catch((e) => {
                console.log(e);
            })
        window.location.reload();
    }
    const updatetitle=(e)=>{
        axios.put(`http://localhost:5000/notes/${id}`, { title: title })
            .then((response) => {
                console.log(response.data);
            })
            .catch((e) => {
                console.log("add  error", e);
            })
        window.location.reload();

    }
    const handleupdate = (e, id) => {
        setbutton(true)
        setId(id)
        console.log("id=",id);
        axios.get(`http://localhost:5000/notes/${id}`)
            .then((response) => {
                settitle(response.data.title)
            })
            .catch((e) => {
                console.log("error", e);
            })
    }
    const handledelete = (id) => {
        axios.delete(`http://localhost:5000/notes/${id}`)
            .then((response) => {
                console.log(response);
            })
            .catch((e) => {
                console.log(e);
            })
        window.location.reload();
    }
    return (
        <>
            <div className={"todo-main-div"}>
                <h3 className={'todo-heading'}>{
                    button===false?"add a new todo":"update todo"
                }</h3>
                <input type={"text"} name={"title"} value={title} onChange={changetitle} placeholder={"add title"} className={"input-title"} /><br />
                {
                    button===false?<button className={"button"} onClick={addtitle}>add title</button>:<button className={"button"} onClick={updatetitle}>update title</button>
                }
            </div>


            
            <ul>
                {
                    data.map((value, index) => {
                        return (
                            <li key={index}>{value.title} <button onClick={(e) => handleupdate(e, value._id)}>update</button> <button onClick={() => handledelete(value._id)}>delete</button></li>
                        )
                    })
                }
            </ul>
        </>
    );
}

export default Todo;