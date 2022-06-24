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
    }, []);
    let checked=[];
    const checkchange=(id)=>{
        checked.push(id);
    }
    const deleteall=()=>{
        checked.map((value)=>{
            axios.delete(`http://localhost:5000/notes/${value}`)
            .then((response) => {
                window.location.href="http://localhost:3000";
            })
            .catch((e) => {
                console.log(e);
            })
        })
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th><button onClick={deleteall}>delete</button></th>
                        <th>id</th>
                        <th>title</th>
                        <th>content</th>
                        <th>update</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((value, index) => {
                            return (
                                <tr key={value._id}>
                                    <td><input type={"checkbox"} name={"checkbox"} onChange={()=>checkchange(value._id)}/></td>
                                    <td>{index + 1}</td>
                                    <td>{value.title}</td>
                                    <td>{value.content}</td>
                                    <td><a href={`/update/${value._id}`}><i className={"fa fa-edit"}></i></a></td>
                                    <td><a href={`/delete/${value._id}`}><i className={"fas fa-trash"}></i></a></td>
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