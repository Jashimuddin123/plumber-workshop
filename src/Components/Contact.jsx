import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="flex flex-col">
            {/* Title section */}
            <div className="text-right mb-4">
            <h2 className="my-4 mr-8"> <span className="text-lg ">Home</span> <span className="text-gray-400 font-semibold">» Emergency Plumber</span></h2>
            </div>

            {/* Main content section */}
            <div className="flex flex-col md:flex-row">
                {/* Content div on the left */}
                <div className="flex-1 md:w-2/3 pr-4 shadow-xl mx-4 md:mx-12 px-6">
                    <h1 className="text-5xl font-bold my-4">Contact Us</h1>
                    <div className="border-4 border-sky-400 w-28 my-8"></div>
                    <p className="text-gray-500 text-xl my-4">
                        The plumbers behind 24uurloodgieter.nl are available 24/7. Of course, we only work with certified professionals, so if you hire a plumber through our plumbing service, you can always be 100% sure that you will get a real professional in your home! You can contact our free central emergency number via: 085 – 0026311.
                    </p>

                    <h1 className="text-3xl font-bold my-4 text-sky-400">Request a quote or price information?</h1>
                    <p className="text-gray-500 text-xl my-4">
                        Would you like to request a quote for a renovation or refurbishment work? Please feel free to contact us. For price information, possibilities or to request a quote, you can also contact us 7 days a week. You can reach us via our free telephone number 085 – 0026311.
                    </p>
                    <img src="https://i.ibb.co/4Y09h7L/logo-24uurloodgieter-1.png" alt="" />
                    <div className="text-gray-500 text-xl my-4">
                        <p>24 Hour Plumber</p>
                        <p>3079 DR – house number 8</p>
                        <p>Chamber of Commerce. 24309380</p>
                        <p>Tel: 085 – 0026311</p>
                        <p>Would you like to send us an email? Please fill out the contact form below.</p>
                    </div>

                    {/* Form section */}
                    <form className="p-4">
                        <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mb-4">
                            <input type="text" placeholder="First Name" className="border-2 p-2 w-full text-xl" />
                            <input type="text" placeholder="Last Name" className="border-2 p-2 w-full text-xl" />
                        </div>
                        <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mb-4">
                            <input type="email" placeholder="Email" className="border-2 p-2 w-full text-xl" />
                            <input type="tel" placeholder="Phone" className="border-2 p-2 w-full text-xl" />
                        </div>
                        <div className="mb-4">
                            <textarea placeholder="Message" className="border-2 p-2 w-full" rows="4"></textarea>
                        </div>
                        <button type="submit" className="bg-sky-400 text-white py-2 rounded-full px-6 text-lg font-bold">
                            To Ster
                        </button>
                    </form>
                </div>

                {/* Links div on the right */}
                <div className="flex-1 w-full md:w-1/3 pl-4 mt-10">
                    <h1 className="text-3xl font-bold text-sky-400 my-4">NEED A PLUMBER URGENTLY?</h1>
                    <img src="https://i.ibb.co/34N0q6v/links-hour-images.jpg" alt="" />
                    <button className="btn my-6 mt-6 btn-info rounded-full py-2 px-8 text-2xl text-white">CALL: 085_0026311</button>
                    <p className="text-gray-500 text-left text-lg my-4">Need a 24-hour plumber for help with leaks, blockages, or plumbing problems? Call 085 – 0026311 for fast help!</p>
                    <div>
                        <h1 className="my-2 text-sky-400 font-bold text-left text-3xl">Work areas</h1>
                      <Link
                       to="/alphen"><p className="text-lg text-left text-gray-500">Plumber Alphen aan den Rijn</p></Link>
                        <div className="divider"></div>
                        <Link to="/amsterdam"><p className="text-lg text-left text-gray-500">Plumber Amsterdam</p></Link>
                        <div className="divider"></div>
                       <Link to="/breda"> <p className="text-lg text-left text-gray-500">Plumber Breda</p></Link>
                        <div className="divider"></div>
                        <Link to="/denBosch"><p className="text-lg text-left text-gray-500">Plumber Den Bosch</p></Link>
                        <div className="divider"></div>
                        <Link to="/theHague"><p className="text-lg text-left text-gray-500">Plumber The Hague</p></Link>
                        <div className="divider"></div>
                       <Link to="/dordrecht"> <p className="text-lg text-left text-gray-500">Plumber Dordrecht</p></Link>
                        <div className="divider"></div>
                       <Link to="/hilversum"> <p className="text-lg text-left my-2 text-gray-500">Plumber Hilversum</p></Link>
                        <div className="divider"></div>
                      <Link to="/leiden">  <p className="text-lg text-left text-gray-500">Plumber Leiden</p></Link>
                        <div className="divider"></div>
                        <Link to="/rotterdam"><p className="text-lg text-left my-2 text-gray-500">Plumber Rotterdam</p></Link>
                        <div className="divider"></div>
                       <Link to="/utrecht"> <p className="text-lg text-left text-gray-500">Plumber Utrecht</p></Link>
                        <div className="divider"></div>
                       <Link to="/zaandam"> <p className="text-lg text-left text-gray-500">Plumber Zaandam</p></Link>
                        <div className="divider"></div>
                       <Link to="/zoetemeer"> <p className="text-lg text-left text-gray-500">Plumber Zoetermeer</p></Link>
                        <div className="divider"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
