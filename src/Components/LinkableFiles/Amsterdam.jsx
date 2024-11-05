import { Link } from "react-router-dom";


const Amsterdam = () => {
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
            <h1 className=" text-5xl font-bold my-4">Plumber Amsterdam</h1>
            <div className="border-4 border-sky-400 w-28 my-6"></div>
            <h1 className=" text-5xl font-bold my-4">Plumber Amsterdam 24-hour service </h1>
             
             <p className="text-gray-500 text-left text-xl space-y-8 my-4" >Do you live in Amsterdam and are you looking for a suitable plumber? Our plumbing service in Amsterdam is available 24 hours a day, 7 days a week. We can solve all conceivable emergencies that fall under plumbing work for you. You can think of a leak, a clogged toilet or a burst water pipe. The Plumber Amsterdam 24-hour service is happy to help you out!

           You can always reach us at 085 – 0026311  for emergencies, but it is also possible that you have work that is less urgent. Perhaps you want to have your new dishwasher connected or you want to have a bathroom renovation done. For this you can easily fill in a quote with us after which we can discuss your wishes. So Loodgietersbedrijf Amsterdam is also the right place for this.

               Our service number 085 – 0026311   is free for you and you can call it at any time. So also in the evening, the weekend or during the holidays. You will immediately get a professional on the line with whom you can make an appointment directly. Our plumbers and installers are also in your area, so they will be on site in no time.
                  </p>
                  <img src="https://i.ibb.co/JqtMK67/plumbing-840835-960-720.jpg" alt="" />
                <div>
                    <h1 className="text-3xl md:text-3xl font-bold text-sky-400 text-left">We are happy to help you!</h1>
                    <h1 className="text-gray-600 text-left text-lg md:text-xl">
                    You can call our service number for the following problems, among others:</h1>
                    <ul className="ml-6 text-lg md:text-xl mb-8 space-y-4 text-gray-500 list-disc mt-4">
                        <li>A blocked toilet</li>
                        <li>A blocked sink</li>
                        <li> Burst pipes</li>
                        <li>Flooding due to leakage</li>
                        <li>Flooded basements or crawl spaces</li>
                        <li>Problems with draining rainwater</li>
                        <li>Problems with the water pipe</li>
                        <li>Sewer problems</li>
                    </ul>
                </div>

               

                <div>
                   
                    <h1 className="text-3xl font-bold my-4 text-sky-400 text-left">Real craftsmen</h1>
                    <p className="text-left text-lg md:text-xl my-4 text-gray-500">
                   
                    When you make an appointment with Loodgietersservice Amsterdam via our website or our service number 085 – 0026311,   you can expect quality. The plumbers from Amsterdam always come to you in a well-equipped service vehicle. This contains all the necessary tools for the job and also materials for any replacement. This means you do not have to worry about follow-up appointments. We strive to help you in one go. Our professionals all have a recognized diploma. In addition, they have extensive experience as all-round plumbers. So you can leave the job to our experts with peace of mind.
                   </p>
                    <img className="w-full h-60 md:h-[500px]" 
                    src="https://i.ibb.co/p3c3N7c/loodgieter-amsterdam.png" alt="" />
                </div>
            </div>

            {/* Links div on the right */}
            <div className="flex-1 w-full md:w-1/3 pl-4 mt-10">
                    <h1 className="text-3xl font-bold text-sky-400 my-4">NEED A PLUMBER URGENTLY?</h1>
                    <img src="https://i.ibb.co/34N0q6v/links-hour-images.jpg" alt="" />
                    <button className="btn my-6 mt-6 btn-info rounded-full py-2 px-8 text-2xl text-white">CALL: 085_0026311</button>
                    <p className="text-gray-500 text-left text-xl my-6">Need a 24 hour plumber for help with leaks, blockages or plumbing problems? Call 085 – 0026311 for fast help from a professional in your area!</p>
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

export default Amsterdam;