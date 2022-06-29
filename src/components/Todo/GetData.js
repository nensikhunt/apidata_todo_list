import { useEffect, useState } from "react";
import axios from "axios";
import UpdateData from "./UpdateData";
import AddData from "./AddData";
function GetData() {
    const [data, setData] = useState([])
    const [display, setDisplay] = useState(false)
    const [id, setId] = useState("")
    useEffect(() => {
        axios.get("http://localhost:5000/notes")
            .then((response) => {
                setData(response.data)
            })
            .catch((e) => {
                console.log("error", e);
            })
    }, [])
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/notes/${id}`)
            .then((response) => {
                console.log(response);
                window.location.href = "http://localhost:3000";
            })
            .catch((e) => {
                console.log(e);
            })
    }
    const handleUpdate = (id) => {
        setDisplay(true)
        setId(id)
    }
    return (
        <>
            {
                display ? <UpdateData id={id} /> : <AddData />
            }
            {
                data.map((data) => {
                    return (
                        <div key={data._id} className={"main-div"}>
                            <div className={"outer-div"}>
                            <div className={"inner-div"}>
                                {data.title}
                            </div>
                            <div className={"inner-div"}>
                                <button onClick={() => handleUpdate(data._id)}>Update</button>
                                <button onClick={() => handleDelete(data._id)}>Delete</button>
                            </div>
                        </div>
                        </div>
                    )
                })
            }
        </>
    );
}

export default GetData;