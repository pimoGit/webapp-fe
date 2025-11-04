// import axios
import axios from "axios"

// import state e effetc
import { useState, useEffect } from "react"

// import comp card libro
import BookCard from "../components/BookCard"


// creazione componente Header
const HomePage = () => {

    // prepariamo var di stato libri
    const [books, setBooks] = useState();

    // prepariamo funzione per la chiamata axios
    const fecthBooks = () => {
        axios.get('http://localhost:3000/api/books')
            .then(response => { setBooks(response.data) })
            .catch(error => { console.log(error) })
    }

    // faccio partire la chiamata a primo montaggio comp
    useEffect(fecthBooks, []);

    return (
        <>
            <h1 className="text-primary">Bool Books</h1>
            <h2><i>The nerdest book community</i></h2>
            <div className="row row-cols-3 mt-4">
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </div>
        </>

    )
}

export default HomePage