import { Link } from "react-router-dom";

const WorksArea = () => {
    return (
        <div className="flex flex-col">
            {/* Title section */}
            <div className="text-right mb-4">
                <h2 className="my-4 mr-8"> 
                    <span className="text-lg">Home</span> 
                    <span className="text-gray-400 font-semibold">» Emergency Plumber</span>
                </h2>
            </div>

            {/* Main content section */}
            <div className="flex flex-col lg:flex-row gap-4 px-4 lg:px-12">
                {/* Content div on the left */}
                <div className="w-full lg:w-2/3 shadow-2xl p-4">
                    <h1 className="text-3xl lg:text-5xl font-bold">Work areas</h1>
                    <div className="border-2 border-sky-400 w-28 my-6"></div>
                    <h1 className="font-bold my-4 text-sky-400 text-2xl lg:text-3xl">Work areas</h1>
                    <p className="text-lg lg:text-xl my-4 text-gray-500">
                        Our 24 hour plumber service is active in the provinces of North Holland, South Holland, Utrecht, and Brabant. Because we always have different plumbers spread across the work areas, we can always be there quickly in case of emergency to tackle the problems. Our emergency service is usually present within 30 minutes in case of emergency to solve the problems.
                    </p>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="w-full lg:w-1/2">
                            <h1 className="text-xl lg:text-2xl font-bold text-sky-400">Sewer clogged? Call the Plumber</h1>
                            <p className="text-gray-500 text-lg lg:text-xl my-4">
                                A common problem is a clogged toilet, often caused by excessive use of toilet paper or by flushing “too” large/coarse products down the toilet. Do you now have a clogged toilet? In many cases, the blockage is in the sewer.
                            </p>
                            <p className="text-lg lg:text-xl my-4 text-gray-500">
                                Various liquid or non-liquid drain unblockers can cause major damage to the sewer or drain. Do you want to have it unclogged? Call 085 – 0026311 for immediate assistance.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <img className="h-72 lg:h-96 w-auto mt-4 lg:mt-10" src="https://i.ibb.co/tYPYh1r/24-loodgieter-181x300.jpg" alt="Clogged Sewer" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl lg:text-4xl font-bold text-sky-400 my-4">Sewer Cleaning and Sewer Work</h1>
                        <p className="text-lg lg:text-xl my-4 text-gray-500">
                            Our plumbing company specializes in solving sewer problems using the latest tools and techniques, including camera inspection systems.
                        </p>
                        <h1 className="text-2xl lg:text-3xl font-bold text-sky-400 my-4">Our areas of work</h1>
                        <p className="text-lg lg:text-xl my-4 text-gray-500">
                            Below is an overview of our work areas. If your area is not listed but you are in North Holland, South Holland, Brabant, or Utrecht, call 085 – 0026311.
                        </p>
                        <img className="w-full my-4" src="https://i.ibb.co/Rhh1tDR/24uurloodgieter-slide3-1.jpg" alt="Work areas map" />
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

export default WorksArea;
