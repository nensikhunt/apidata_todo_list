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
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>content</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((value, index) => {
                            return (
                                <tr key={value._id}>
                                    <td><a href={`/update/${value._id}`}>{index}</a></td>
                                    <td>{value.title}</td>
                                    <td>{value.content}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default Fetchapi;