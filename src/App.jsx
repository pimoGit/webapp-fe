// import './App.css'

// import delle pages
import HomePage from './pages/HomePage'
import BookPage from './pages/BookPage'
import NotFoundPage from './pages/NotFoundPage'
// import layout
import DefaultLayout from './layouts/DefaultLayout'

// import degli elemnti React di gestione router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import del provider context globale
import { GlobalProvider } from './contexts/GlobalContext'



function App() {

    return (
        <>
            <GlobalProvider>
                <BrowserRouter>
                    <Routes>
                        <Route element={<DefaultLayout />}>
                            <Route index element={<HomePage />} />
                            <Route path='/books/:id' element={<BookPage />} />
                            <Route path='*' element={<NotFoundPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </GlobalProvider>
        </>
    )
}

export default App
