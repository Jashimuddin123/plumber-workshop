import { Link } from "react-router-dom";

const RenovationWorkr = () => {
    return (
        <div className="flex flex-col p-4 lg:p-8">
            {/* Title section */}
            <div className="text-right mb-4">
                <h2 className="my-4 mr-8">
                    <span className="text-lg">Home</span> <span className="text-gray-400 font-semibold">» Emergency Plumber</span>
                </h2>
            </div>

            {/* Main content section */}
            <div className="flex flex-col lg:flex-row">
                {/* Content div on the left */}
                <div className="flex-2 w-full lg:w-2/3 shadow-2xl px-4 lg:px-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-left my-4">Renovation Work</h1>
                    <div className="border-2 border-sky-400 w-28 my-8"></div>
                    <img className="w-full h-auto" src="https://i.ibb.co/SRfvZXn/24uurloodgieter-baner-slide1.jpg" alt="Emergency Plumber" />
                    <button className="btn my-4 btn-info text-white rounded-full text-lg md:text-xl py-2 px-4">CALL URGENTLY: 085_0026311</button>
                    <p className="text-left my-4 text-lg md:text-xl text-gray-500">
                        Are you looking for a plumber who can carry out renovation work for you? Our plumbers can renovate your bathroom, renovate your toilet, but of course also replace pipes or drains. Feel free to contact our plumbers.
                    </p>
                    <p className="text-left my-4 text-lg md:text-xl text-gray-500">
                        Installing a new bathroom? Or just new plumbing? You've come to the right place! Call us completely free of charge on 085 - 0026311 and ask our plumber what the possibilities are. We carry out all work related to water pipes, gas pipes, and renovation work.
                    </p>

                    <h1 className="text-2xl md:text-2xl text-gray-600">The plumbers are specialized in the following activities, among others:</h1>
                    <ul className="ml-6 text-lg md:text-xl space-y-2 text-gray-500 list-disc mt-4 mb-6">
                        <li>Replacing existing pipes</li>
                        <li>Rerouting or relocating water and gas pipes</li>
                        <li>Rerouting or relocating sewerage and drainage</li>
                        <li>Creating or moving a connection for a dishwasher</li>
                        <li>Creating or moving a connection for a gas stove</li>
                        <li>Replacing old gutters and downpipes for rainwater drainage</li>
                    </ul>
                    <img className="w-full h-auto" src="https://i.ibb.co/8Y1xSfk/oie-Xa-Tn0nvm8b-Vc.jpg" alt="Renovation work" />

                    <h1 className="text-3xl md:text-4xl font-bold my-4 text-sky-400 text-left">Renovation Work Bathroom</h1>
                    <p className="text-gray-500 text-lg md:text-xl my-4 text-left">
                        When renovating the bathroom, it is important that the plumbing is replaced immediately. Make sure that new drains are installed and that the plumbing is replaced. Contact our plumber completely free of charge, call 085 - 0026311 and get the plumber on the line immediately.
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold text-sky-400 text-left">Relocating pipes by plumber</h1>
                    <p className="text-gray-500 text-lg md:text-xl my-4 text-left">
                        Do you want to relocate a pipe, for example, for a new kitchen? Our plumbers can install new supplies for you, and also relocate existing pipes and water taps.
                    </p>

                    <img className="w-full h-96" src="https://i.ibb.co/16Fp88k/plumber-conteiner.jpg" alt="Plumber work" />
                    <h1 className="text-3xl md:text-4xl font-bold text-sky-400 text-left">New construction or major renovation projects</h1>
                    <p className="text-gray-500 text-left text-lg md:text-xl my-4">
                        Do you have a leak in your home due to a burst pipe? Our professionals can often be found at large new construction projects or large-scale renovations.
                    </p>
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

export default RenovationWorkr;
