// import di router-dom per link
import { Link } from "react-router-dom"

// creazione componente Header
const Header = () => {
    return (
        <nav className="navbar bg-body-tertiary mb-4">
            <div className="container-fluid justify-content-start">
                <Link className="navbar-brand" to="/">Bool Books</Link>
                <Link className="navbar-brand btn-secondary" to="/books/create">Add Books</Link>
            </div>
        </nav>
    )
}

export default Header