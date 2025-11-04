// import axios
import axios from "axios"

// import di router-dom per link
import { Link, useParams, useNavigate } from "react-router-dom"

// import state e effetc
import { useState, useEffect } from "react"

// import comp singola review
import ReviewCard from "../components/ReviewCard"

// creazione componente Header
const BookPage = () => {

    // creiamo istanza di Navigate
    const redirect = useNavigate();

    // prepariamo var di stato libro
    const [book, setBook] = useState();

    // recuperiamo il parametro dinamico
    const { id } = useParams();

    // prepariamo funzione per la chiamata axios
    const fecthBook = () => {
        axios.get('http://localhost:3000/api/books/' + id)
            .then(response => { setBook(response.data) })
            .catch(error => {
                console.log(error)
                if (error.status === 404) redirect('/404')
            })
    }

    // faccio partire la chiamata a primo montaggio comp
    useEffect(fecthBook, []);

    // funzione di generazione istanze reviews
    const renderReviews = () => {
        return book?.reviews.map(review => {
            return (
                <ReviewCard reviewProp={review} key={review.id} />
            )
        })
    }

    return (
        <>
            <header id="book" className="border-bottom border-1 mb-3">
                <div className="d-flex mb-3">
                    <img src={book?.image} alt={book?.title} />
                </div>
                <h1>{book?.title}</h1>
                <h3 className="text-muted"><i>By {book?.author}</i></h3>
                <p>{book?.abstract}</p>
            </header>
            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                </header>
                {renderReviews()}
            </section>
            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>

        </>

    )
}

export default BookPage