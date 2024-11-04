import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";



const Root = () => {
    return (
        <div className="h-[700px] py-100">
            <Navbar />
            <main>
                <Outlet />
            <Footer></Footer>
            </main>
        </div>
    );
};

export default Root;
