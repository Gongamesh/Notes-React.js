import { useLoaderData } from "react-router-dom";
import Notes from "../components/Notes";
import { useState } from "react";

const AllNotes = () => {
    const allNotes = useLoaderData();
    const [category, setCategory] = useState('all');
    const notes = category === 'all' ? allNotes : allNotes.filter(note => note.category === category);
    

    return ( 
        <div className="all-notes">
                <label>
                    <span>Category: </span>
                    <select name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >                        
                        <option value="all">All</option>
                        <option value="work">Work</option>
                        <option value="personal">Personal</option>
                        <option value="ideas">Ideas</option>
                        <option value="health">Health</option>
                        <option value="other">Other</option>

                    </select>
                </label>
            {notes && notes.error && <p>{notes.error}</p>}
            {notes && notes.map(note => (
                <Notes id={note.id} title={note.title} category={note.category} key={note.id}/>
            ))}
        </div>
     );
}

export const notesLoader = async () => {
    const res = await fetch('http://localhost:4000/notes');

    if (!res.ok) {
        throw new Error("Could not fetch the notes.");
    }

    return res.json();
}
 
export default AllNotes;