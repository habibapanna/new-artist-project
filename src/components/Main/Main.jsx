import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const Main = () => {
    return (
        <div className="flex flex-col min-h-screen max-w-7xl mx-auto">
            <Navbar></Navbar>
            <main className="flex-grow">
        <Outlet />
      </main>
            <Footer></Footer>
        </div>
    );
};

export default Main;