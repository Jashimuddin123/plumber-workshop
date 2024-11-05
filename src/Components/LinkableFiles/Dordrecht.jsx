import { Link } from "react-router-dom";


const Dordrecht = () => {
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
            <h1 className="text-5xl font-bold">Loodgieter Alphen aan den Rijn</h1>
            <div className="border-4 border-sky-400 w-28 my-10"></div>
               <p className="text-gray-500 text-left text-xl space-y-8 my-4">Plumber Alphen aan den Rijn : Are you looking for a plumber in Alphen aan den Rijn ? Then contact us directly on 085 – 0026311  and get in touch with the plumber in Alphen aan den Rijn . We are available 24 hours a day, 7 days a week for all conceivable inconveniences. Leakage ? Blockage? Problems with your central heating? Our 24 hour plumbers are always available for you.</p>
             
             <h1 className=" text-3xl font-bold text-sky-500 mt-10">24 hour Plumber in Alphen aan den Rijn</h1>
             <p className="text-gray-500 text-left text-xl space-y-4 my-4">The 24 hour Plumber in Alphen aan den Rijn is available for you day and night. We are available for all conceivable emergencies such as leaks, blockages or gas problems. You can reach us 24 hours a day, 7 days a week for all conceivable emergencies on telephone number 085 - 0026311 .

             In addition to our 24-hour plumber service, we also have our own cv fitters. Do you need a certified cv fitter immediately because the cv is no longer getting warm, you no longer have hot water or because you have a cv boiler malfunction? Then call our service number.</p>
             <div>
                    <h1 className="text-3xl md:text-3xl font-bold text-sky-400 text-left">Sewerage works</h1>
                    <h1 className="text-gray-500 font-bold text-left text-2xl my-6 md:text-2xl">
                    You can reach us 24/7 for, among other things::</h1>
                    <ul className="ml-6 text-lg md:text-xl mb-8 space-y-4 text-gray-500 list-disc mt-4">
                        <li>Toilet Blockage</li>
                        <li>Drain Blockage</li>
                        <li>Sewer Problems</li>
                        <li>Leakage</li>
                        <li>Problems with central heating boiler</li>
                        <li>CV installation problems</li>
                        <li>Flooded basements and crawl spaces</li>
                      
                    </ul>
                </div>

                <div className="container flex flex-col md:flex-row">
                    <div className="text-content w-full md:w-1/2">
                        <h1 className="text-3xl font-bold text-sky-400 text-left my-4">
                        Blockages</h1>
                       <p className="text-gray-500 text-left text-xl space-y-4 my-4">Perhaps there is nothing more annoying than a blockage. Is your toilet blocked? Or do you have a blockage in the sewer ? Then contact our plumbers in Alphen aan den Rijn . We have the most modern equipment and tools to detect and resolve all types and sizes of blockages.

                      We unclog both drain pipes and complete sewer systems. Need a professional who can unclog your drain pipes right away? Then contact our 24-hour plumber Alphen aan den Rijn service.</p>
                    </div>
                    <div className="image-content w-full md:w-1/2">
                        <img className="h-60 md:h-96 mt-10 w-full"
                        src="https://i.ibb.co/mJCmMJR/loodgieter-alphen-aan-den-rijn-300x235.jpg" alt="Clogged Sewer" />
                    </div>

                   
                </div>
                    <h1 className="text-3xl font-bold text-sky-500 my-6">Direct assistance in case of leakage</h1>
                    <p className="text-gray-500 text-left text-xl space-y-8 my-4">Leakage in kitchen or bathroom? This can have various causes, for example there can be a blockage that pushes the water up and in this way causes a leak. In addition, a common cause of leakage is a burst or ruptured water pipe. In some cases this is difficult to reach because pipes are generally concealed in walls, ceilings and floors.

                   Our plumbers in Alphen aan den Rijn have the knowledge and experience to be  able to find out what causes such a leak. In addition, we have various devices, tools and gadgets to detect a leak and tackle it at the cause.

                   Do you want to speak to a plumber in Alphen aan den Rijn directly to make an appointment? Then contact us via the service number 085 - 0026311</p>
              
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

export default Dordrecht;