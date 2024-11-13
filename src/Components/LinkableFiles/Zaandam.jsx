import { Link } from "react-router-dom";


const Zaandam = () => {
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
            <h1 className="tex-4xl text-4xl font-bold">Plumber Zaandam</h1>
            <div className="border-4 border-sky-400 w-28 my-6"></div>
          <p className="text-gray-500 text-left text-xl space-y-8 my-4">24 hour plumber in Zaandam is available day and night for all conceivable emergencies. Do you need a plumber immediately? Then contact our plumbing company in Zaandam . We always have several employees spread throughout the region and can therefore always be on site quickly.

               In addition to our 24-hour emergency plumber service, you can of course also contact us for all standard plumbing work. For example, do you want to have an extra water supply installed for a dishwasher, washing machine or do you want to have new sanitary facilities installed? You have also come to the right place for this with our plumbers in Zaandam .</p>
            
           
     <h1 className="text-sky-400 font-bold text-2xl">Plumber 24 hour service Zaandam</h1>
     <p className="text-gray-500 text-left text-lg space-y-2 my-4">Our 24 hour plumbing service is available day and night. We are available for all conceivable emergencies such as leaks, blockages or gas problems. You can reach us 24 hours a day, 7 days a week for all conceivable emergencies on telephone number 085 - 0026311 .</p>


                <div>


                    <h1 className="text-gray-500 font-bold  text-left text-xl md:text-xl">
                    You can reach us 24/7 for, among other things:</h1>
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

                <div className="flex flex-col md:flex-row my-4">
                        <div className="w-full md:w-2/3">
                            <h2 
                            className="text-xl md:text-2xl font-bold text-sky-400 my-4">
                                Renovation and installation work</h2>
                            <p className="text-gray-500 text-lg md:text-xl my-4">
                            You have also come to the right place at our plumbing company in Zaandam for renovation and installation work . We can take on complete renovations of a bathroom, for example, but you can also contact us for smaller matters such as installing a new tap or having new sanitary facilities installed.

We also do home renovations , we can check the complete piping and all drains of a building for weak parts and replace them where necessary.

Would you like more information about the possibilities for you at our plumbing company? Then feel free to contact us free of charge on telephone number 085 – 0026311
                            </p>
                  
                        </div>
                        <div className="w-full md:w-1/3 mt-6 md:mt-0 md:ml-8 flex justify-center">
                            <img className="h-32 md:h-28 mt-14 w-auto" src=
                            "https://i.ibb.co/HY1pn4h/renovatie-box-150x100.jpg" alt="Clogged Sewer" />
                        </div>
                    </div>

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

export default Zaandam;