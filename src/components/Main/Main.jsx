import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useState } from "react";
import ColorPalette from "../Shared/ColorPalette/ColorPalette";


const Main = () => {
    const [themeColor, setThemeColor] = useState("amber-500");

    return (
        <div className={`flex flex-col min-h-screen mx-auto text-${themeColor}`}>
            <Navbar></Navbar>
            <ColorPalette setThemeColor={setThemeColor} />
            <main className="flex-grow">
        <Outlet />
      </main>
            <Footer></Footer>
        </div>
    );
};

export default Main;