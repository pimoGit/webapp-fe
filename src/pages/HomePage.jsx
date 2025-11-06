// import axios
import axios from "axios"

// import state e effetc
import { useState, useEffect } from "react"

// import comp card libro
import BookCard from "../components/BookCard"

// import hook per contesto
import { useGlobal } from "../contexts/GlobalContext"


// creazione componente Header
const HomePage = () => {

    // funzione di deelay solo per test sviluppo
    // function deelayLoading() {
    //     setIsLoading(false)
    // }

    // etrapoliamo da context var di stato
    const { setIsLoading } = useGlobal();

    // prepariamo var di stato libri
    const [books, setBooks] = useState([]);

    // prepariamo funzione per la chiamata axios
    const fecthBooks = () => {
        setIsLoading(true);
        axios.get('http://localhost:3000/api/books')
            .then(response => { setBooks(response.data) })
            .catch(error => { console.log(error) })
            .finally(() => { setIsLoading(false) })
    }

    // faccio partire la chiamata a primo montaggio comp
    useEffect(fecthBooks, []);

    // funzione di generazione istanze libri
    const renderBooks = () => {
        return books.map(book => {
            return (
                <div className="col" key={book.id}>
                    <BookCard bookProp={book} />
                </div>
            )
        })
    }

    return (
        <>
            <h1 className="text-primary">Bool Books</h1>
            <h2><i>The nerdest book community</i></h2>
            <div className="row row-cols-3 mt-4">
                {renderBooks()}
            </div>
        </>

    )
}

export default HomePage