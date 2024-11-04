import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer bg-gray-800 text-white p-10 sticky  ">
            <nav className="flex">
                <img src="https://i.ibb.co/tD9ftcs/maestro-logo.gif" alt="Maestro Logo" />
                <img src="https://i.ibb.co/02BB91j/pin-logo-1.gif" alt="Pin Logo" />
                <img src="https://i.ibb.co/ncs6p7q/vpay-logo.gif" alt="VPay Logo" />
            </nav>
            <nav>
                <h6 className="footer-title text-2xl text-white">Services</h6>
                 <Link to="/plumber">  <a className="link link-hover textxl text-xl">Plumber Emergency</a></Link>
                <Link to="/renovationWorker" ><a className="link link-hover text-xl">Renovation Worker</a></Link>
                <Link to="/sewerage" ><a className="link link-hover text-xl">Sewerage</a></Link>
               <Link to="/worksArea"><a className="link link-hover text-xl">Works Area</a></Link>
                <Link to="/contact"><a className="link link-hover text-xl">Contact</a></Link>
            </nav>
            <nav>
                <h6 className="footer-title text-2xl text-white">Contact</h6>
                <a className="link link-hover flex items-center gap-2 text-xl">
                    <span><BsFillTelephoneFill /></span> <span>085 – 0026311</span>
                </a>
                <a className="link link-hover flex items-center gap-2 text-xl">
                    <span><MdEmail /></span> <span>24.7spoeddienst@gmail.com</span>
                </a>
            </nav>
           
        </footer>
    );
};

export default Footer;
