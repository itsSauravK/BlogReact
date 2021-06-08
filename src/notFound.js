import {Link} from 'react-router-dom';
const NotFound = () => {
    return(
        <div className="not-found">
            <h2>Sorry, the page cannot be found</h2>
            <p>The page cannot be found</p>
            <Link to="/">Go to Home page </Link>

        </div>
    );
}

export default NotFound;