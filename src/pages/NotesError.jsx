import { Link, useRouteError } from "react-router-dom";

const NotesError = () => {
    const error = useRouteError()

    return (
        <div className="notes-error">
            <h2>Error</h2>
            <p>{error.message}</p>
            <Link to="/">Back to homepage</Link>
        </div>
    );
}
 
export default NotesError;