import { Link } from "react-router-dom";


const Leide = () => {
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
            <h1 className="text-5xl font-bold">Plumber Leiden</h1>
            <div className="border-4 border-sky-400 w-28 my-10"></div>
               <p className="text-gray-500 text-left text-xl space-y-8 my-4">Plumber Leiden 24 hour service : Are you looking for a plumber in Leiden? Our professionals are available day and night, 7 days a week for all conceivable emergencies. Is your toilet clogged? Is the kitchen flooded by a burst water pipe? Or is your basement or crawl space flooded by a heavy rain shower? Don't panic and contact the Plumber Leiden 24 hour service.

            In addition to our emergency service, you can of course also contact us for less urgent matters, for example, do you want to have a new tap installed, a washing machine or dishwasher connected or do you want to have your kitchen, toilet or bathroom renovated ? Then you have also come to the right place for these matters at our plumbing company.

               You can reach us 24/7 via our service number 085 – 0026311 , you will immediately get a professional on the line to make an appointment. Because our service engineers are spread throughout the region, we can almost always be on site very quickly.

                 </p>
             
     
            

                <div className="flex flex-col md:flex-row my-8">
                    <div className="text-content w-full md:w-1/2">
                        <h1 className="text-3xl font-bold text-sky-400 text-left my-4">
                        Plumber Leiden</h1>
                       <p className="text-gray-500 text-left text-xl space-y-4 my-4">We only have well-trained and experienced plumbers working in Leiden . If you call us for a leak or blocked sewer or blocked pipe, this will always be resolved as soon as possible..</p>
                       <div>
                    <h1 className="text-gray-500 font-bold text-left text-2xl my-6 md:text-2xl">
                    You can reach us 24/7 for, among other things::</h1>
                    <ul className="ml-6 text-lg md:text-xl mb-8 space-y-4 text-gray-500 list-disc mt-4">
                        <li>A clogged toilet</li>
                        <li>A clogged sink</li>
                        <li>Burst pipes</li>
                        <li>Flooding due to leakage</li>
                        <li>Flooded basements or crawl spaces</li>
                        <li>Problems with draining rainwater</li>
                        <li>Problems with the water supply</li>
                        <li>Sewer Problems</li>
                      
                    </ul>
                </div>
                    </div>
                    <div className="w-full md:w-1/3 mt-6 md:mt-0 md:ml-8 flex justify-center">
                            <img className="h-60 md:h-80 mt-20 ml-20 w-96" 
                            src="https://i.ibb.co/tYPYh1r/24-loodgieter-181x300.jpg" alt="Clogged Sewer" />
                        </div>

                   
                </div>
                    <h1 className="text-3xl font-bold text-sky-500 my-6">
                    Plumber Leiden Weekend</h1>
                    <p className="text-gray-500 text-left text-xl space-y-8 my-4">Our plumbing company in Leiden is also available on Saturdays and Sundays, 24 hours a day, 7 days a week we are ready for you. Every service technician has a well-equipped service car, in this way all problems can be solved quickly, professionally and expertly. So are you looking for a plumber in Leiden
                    in the middle of the night ? Or are you looking for a plumber on Saturday evening? No problem! You have come to the right place. Contact us by phone at 085 - 0026311 and get in touch with an employee of our plumbing company directly.</p>

                   <h1 className=" text-3xl font-bold text-sky-500 mt-10">
                   Clogged toilet in Leiden</h1>
             <p className="text-gray-500 text-left text-xl space-y-4 my-4">Toilet clogged? Or is there a blockage in the drain or sewer? Then make an appointment with one of our plumbers, we will come to you as soon as possible to solve the problem. We have tools for all blockages with us and ensure that your toilet or sewer is unclogged.

               Call our service number 085 – 0026311 24/7  and get in direct contact with the plumber in Leiden ..</p>
              
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

export default Leide;