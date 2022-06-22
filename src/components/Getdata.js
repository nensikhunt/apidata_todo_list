import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
function Fetchapi() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/notes")
            .then((response) => {
                setData(response.data);
            })
            .catch((e) => {
                console.log(e);
            })
    }, [])
    return (
        <>
            {
                data.map((value) => {
                    return (
                        <div key={value._id}>
                            <a href={`/update/${value._id}`}><h1>{value.title}</h1></a>
                            <p>{value.content}</p>
                        </div>
                    )
                })
            }
        </>
    );
}

export default Fetchapi;