import { Link } from "react-router-dom";

const Plumber = () => {
    return (
        <div className="flex flex-col">
            {/* Title section */}
            <div className="text-right mb-4">
                <h2 className="my-4 mr-8"> <span className="text-lg ">Home</span> <span className="text-gray-400 font-semibold">» Emergency Plumber</span></h2>
            </div>

            {/* Main content section */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Content div on the left */}
                <div className="w-full lg:w-2/3 shadow-2xl px-4 lg:px-6">
                    <h1 className="text-4xl font-bold text-left my-8">Plumber Emergency</h1>
                    <div className="border-2 border-sky-400 w-28 my-8"></div>
                    <img src="https://i.ibb.co/SRfvZXn/24uurloodgieter-baner-slide1.jpg" alt="" className="w-full" />
                    <button className="btn mx-auto my-3 btn-info text-white rounded-full text-xl py-2 px-4">CALL URGENTLY: 085_0026311</button>
                    <h1 className="text-4xl font-bold text-left my-3">Plumber Emergency Service Needed?</h1>
                    <p className="text-xl my-4 mb-6 text-gray-500 text-left">
                       Telephone number 085 - 0026311. We are available day and night, 7 days a week for all emergencies such as clogged drains, clogged toilets, or leakage.
                    </p>
                    <img src="https://i.ibb.co/16Fp88k/plumber-conteiner.jpg" alt="" className="w-full" />

                    <div>
                        <h1 className="text-gray-500 text-left text-2xl">You can call us day and night for:</h1>
                        <ul className="text-gray-500 text-left text-xl list-disc ml-6">
                            {["Clogged toilet", "Clogged drain", "Blockage in sewer", "Leaking CV", "Problems with your central heating boiler", "Burst pipes", "Damage to pipes", "Flooded basement or crawl space", "Frost damage to pipes", "Frozen pipes", "Broken gas pipes", "Gas leak"].map(item => (
                                <li className="text-xl my-2 text-gray-500" key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <h1 className="text-sky-400 my-4 text-left text-3xl font-bold">Plumber Emergency 24 hours a day, 7 days a week!</h1>
                    <p className="text-gray-500 text-xl my-4 text-left">
                        Is it the middle of the night or the weekend? Contact our plumber 24-hour service immediately. We are always super fast on-site to solve the problems.
                    </p>
                    <p className="text-gray-500 text-xl my-4 text-left">
                        Our plumbing company has a large working area. Are you looking for a plumber in Den Bosch, Amsterdam, Rotterdam, Breda, or Utrecht? We work in all large and small cities in Utrecht, Brabant, South Holland, and North Holland. We offer day and night service and can always be on site quickly in case of direct emergencies.
                    </p>
                    <p className="text-gray-500 text-xl text-left">
                        Especially in case of leakage, it is important to act quickly to prevent further damage. This is why our Plumber is available 24 hours a day, 7 days a week. Contact us and make an appointment.
                    </p>
                    <p className="text-gray-500 text-xl text-left">
                        Sewer clogged? Make an appointment immediately via our service number 085 – 0026311. One of our certified plumbers will be at your doorstep within 30 minutes.
                    </p>
                    <h1 className="text-sky-400 text-3xl my-4 font-bold">Sewer clogged?</h1>
                    <p className="text-gray-500 text-xl my-4 text-left">Sewer blocked? For all blockage problems you can contact us 24/7.</p>
                    <img className="w-full h-[550px]" src="https://i.ibb.co/bsvFvkt/waterpipe-lig.jpg" alt="" />
                    <h1 className="text-2xl text-sky-400 font-bold">Water leakage?</h1>
                    <p className="text-gray-500 text-xl my-4 text-left">Do you have a leak in your home due to a burst pipe? Turn off the main tap and immediately contact the 24-hour plumber at 085 – 0026311.</p>
                    <h1 className="text-2xl text-sky-400 font-bold my-4">Gas leak?</h1>
                    <p className="text-gray-500 text-xl text-left">If you smell gas, shut off the main line and call our emergency plumber service number 085 – 0026311 immediately.</p>
                    <h1 className="text-3xl font-bold text-sky-400 my-4">Water nuisance?</h1>
                    <p className="text-gray-500 text-xl my-4 text-left">Is your crawl space or basement flooded? Call us 24 hours a day for this. We have special pumps for pumping out basements and crawl spaces.</p>
                    <h1 className="text-gray-600 font-bold text-2xl my-4">Direct contact with the certified plumber?</h1>
                    <p className="text-gray-500 text-xl text-left my-4">Call our 24-hour plumber service directly via the free telephone number 085 – 0026311.</p>
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

export default Plumber;
