import { useEffect, useState } from "react";
import "./Hado.css";

function Hado() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/songs")
            .then((response) => response.json())
            .then((data) => setSongs(data))
            .catch((error) => console.error("Fout:", error));
    }, []);

    return (
        <div className="hado-container">
            <h1>Songs</h1>

            {songs.map((song) => (
                <div key={song.id} className="song-card">
                    <h3>{song.title}</h3>
                    <p>🎤 {song.artist}</p>
                    <p>💿 {song.album}</p>
                </div>
            ))}
        </div>
    );
}

export default Hado;