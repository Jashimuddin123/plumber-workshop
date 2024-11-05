import Banner from "./Banner";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Banner />
            <div className="flex-grow mt-8 h-auto px-4 md:px-10 lg:px-20">
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
                    Because our 24-hour plumbing service is spread across several provinces with teams, we always have a professional near you. This allows us to be on site quickly to tackle your problem directly and limit the damage as much as possible. For direct contact with our 24-hour service, call our service number 085 - 0026311. We are available all year round, 24 hours a day and 7 days a week!
                </p>

                <div className="border-t-2 my-4"></div>

                <h1 className="text-2xl md:text-3xl font-bold my-6">
                    24-hour plumber: always fast & good service
                </h1>
                <p className="text-lg md:text-xl text-gray-500 my-4">
                    If you make an appointment via our 24-hour plumbing service, you will always be helped quickly, professionally, and with care by one of our skilled employees. We work exclusively with experienced and certified plumbers and CV fitters, each of whom has extensive expertise. In addition, all our fitters are equipped with fully equipped service vehicles, provided with all necessary tools and parts. This allows us to solve most problems immediately, and a follow-up appointment is therefore almost never necessary.

                    Choose our 24-hour plumbing service and experience our fast, reliable, and expert service that will help you immediately - day and night, anywhere in the country!
                </p>

                <img 
                    src="https://i.ibb.co/GvG4bNf/oie-Xa-Tn0nvm8b-Vc.jpg" 
                    alt="Plumbing Service" 
                    className="w-full my-6"
                />

                <p className="text-lg md:text-xl text-gray-500 my-4">
                    Our plumbing company has a large working area. Are you looking for a plumber in Den Bosch, Amsterdam, Rotterdam, Breda, or Utrecht? We work in all large and small cities in Utrecht, Brabant, South Holland, and North Holland. We offer day and night service and can always be on site quickly in case of direct emergencies.

                    Are you looking for a plumber but this is less or not urgent? For example, do you want to have renovation work carried out, have new sanitary facilities installed, or have a new tap installed? Then you have come to the right place with our 24-hour service. We are available 7 days a week to answer your questions or to schedule an appointment.

                    Direct contact with our 24-hour plumbing service? Call us 7 days a week on telephone number 085 – 0026311.
                </p>
            </div>

     
        </div>
    );
};

export default Home;
