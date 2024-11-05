import { Link } from "react-router-dom";


const Rotterdam = () => {
    return (
        <div className="flex flex-col">
        {/* Title section */}
        <div className="text-right mb-4">
        <h2 className="my-4 mr-8"> <span className="text-lg ">Home</span> <span className="text-gray-400 font-semibold">» Emergency Plumber</span></h2>
        </div>

        {/* Main content section */}
        <div className="flex flex-col md:flex-row shadow-2xl ml-12 px-6">
            {/* Content div on the left */}
            <div className="flex-1 w-full md:w-2/3 pr-4">
            <h1 className="tex-4xl text-5xl font-bold">Sewerage</h1>
            <div className="border-4 border-sky-400 w-28 my-6"></div>
                <img src="https://i.ibb.co/SRfvZXn/24uurloodgieter-baner-slide1.jpg" alt="" />
                <button className="btn my-4 btn-info text-white rounded-full text-xl py-2 px-4">CALL URGENTLY: 085_0026311</button>
                <h1 className="text-3xl md:text-5xl font-bold my-4 text-left">Sewer problems?</h1>
                <p className="text-lg md:text-xl my-4 text-gray-500 text-left">Is your sewer blocked? Is the water no longer draining? Contact our 24-hour Plumber service. We are available day and night for all conceivable sewer problems.</p>
                <img src="https://i.ibb.co/bsvFvkt/waterpipe-lig.jpg" alt="" />

                <div>
                    <h1 className="text-3xl md:text-3xl font-bold text-sky-400 text-left">Sewerage works</h1>
                    <h1 className="text-gray-600 text-left text-lg md:text-xl">You can contact us 24/7 for:</h1>
                    <ul className="ml-6 text-lg md:text-xl mb-8 space-y-4 text-gray-500 list-disc mt-4">
                        <li>Unblocking drains of toilets, showers, and sinks</li>
                        <li>Problems with draining rainwater</li>
                        <li>Pumping out crawl spaces, cellars, and basements</li>
                        <li>How to Fix Bubbling Drains</li>
                        <li>Remedying sewer odor “sewer smell”</li>
                        <li>Leakage due to leaking gutters or downpipes</li>
                        <li>Various forms of odor nuisance from the sewer</li>
                        <li>Construction of a completely new sewerage system</li>
                    </ul>
                </div>

                <div className="container flex flex-col md:flex-row">
                    <div className="text-content w-full md:w-1/2">
                        <h1 className="text-3xl font-bold text-sky-400 text-left my-4">Sewer clogged? Call the Plumber</h1>
                        <p className="text-gray-500 text-left text-lg md:text-xl my-4">A common problem is a clogged toilet, often caused by excessive use of toilet paper...</p>
                        <p className="text-gray-500 text-left text-lg md:text-xl my-4">In addition, various liquid or non-liquid drain unblockers can cause major damage to the sewer or drain...</p>
                    </div>
                    <div className="image-content w-full md:w-1/2">
                        <img className="h-60 md:h-96 mt-10 w-full" src="https://i.ibb.co/tYPYh1r/24-loodgieter-181x300.jpg" alt="Clogged Sewer" />
                    </div>
                </div>

                <div>
                    <h1 className="text-3xl font-bold text-sky-400 text-left">Drain clogged</h1>
                    <p className="text-left text-lg md:text-xl my-4 text-gray-500">A clogged drain in the kitchen or bathroom? Then contact us on 085 – 0026311...</p>
                    <h1 className="text-3xl my-4 font-bold text-sky-400 text-left">Unblocking the sewer by the plumber</h1>
                    <p className="text-left text-lg md:text-xl my-4 text-gray-500">How do I unclog the sewer? That is a question we hear a lot...</p>
                    <h1 className="text-3xl font-bold my-4 text-sky-400 text-left">Plumber 24 hours sink clogged</h1>
                    <p className="text-left text-lg md:text-xl my-4 text-gray-500">Is the sink clogged or is the water no longer draining? Call our emergency number...</p>
                    <img className="w-full h-60 md:h-[500px]" src="https://i.ibb.co/bsvFvkt/waterpipe-lig.jpg" alt="" />
                </div>
            </div>

            {/* Links div on the right */}
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

export default Rotterdam;