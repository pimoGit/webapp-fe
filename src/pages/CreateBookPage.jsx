import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import GlobalContext from '../contexts/globalContext';

const backendUrl = 'http://localhost:3000/api/books';

const initialData = {
    title: "",
    author: "",
    image: null,
    abstract: "",
};




const CreateBookPage = () => {

    // navigazione
    const navigate = useNavigate();

    // global context
    // const { setIsLoading } = useContext(GlobalContext);

    // states iniziali
    const [formData, setFormData] = useState(initialData);

    const setFieldValue = e => {
        const { value, name } = e.target;
        if (name === "image") setFormData({ ...formData, image: e.target.files[0] });
        else setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        // Accendiamo il loader e nascondiamo l'eventuale alert di errore già presente
        // setIsLoading(true);

        // Inviamo i dati al backend con axios e reindirizziamo alla home
        axios
            .post(backendUrl, formData, { headers: { "Content-Type": "multipart/form-data" } })
            .then(() => { navigate("/") })
            .catch((err) => {
                // Spegniamo il loader
                // setIsLoading(false)
                // setErrorAlert({ ...errorAlert, show: true });
                console.log(err);
            });

    };

    return (
        <>
            <header className="border-bottom border-1 mb-3">
                <h1>Add a new book</h1>
            </header>

            <section id="book-form">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label>Title:</label>
                        <input
                            className="form-control"
                            name="title"
                            type="text"
                            value={formData.title}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>Author:</label>
                        <input
                            className="form-control"
                            name="author"
                            type="text"
                            value={formData.author}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>Image:</label>
                        <input
                            className="form-control"
                            name="image"
                            type="file"
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>Abstract:</label>
                        <textarea
                            value={formData.abstract}
                            className="form-control"
                            name="abstract"
                            onChange={setFieldValue}
                            required
                        ></textarea>
                    </div>
                    <div className="border-top mb-3 pt-3 d-flex justify-content-between">
                        <Link className="btn btn-secondary" to="/">Back</Link>
                        <button className="btn btn-success" type="submit">
                            Add Book
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default CreateBookPage