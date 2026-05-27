import Navbar from "./navbar/Navbar.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="layout">

            <Navbar />

            <main className="content">
                <Outlet />
            </main>

            <Footer />

        </div>
    );
}

export default Layout;