// import comp card libro
import BookCard from "../components/BookCard"


// creazione componente Header
const HomePage = () => {
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