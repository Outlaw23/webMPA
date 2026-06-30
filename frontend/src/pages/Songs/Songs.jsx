import "./Songs.css";
import { useEffect, useState } from "react";

function Songs() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/songs")
            .then((response) => response.json())
            .then((data) => setSongs(data))
            .catch((error) => console.error("Fout:", error));
    }, []);

    return (
        <div className="songs-container">
            <h1>Songs</h1>

            {songs.map((song) => (
                <div key={song.id} className="song-card">
                    <p>Name: {song.title}</p>
                </div>
            ))}
        </div>
    );
}

export default Songs;