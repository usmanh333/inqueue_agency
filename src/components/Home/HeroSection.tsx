const HeroSection = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="text-center flex justify-center relative">
        <div className="text-4xl md:text-6xl font-bold w-fit text-white relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            We craft purposeful
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            brand identities and{" "}
          </h1>

          <h1 className="text-4xl md:text-6xl font-bold text-white">
            effective logos
          </h1>
        </div>
        <div className="flex justify-center absolute bottom-[-16px] left-0 right-0 z-0 mob-yellow">
          <img
            src="/label/bottom-shade.png"
            alt="inqueuestudio-linkedin"
            className="w-[34%] object-cover"
          />
        </div>
      </section>

      <h1 className="text-center mt-2 text-[#C9C9C9] font-light text-[16px]">
        Turn your vision into reality with impactful and unforgettable branding
        solutions
      </h1>
      <div className="flex justify-center items-center gap-4 mt-4">
        <button className="bg-[#F2B705] px-5 py-2 rounded-md">
          Book a Call
        </button>
        <button className=" px-5 py-2 rounded-md text-white border border-[#C9C9C9]">
          Our Work
        </button>
      </div>

      {/* section 2 */}

      {/* <section className="mt-2">
        <div className="text-center flex justify-center my-9">
          {[0, 1, 2, 3, 4, 5].map(() => (
            <div className="px-3 p-2.5 bg-[#444444] mr-16">
              <img
                src="/icons/tick-icon.png"
                alt="inqueuestudio-linkedin"
                className="w-[45px] h-[45px] object-cover"
              />
            </div>
          ))}
        </div>
        <div className="text-center flex justify-center my-9 ml-[148px]">
          {[0, 1, 2, 3, 4, 5].map(() => (
            <div className="px-3 p-2.5 bg-[#444444] mr-16">
              <img
                src="/icons/tick-icon.png"
                alt="inqueuestudio-linkedin"
                className="w-[45px] h-[45px] object-cover"
              />
            </div>
          ))}
        </div>
      </section> */}

      {/* section 3 */}
      <section className="text-center flex justify-center mb-9 mt-8">
        <div className="text-3xl md:text-3xl font-medium w-2/4 text-white relative z-10 mob-hero">
          <h1 className="text-3xl md:text-3xl font-medium text-white mob-hero-text">
            Where innovation meets artistry!
          </h1>
          <h1 className="text-3xl md:text-3xl font-medium text-white mob-hero-text">
            Our design agency is committed to creating unique,
          </h1>

          <h1 className="text-3xl md:text-3xl font-medium text-white mob-hero-text">
            unforgettable visual experiences for brands that{" "}
          </h1>
          <h1 className="text-3xl md:text-3xl font-medium text-white mob-hero-text">
            strive to stand out.{" "}
          </h1>
        </div>
      </section>

      <section className="flex justify-center text-center my-8">
        <div className="w-2/4 flex justify-center text-center items-center bg-[#444444] h-[400px] rounded-3xl mob-hero-video">
          <img
            src="/icons/play-icon.png"
            alt="inqueuestudio-linkedin"
            className="w-[70px] h-[70px] object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
