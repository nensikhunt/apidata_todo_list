import axios from "axios";

function Deletedata() {
    let _id=window.location.href.split('update/')[1];
    const deleteNotes = async () => {
        await axios.delete(`http://localhost:5000/notes/${_id}`)
            .then((response) => {
                alert(`${_id} delete data sucessfully`)
            })
            .catch((e) => {
                console.log(e);
            })
    }
    return (
        <>
            <button onClick={deleteNotes}>delete</button>
        </>
    );
}

export default Deletedata;