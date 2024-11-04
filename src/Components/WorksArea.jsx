const WorksArea = () => {
    return (
        <div className="flex flex-col">
            {/* Title section */}
            <div className="text-right mb-4">
            <h2 className="my-4 mr-8"> <span className="text-lg ">Home</span> <span className="text-gray-400 font-semibold">» Emergency Plumber</span></h2>
            </div>

            {/* Main content section */}
            <div className="flex flex-col lg:flex-row">
                {/* Content div on the left */}
                <div className="flex-2 w-full lg:w-2/3 shadow-2xl ml-4 lg:ml-12 px-4 lg:px-6">
                    <h1 className="text-5xl font-bold text-left">Work areas</h1>
                    <div className="border-4 border-sky-400 w-28 my-6"></div>
                    <h1 className="font-bold my-4 text-sky-400 text-3xl">Work areas</h1>
                    <p className="text-xl my-4 text-gray-500">
                        Our 24 hour plumber service is active in the provinces of North Holland, South Holland, Utrecht, and Brabant. Because we always have different plumbers spread across the work areas, we can always be there quickly in case of emergency to tackle the problems. Our emergency service is usually present within 30 minutes in case of emergency to solve the problems.
                    </p>
                    <div className="flex flex-col lg:flex-row">
                        <div className="text-content w-full lg:w-1/2">
                            <h1 className="text-2xl font-bold text-sky-400 text-left">Sewer clogged? Call the Plumber</h1>
                            <p className="text-gray-500 text-left text-xl my-4">
                                A common problem is a clogged toilet, often caused by excessive use of toilet paper or by flushing “too” large/coarse products down the toilet. Do you now have a clogged toilet? In many cases, the blockage is in the sewer. This cannot be solved with a simple plunger; such a blockage in the sewer is too big for this.
                            </p>
                            <p className="text-xl my-4 text-gray-500">
                                In addition, various liquid or non-liquid drain unblockers can cause major damage to the sewer or drain. Do you have a clogged toilet? Do you want to have it unclogged? Then call 085 – 0026311 and get a plumber on the line immediately, 24 hours a day, 7 days a week.
                            </p>
                        </div>
                        <div className="image-content w-full lg:w-1/2">
                            <img className="h-96 mt-4 lg:mt-10 w-60 mx-auto" src="https://i.ibb.co/tYPYh1r/24-loodgieter-181x300.jpg" alt="Clogged Sewer" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-sky-400 my-4 text-left">Sewer Cleaning and Sewer Work</h1>
                        <p className="text-left text-xl my-4 text-gray-500">
                            Our plumbing company is specialized in solving sewer problems. For this we have special tools and the most modern techniques. Think of camera inspection systems with which we can inspect the sewer or drain from the inside.
                        </p>
                        <h1 className="text-3xl my-4 font-bold text-sky-400 text-left">Our areas of work</h1>
                        <p className="text-left text-xl my-4 text-gray-500">
                            Below you will find an overview of our work areas. Is your place of residence not listed but do you live in North Holland, South Holland, Brabant or the province of Utrecht? Then call our free service number 085 – 0026311.
                        </p>
                        <img className="w-full" src="https://i.ibb.co/Rhh1tDR/24uurloodgieter-slide3-1.jpg" alt="" />
                    </div>
                </div>

                {/* Links div on the right */}
                <div className="flex-1 w-full lg:w-1/3 pl-4 mt-10">
                    <h1 className="text-sky-400 text-2xl my-2 font-bold">NEED A PLUMBER URGENTLY?</h1>
                    <img src="https://i.ibb.co/34N0q6v/links-hour-images.jpg" alt="" />
                    <button className="btn btn-info rounded-full py-2 my-4 px-8 text-2xl text-white">CALL: 085_0026311</button>
                    <p className="text-gray-500 text-left text-lg my-2">
                        Need a 24-hour plumber for help with leaks, blockages, or plumbing problems? Call 085 – 0026311 for fast help from a professional in your area!
                    </p>
                    <div>
                        <h1 className="my-2 text-sky-400 font-bold text-left text-3xl">Work areas</h1>
                        <ul className="text-lg text-left text-gray-500 space-y-2">
                            <li>Plumber Alphen aan den Rijn</li>
                            <li>Plumber Amsterdam</li>
                            <li>Plumber Breda</li>
                            <li>Plumber Den Bosch</li>
                            <li>Plumber The Hague</li>
                            <li>Plumber Dordrecht</li>
                            <li>Plumber Hilversum</li>
                            <li>Plumber Leiden</li>
                            <li>Plumber Rotterdam</li>
                            <li>Plumber Utrecht</li>
                            <li>Plumber Zaandam</li>
                            <li>Plumber Zoetemeer</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorksArea;
