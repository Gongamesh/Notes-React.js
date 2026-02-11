import { useState } from "react";
import { Form, redirect, useActionData } from "react-router-dom";

const AddNote = () => {
    const [category, setCategory] = useState('other');
    const data = useActionData();

    return ( 
        <div className="add">
            <h3>Create new note</h3>
            <Form method="post" action="/new">
                <label>
                    <span>Title:</span>
                    <input type="text" name="title" required />
                </label>
                <label>
                    <span>Description:</span>
                    <textarea name="body" required></textarea>
                </label>
                <label>
                    <span>Category:</span>
                    <select name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="work">Work</option>
                        <option value="personal">Personal</option>
                        <option value="ideas">Ideas</option>
                        <option value="health">Health</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <button>Submit</button>
            </Form>
            {data && <p>{data.title + data.description + data.category}</p>} 
        </div>
     );
}

export const addNoteAction = async ({request}) => {
    const data = await request.formData();

    const submission = {
        title: data.get('title'),
        description: data.get('body'),
        category: data.get('category')
    }

    const res = await fetch('http://localhost:4000/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(submission)
    })

    return redirect('/notes');
}
 
export default AddNote;