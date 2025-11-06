// importo Outlet per gestione comp su rotte
import { Outlet } from "react-router-dom"

// importo comp Header
import Header from "../components/Header"
// import comp loader
import Loader from "../components/Loader"

// import hook per contesto
import { useGlobal } from "../contexts/GlobalContext"


// creazione componente Layout DefaultLayout
const DefaultLayout = () => {

    // etrapoliamo da context var di stato
    const { isLoading } = useGlobal();


    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
            {/* se var è true renderizza comp */}
            {isLoading && <Loader />}
        </>
    )
}

export default DefaultLayout