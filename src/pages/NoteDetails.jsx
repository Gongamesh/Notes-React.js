import { useEffect, useState } from "react";
import { redirect, replace, useLoaderData, useNavigate, useParams } from "react-router-dom";

const NoteDetails = () => {
    const {id} = useParams();
    // const [note, setNote] = useState('null');
    // const [loading, setLoading] = useState(true);
    let navigate = useNavigate();
    const note = useLoaderData();

    // useEffect(() => {
    //     fetch('http://localhost:4000/notes/' +id)
    //     .then(res => {
    //         if (!res.ok) {
    //             throw new Error("Could not fetch the data");
    //         }
    //         return res.json();
    //     })
    //     .then(data => {
    //         setNote(data);
    //         setLoading(false);
    //     })
    //     .catch(err => console.error(err));
    // }, [id]);

    const handleClick = () => {
        fetch('http://localhost:4000/notes/' +id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/notes', {replace: true});
        })
    }

    return (
        <div className="note-details">
            <h1>{note.title}</h1>
            <p>{note.category}</p>
            <div className="note-desc">
                <p>{note.description}</p>
                <button onClick={handleClick}>Delete</button>
            </div>
        </div>
    );
}

export const noteDetailsLoader = async({ params }) => {
    const { id } = params;

    const res = await fetch('http://localhost:4000/notes/' +id);

    if (!res.ok) {
        throw new Error("Could not find that note.");
    }

    return res.json();
}
 
export default NoteDetails;