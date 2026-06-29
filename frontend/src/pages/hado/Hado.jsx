import { useEffect, useState } from "react";
import "./Hado.css";

function Hado() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/genres")
            .then((response) => response.json())
            .then((data) => setGenres(data))
            .catch((error) => console.error("Fout:", error));
    }, []);

    return (
        <div className="hado-container">
            <h1>Genres</h1>

            {genres.map((genre) => (
                <div key={genre.id} className="song-card">
                    <p>{genre.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Hado;