import axios from "axios";
import { useEffect } from "react";

function Deletedata(props) {
    let _id;
    useEffect(() => {
        if (window.location.href.includes("delete")) {
            _id = window.location.href.split("delete/")[1];
            console.log(_id);
            axios.delete(`http://localhost:5000/notes/${_id}`)
                .then((response) => {
                    console.log(_id);
                    window.location.href="http://localhost:3000";
                })
                .catch((e) => {
                    console.log(_id);
                    console.log(e);
                })  
        }
    }, []);

    return (
        <>
        </>
    );
}

export default Deletedata;