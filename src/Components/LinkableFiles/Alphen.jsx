import { Link } from "react-router-dom";

const Alphen = () => {
    return (
        <div className="flex flex-col">
            {/* Title section */}
            <div className="text-right mb-4 px-4 md:px-8">
                <h2 className="my-4 text-lg md:text-xl">
                    <span>Home</span> <span className="text-gray-400 font-semibold">» Emergency Plumber</span>
                </h2>
            </div>

            {/* Main content section */}
            <div className="flex flex-col lg:flex-row gap-4 px-4 md:px-8 lg:px-12">
                {/* Left content div */}
                <div className="w-full lg:w-2/3 shadow-lg p-4">
                    <h1 className="text-3xl md:text-5xl font-bold">Loodgieter Alphen aan den Rijn</h1>
                    <div className="border-4 border-sky-400 w-24 md:w-28 my-6 md:my-10"></div>
                    <p className="text-gray-500 text-lg md:text-xl my-4">
                        Plumber Alphen aan den Rijn: Are you looking for a plumber in Alphen aan den Rijn? Then contact us directly on 085 – 0026311 and get in touch with the plumber in Alphen aan den Rijn. We are available 24 hours a day, 7 days a week for all conceivable inconveniences. Leakage? Blockage? Problems with your central heating? Our 24-hour plumbers are always available for you.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-sky-500 mt-8 md:mt-10">24 hour Plumber in Alphen aan den Rijn</h2>
                    <p className="text-gray-500 text-lg md:text-xl my-4">
                        The 24-hour Plumber in Alphen aan den Rijn is available for you day and night. We are available for all emergencies such as leaks, blockages, or gas problems. You can reach us 24/7 at 085 - 0026311.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-sky-400 my-6">Sewerage Works</h2>
                    <h3 className="text-gray-500 font-bold text-xl md:text-2xl mb-4">
                        You can reach us 24/7 for, among other things:
                    </h3>
                    <ul className="ml-6 text-lg md:text-xl text-gray-500 list-disc space-y-2">
                        <li>Toilet Blockage</li>
                        <li>Drain Blockage</li>
                        <li>Sewer Problems</li>
                        <li>Leakage</li>
                        <li>Central heating boiler issues</li>
                        <li>CV installation problems</li>
                        <li>Flooded basements and crawl spaces</li>
                    </ul>

                    <div className="flex flex-col md:flex-row my-8">
                        <div className="w-full md:w-2/3">
                            <h2 className="text-2xl md:text-3xl font-bold text-sky-400 my-4">Blockages</h2>
                            <p className="text-gray-500 text-lg md:text-xl my-4">
                                Blockages can be frustrating. Contact our plumbers in Alphen aan den Rijn for blockage solutions. We use modern equipment for any size of blockage in drain pipes and sewer systems.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 mt-6 md:mt-0 md:ml-8 flex justify-center">
                            <img className="h-48 md:h-60 w-auto" src="https://i.ibb.co/tYPYh1r/24-loodgieter-181x300.jpg" alt="Clogged Sewer" />
                        </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-sky-500 my-6">Direct assistance in case of leakage</h2>
                    <p className="text-gray-500 text-lg md:text-xl my-4">
                        Leakage in the kitchen or bathroom can be due to blockages or burst pipes. Our plumbers have the tools to detect leaks and address the root cause. Contact us at 085 - 0026311 for immediate assistance.
                    </p>
                </div>

                {/* Right links div */}
                <div className="flex-1 w-full md:w-1/3 pl-4 mt-10">
                    <h1 className="text-3xl font-bold text-sky-400 my-4">NEED A PLUMBER URGENTLY?</h1>
                    <img src="https://i.ibb.co/34N0q6v/links-hour-images.jpg" alt="" />
                    <button className="btn my-6 mt-6 btn-info rounded-full py-2 px-8 text-2xl text-white">CALL: 085_0026311</button>
                    <p className="text-gray-500 text-left text-lg my-4">Need a 24-hour plumber for help with leaks, blockages, or plumbing problems? Call 085 – 0026311 for fast help!</p>
                    <div>
                        <h1 className="my-2 text-sky-400 font-bold text-left text-3xl">Work areas</h1>
                      <Link to="/alphen"><p className="text-lg text-left text-gray-500">Plumber Alphen aan den Rijn</p></Link>
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

export default Alphen;
