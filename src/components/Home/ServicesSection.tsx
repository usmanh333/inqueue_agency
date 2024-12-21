// src/components/ServicesSection.js
import React from "react";

const ServicesSection = () => {
  return (
    <>
      <div className="flex justify-center gap-3 services-main">
        <div className="w-[18%] services-mob-init">
          <div className="text-center flex justify-center relative">
            <div className="text-white relative z-10 mob-proj-2">
              <h1 className="text-5xl text-left font-bold text-white ">
                Our Services
              </h1>
            </div>
            <div className="flex justify-center absolute bottom-[-4px] left-0 right-[23%] z-0 mob-proj-img-services">
              <img
                src="/label/bottom-shade.png"
                alt="inqueuestudio-linkedin"
                className="w-[170px] max-w-[175px] sm:max-w-[178px] md:max-w-[178px] object-cover"
              />
            </div>
          </div>
        </div>
        {[0, 1].map((_, index) => (
          <div className="w-[18%] services-mob-init" key={index}>
            <div
              className={`text-left border border-[#C7C7C7] p-4 rounded-lg bg-[#444444] mb-5 services-card`}
            >
              <div className="flex justify-start mt-5">
                <div className="bg-white rounded-full w-9 h-9 mb-4"></div>
              </div>
              <h1 className="text-lg mb-1 font-bold text-white services-head-mob">
                Graphics Designing
              </h1>
              <p className="break-all text-xs font-light text-[#C9C9C9] overflow-y-auto h-28 services-para-mob">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-3 services-main">
        {[0, 1, 2].map((_, index) => (
          <div className="w-[18%] services-mob-init" key={index}>
            <div
              className={`text-left border border-[#C7C7C7] p-4 rounded-lg bg-[#444444] mb-5 services-card`}
            >
              <div className="flex justify-start mt-5">
                <div className="bg-white rounded-full w-9 h-9 mb-4"></div>
              </div>
              <h1 className="text-lg mb-1 font-bold text-white services-head-mob">
                Graphics Designing
              </h1>
              <p className="break-all text-xs font-light text-[#C9C9C9] overflow-y-auto h-28 services-para-mob">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesSection;
