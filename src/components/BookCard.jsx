// import di router-dom per link
import { Link } from "react-router-dom"

// creazione componente Header
const BookCard = ({ bookProp }) => {

    // destrutturiamo oggetto passato da props
    const { id, title, author, abstract, image } = bookProp;

    return (
        <div className="card mb-4">
            <img src={image} alt={title} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <address><i>{author}</i></address>
                <p className="card-text">
                    {abstract}
                </p>
                <Link to={`books/${id}`} className="btn btn-primary">
                    See more
                </Link>
            </div>
        </div>
    )
}

export default BookCard