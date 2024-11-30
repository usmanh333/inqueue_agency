// src/components/ServicesSection.js
import React from "react";

const ServicesSection = () => {
  return (
    <>
      <div className="flex justify-center gap-3">
        <div className="w-[18%]">
          <div className="text-center flex justify-center relative">
            <div className="text-white relative z-10">
              <h1 className="text-5xl text-left font-bold text-white">
                Our Services
              </h1>
            </div>
            <div className="flex justify-center absolute bottom-[-4px] left-0 right-[23%] z-0">
              <img
                src="/label/bottom-shade.png"
                alt="inqueuestudio-linkedin"
                className=" object-cover"
              />
            </div>
          </div>
        </div>
        {[0, 1].map(() => (
          <div className="w-[18%]">
            <div
              className={`text-left border border-[#C7C7C7] p-4 rounded-lg bg-[#444444] mb-5`}
            >
              <div className="flex justify-start mt-5">
                <div className="bg-white rounded-full w-9 h-9 mb-4"></div>
              </div>
              <h1 className="text-lg mb-1 font-bold text-white">
                Graphics Designing
              </h1>
              <p className="break-all text-xs font-light text-[#C9C9C9] overflow-y-auto h-28">
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
      <div className="flex justify-center gap-3">
        {[0, 1, 2].map(() => (
          <div className="w-[18%]">
            <div
              className={`text-left border border-[#C7C7C7] p-4 rounded-lg bg-[#444444] mb-5`}
            >
              <div className="flex justify-start mt-5">
                <div className="bg-white rounded-full w-9 h-9 mb-4"></div>
              </div>
              <h1 className="text-lg mb-1 font-bold text-white">
                Graphics Designing
              </h1>
              <p className="break-all text-xs font-light text-[#C9C9C9] overflow-y-auto h-28">
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
