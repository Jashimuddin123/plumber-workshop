const Banner = () => {
  return (
      <div
          className="hero w-full bg-black cover h-[500px] md:h-[400px]"
          style={{
              backgroundImage:
                  "url(https://i.ibb.co/SRfvZXn/24uurloodgieter-baner-slide1.jpg)",
          }}>
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md px-4 md:px-8">
                  <h1 className="text-4xl md:text-4xl font-semibold mb-6 text-white">
                      24 HOUR PLUMBER
                  </h1>
                  <div className="border-2 border-sky-400 w-20 md:w-28 my-4 ml-8 md:my-8 mx-auto"></div>
                  <p className="text-xl md:text-2xl text-white font-semibold space-x-12">
                      In collaboration with plumbing  companies in the
                      Netherlands.
                  </p>
                  <button className="btn btn-info text-white rounded-full text-lg md:text-xl my-4 py-2 px-6 md:px-8">
                      CALL URGENTLY: 085 _ 0026311
                  </button>
              </div>
          </div>
      </div>
  );
};

export default Banner;
