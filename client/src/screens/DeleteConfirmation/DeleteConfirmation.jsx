import { Link } from 'react-router-dom'

const DeleteConfirmation = () => {
    return (
        <div>
            <h1>This page has been deleted. What would you like to do next?</h1>
            <Link to="/goodreads">
                <button>Back to books</button>
            </Link>
            <Link to="/">
                <button>Back to home</button>
            </Link>
        </div>
    )
}

export default DeleteConfirmation;