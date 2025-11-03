// import di router-dom per link
import { Link } from "react-router-dom"

// creazione componente Header
const BookCard = () => {
    return (
        <div className="card mb-4">
            <img src="http://grupoalmuzara.com/libro/9788417954611_portada.jpg" alt="titolo libro" />
            <div className="card-body">
                <h5 className="card-title">Titolo Libro</h5>
                <address><i>Autore</i></address>
                <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quam! Quaerat molestias autem hic neque quia quod asperiores, vel veniam mollitia repellat illo repudiandae praesentium qui deserunt velit adipisci explicabo!
                </p>
                <Link to="books/1" className="btn btn-primary">
                    See more
                </Link>
            </div>
        </div>
    )
}

export default BookCard