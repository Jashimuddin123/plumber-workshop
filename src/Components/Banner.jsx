

const Banner = () => {
    return (
        <div
        className="hero w-full bg-black   cover h-[500px]"
        style={{
          backgroundImage:
           "url(https://i.ibb.co/SRfvZXn/24uurloodgieter-baner-slide1.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className=" text-5xl font-semibold mb-6  text-white">24 HOUR PLUMBER</h1>
            <div className="border-4 border-sky-400 w-28 my-8"></div>
           <p className="text-3xl text-white font-semibold ">In collaboration with plumbing <br /> companies in the Netherlands.</p>
            <button className="btn  btn-info text-white rounded-full text-xl my-4 py-2 px-4">CALL URGENTLY: 085_0026311</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;