import { Link } from "react-router-dom";

const Notes = ({id, title, category}) => {
    return ( 
        <div className="notes">
            <Link to={id.toString()}>
                <h2>{title}</h2>
                <p>{category} &gt;</p>
            </Link>
        </div>
     );
}
 
export default Notes;