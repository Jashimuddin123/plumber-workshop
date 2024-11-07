import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full bg-sky-500 py-4 md:h-24 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 px-4">
        <p className="text-sm md:text-lg text-white text-center md:text-left">
          Avrotros broadcast about rogue plumbers who abuse our company name! Don't fall for this!
        </p>
        <button className="bg-black px-6 md:px-10 rounded-full text-white py-2 md:py-3">More Info</button>
      </div>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
