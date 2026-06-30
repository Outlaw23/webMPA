import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";

import Home from "./pages/home/Home";
import Genres from "./pages/genres/Genres.jsx";
import HadoR from "./pages/Songs/Songs.jsx";
import Learn from "./pages/learn/Learn";
import Info from "./pages/info/Info";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/hado" element={<Genres />} />
                    <Route path="/hador" element={<HadoR />} />
                    <Route path="/learn" element={<Learn />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="*" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;