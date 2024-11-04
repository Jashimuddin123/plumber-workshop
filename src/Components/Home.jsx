import Banner from "./Banner";

const Home = () => {
    return (
        <div >
            <Banner />
            <div className="mt-8  h-[800px] mb-50">
                <div className="px-4 md:px-10 lg:px-20" >
                <h2 className="text-xl md:text-2xl text-gray-500">
                    Our 24-hour plumbing service is available day and night to provide immediate assistance with a variety of problems, such as:
                </h2>
                <ul className="ml-6 text-lg md:text-xl space-y-4 text-gray-500 list-disc mt-4">
                    <li>Leakage – Quick repair to prevent further water damage.</li>
                    <li>Blockage – Immediate help for blocked drains and pipes.</li>
                    <li>CV problems / CV boiler problems – Fast service for malfunctions in your heating system.</li>
                    <li>Sewer Problems – Effective solutions for sewer-related issues.</li>
                    <li>Roof Leak – Prompt repair to minimize water damage.</li>
                    <li>Flooded basement / flooded crawl space – Quick water removal to prevent mold.</li>
                </ul>
                <p className="text-lg md:text-xl my-6 text-gray-500">
                    Because our 24-hour plumbing service is spread across several provinces with teams, we always have a professional near you. Call our service number 085 - 0026311. We are available all year round, 24/7!
                </p>

                <div className="border-t-2 my-4"></div>

                <h1 className="text-2xl md:text-3xl font-bold my-6">
                    24-hour plumber: always fast & good service
                </h1>
                <p className="text-lg md:text-xl text-gray-500 my-4">
                    If you make an appointment via our 24-hour plumbing service, you will always be helped quickly by one of our skilled employees. We work with experienced plumbers and CV fitters equipped with all necessary tools, allowing us to solve most problems immediately.
                </p>
                <p className="text-lg md:text-xl text-gray-500 mb-8">
                    Choose our 24-hour plumbing service and experience our fast, reliable, and expert service available day and night, anywhere in the country!
                </p>

                </div>
                {/* Full-width image container */}
                <div className="w-full">
                    <img 
                        src="https://i.ibb.co/GvG4bNf/oie-Xa-Tn0nvm8b-Vc.jpg" 
                        alt="Plumbing Service" 
                        className="lg:w-full h-72" 
                    />
                </div>
<div className="px-4 md:px-10 lg:px-20">
    
<p className="text-lg md:text-xl mt-8 text-gray-500">
                    Our plumbing company operates in Den Bosch, Amsterdam, Rotterdam, Breda, and Utrecht. We offer day and night service and can respond quickly to emergencies.
                </p>
                <p className="text-lg md:text-xl mt-4 text-gray-500">
                    Looking for a plumber for less urgent work like renovations or new sanitary installations? Contact us to schedule an appointment.
                </p>
                <p className="text-lg md:text-xl mt-4 mb-16 text-gray-500">
                    For direct contact with our <span className="text-gray-600 font-bold">24-hour plumbing</span> service, call us at <span className="text-gray-700">085 – 0026311.</span>
                </p>
</div>
            </div>
        </div>
    );
};

export default Home;
