import { Link } from "react-router-dom";


const Zoetemeer = () => {
    return (
        <div className="flex flex-col">
        {/* Title section */}
        <div className="text-right mb-4">
        <h2 className="my-4 mr-8"> <span className="text-lg ">Home</span> <span className="text-gray-400 font-semibold">» Emergency Plumber</span></h2>
        </div>

        {/* Main content section */}
        <div className="flex flex-col lg:flex-row gap-4 px-4 md:px-8 lg:px-12">
            {/* Content div on the left */}
            <div  className="w-full lg:w-2/3 shadow-lg p-4">
            <h1 className="text-5xl font-bold">Plumber Zoetermeer</h1>
            <div className="border-4 border-sky-400 w-28 my-10"></div>
            <h1 className="text-2xl text-sky-400 font-bold my-6">Plumber Zoetermeer</h1>
               <p className="text-gray-500 text-left text-xl space-y-8 my-4">Our plumbing company in Zoetermeer is available 24 hours a day, 7 days a week and 365 days a year for all conceivable emergencies. Do you have a leak? A blockage? Or are there problems with the central heating? Then contact the Plumber Zoetermeer 24 hour service immediately.

In addition to our emergency service, you can also contact us for all standard plumbing work . Think of installing new sanitary facilities, having a toilet renovated or having a bathroom renovated. We are also available for having a new tap installed or complete renovation work.

Make an appointment with the plumber in Zoetermeer right away? Or do you want to speak to the plumber and request information about the possibilities in your situation? Then contact us by phone at 070-204 9001.</p>
             
           
          

             <div className="container flex flex-col md:flex-row">
                    <div className="text-content w-full md:w-1/2">
                        <h1 className="text-2xl font-bold text-sky-400 text-left my-4">
                        24 hour Plumber in Zoetermeer</h1>
                       <p className="text-gray-500 text-left text-xl space-y-4 my-4">The 24 hour Plumber in Zoetermeer is available for you day and night. We are available for all conceivable emergencies such as leaks, blockages or gas problems. You can reach us 24 hours a day, 7 days a week for all conceivable emergencies on telephone number 085 - 0026311 .</p>
                       <div>
                    <h1 className="text-gray-500 font-bold text-left text-xl my-6 md:text-xl">
                    You can reach us 24/7 for, things:</h1>
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
                    </div>
                    <div className="image-content lg:ml-20 w-full md:w-1/4">
                        <img className="h-60 md:h-36 mt-10 w-full"
                        src="https://i.ibb.co/mJCmMJR/loodgieter-alphen-aan-den-rijn-300x235.jpg" alt="Clogged Sewer" />
                    </div>

                   
                </div>
                    <h1 className="text-2xl font-bold text-sky-500 my-6">
                    Immediate assistance in case of leakage</h1>
                    <p className="text-gray-500 text-left text-xl space-y-8 my-4">There is perhaps nothing more annoying than a leak in your own home, besides being difficult and involving a lot of work, a leak often also causes serious damage to walls, floors and partitions. This is also why it is very important to act quickly in case of a leak.

                A leak is in most cases caused by a burst or burst water pipe, these pipes are generally neatly concealed in walls, ceilings or floors and therefore very difficult to reach. It can also be very difficult to detect a leak.

                Fortunately, all plumbers at our plumbing company in Zoetermeer have a lot of knowledge and the right tools to quickly detect such a leak and repair it professionally.

                Would you like to make an appointment with the 24-hour Plumber Zoetermeer right away? Then contact us via the service number 085 – 0026311 and get a professional on the line right away to make an appointment.</p>

                <img className="w-full"
                 src="https://i.ibb.co/SRfvZXn/24uurloodgieter-baner-slide1.jpg" alt="" />
              
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

export default Zoetemeer;