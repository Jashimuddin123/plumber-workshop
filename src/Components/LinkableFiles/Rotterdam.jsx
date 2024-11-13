import { Link } from "react-router-dom";


const Rotterdam = () => {
    return (
        <div className="flex flex-col">
        {/* Title section */}
        <div className="text-right mb-4">
        <h2 className="my-4 mr-8"> <span className="text-lg ">Home</span> <span className="text-gray-400 font-semibold">» Emergency Plumber</span></h2>
        </div>

        {/* Main content section */}
        <div className="flex flex-col lg:flex-row gap-4 px-4 md:px-8 lg:px-12">
            {/* Content div on the left */}
            <div className="w-full lg:w-2/3 shadow-lg p-4">
            <h1 className="tex-4xl text-5xl font-bold">Plumber Rotterdam</h1>
            <div className="border-4 border-sky-400 w-28 my-6"></div>
            <h1 className=" my-2 text-4xl font-bold">Plumber Rotterdam 24 hour service</h1>
            
              <p className="text-gray-500 text-left text-lg md:text-xl my-4">It can happen to you: a leak or a blockage in your home. This can be very annoying, and with serious problems it is not possible to use household items. Plumber Rotterdam 24-hour service is happy to help you. Our experts work with professional tools and materials so that the problem is solved quickly. Do not wait too long and call our free service number 085 - 0026311

               You can contact us day and night for the following emergencies:</p>

                <div>
                
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


                    <img src="https://i.ibb.co/M2F9dS6/plumbing-840835-960-720-1.jpg" alt="" />
                </div>



             

                <div>
                    <h1 className="text-2xl font-bold text-sky-400 text-left">Not just emergencies</h1>
                    <p className="text-left text-lg md:text-xl my-4 text-gray-500">
                    We are happy to help you with urgent plumbing work, but it doesn't stop there. Our all-round plumbers can also be deployed for jobs that are less urgent. Think of installing a new tap or installing a washing machine. Nothing is too crazy for our experts in Rotterdam. We carry out all conceivable  installation and maintenance  work on pipes, central heating boilers, sewerage, etc. Feel free to contact us to discuss the possibilities.</p>
                    <h1 className="text-2xl my-4 font-bold text-sky-400 text-left">
                    Experts in Rotterdam</h1>
                    <p className="text-left text-lg md:text-xl my-4 text-gray-500">
                    Our professionals are spread across the Netherlands and also near you in Rotterdam. You can therefore trust that you will be helped quickly after a phone call. When you call, you will immediately get an expert on the line with whom you can make an appointment. Our plumbers will then be on site quickly to help you. They always come in a well-stocked service vehicle with professional tools and materials for the job. Our plumbers from Loodgietersservice Rotterdam have a lot of experience and are in possession of a recognized diploma. You can therefore expect quality.

                   You can call our service number 085 – 0026311  at any time. In the middle of the night, when you notice a leak, or during holidays and evenings.</p>
                   
                    <img className="w-full h-60 md:h-[500px]" 
                    src="https://i.ibb.co/KjJSHH2/loodgieter-amsterdam.png" alt="" />
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