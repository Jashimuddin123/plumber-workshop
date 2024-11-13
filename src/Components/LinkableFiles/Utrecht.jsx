import { Link } from "react-router-dom";


const Utrecht = () => {
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
                    <h1 className="text-3xl md:text-5xl font-bold">
                    Plumber Utrecht</h1>
                    <div className="border-4 border-sky-400 w-24 md:w-28 my-6 md:my-10"></div>
                    <p className="text-gray-500 text-lg md:text-xl my-4">
                    Plumber Utrecht 24 hour service : Are you looking for a plumber in Utrecht? Our professionals are available day and night, 7 days a week for all conceivable emergencies. Is your toilet clogged? Is the kitchen flooded by a burst water pipe? Or is your basement or crawl space flooded by a heavy rain shower? Don't panic and contact the Plumber Utrecht 24 hour service.

            In addition to our emergency service, you can of course also contact us for less      urgent matters, for example, do you want to have a new tap installed, a washing machine or dishwasher connected or do you want to have your kitchen, toilet or bathroom renovated ? Then you have also come to the right place for these matters at  our plumbing company.

                     You can reach us 24/7 via our service number 085 – 0026311 , you will immediately get a professional on the line to make an appointment. Because our service engineers are spread throughout the region, we can almost always be on site very quickly.
                    </p>


                    <div className="flex flex-col md:flex-row my-4">
                        <div className="w-full md:w-2/3">
                            <h2 
                            className="text-2xl md:text-3xl font-bold text-sky-400 my-4">Utrecht Plumbers</h2>
                            <p className="text-gray-500 text-lg md:text-xl my-4">
                                Blockages can be frustrating. Contact our plumbers in Alphen aan den Rijn for blockage solutions. We use modern equipment for any size of blockage in drain pipes and sewer systems.
                            </p>
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
                        </div>
                        <div className="w-full md:w-1/3 mt-6 md:mt-0 md:ml-8 flex justify-center">
                            <img className="h-48 md:h-60 w-auto" src="https://i.ibb.co/tYPYh1r/24-loodgieter-181x300.jpg" alt="Clogged Sewer" />
                        </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-sky-500 my-6">
                    Plumber Utrecht weekend service</h2>
                    <p className="text-gray-500 text-lg md:text-xl my-4">
                    Our plumbing company is also available on Saturdays and Sundays, 24 hours a day, 7 days a week we are ready for you. Every service technician has a well-equipped service car, in this way all problems can be solved quickly, professionally and expertly.
                    So are you looking for a plumber in the middle of the night? Or are you looking for a plumber on Saturday evening? No problem! You have come to the right place. Contact us by phone at 030-208 2003 and get in touch with an employee of our plumbing company directly.
                    </p>
                    <h1 className="text-2xl md:text-3xl font-bold text-sky-400 my-4">Clogged toilet in Utrecht</h1>
                    <p className="text-gray-500 text-lg md:text-xl my-4">Toilet clogged? Or is there a blockage in the drain or sewer? Then make an appointment with one of our plumbers in Utrecht, we will come to you as soon as possible to solve the problem. We have tools for all blockages with us and ensure that your toilet or sewer is unclogged.

Call our service number 085 – 0026311 24/7  and get in direct contact with the plumber in Utrecht </p>
<img className="w-full" src="https://i.ibb.co/Rhh1tDR/24uurloodgieter-slide3-1.jpg" alt="" />
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

export default Utrecht;