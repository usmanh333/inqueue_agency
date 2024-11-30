// src/components/TestimonialsSection.js
import React from "react";

const TestimonialsSection = () => {
  return (
    <>
      <div className="flex justify-center gap-3">
        <div className="my-8">
          <h1 className="text-4xl font-bold text-white">Hear from them</h1>
        </div>
      </div>
      <div className="flex justify-center gap-3">
        {[0, 1, 2].map(() => (
          <div className="w-[18%]">
            <div
              className={`text-left border border-[#C7C7C7] p-4 rounded-lg bg-[#444444] mb-5`}
            >
              <div className="flex justify-start mt-5 gap-2 items-start">
                <div className="bg-white rounded-full w-9 h-9 mb-4"></div>
                <div className="mb-1 leading-[0px]">
                  <h1 className="text-lg font-bold text-white">
                    Graphics Designing
                  </h1>
                  <span className="text-xs text-white font-light">
                    Brand Name
                  </span>
                </div>
              </div>
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
      <div className="flex justify-center gap-2">
        {[0, 1].map(() => (
          <div>
            <img
              src="/icons/diamond.png"
              alt="inqueuestudio-linkedin"
              className="w-[15px] h-[15px] object-cover"
            />
          </div>
        ))}
        <img
          src="/icons/diamond2.png"
          alt="inqueuestudio-linkedin"
          className="w-[15px] h-[15px] object-cover"
        />
        {[0, 1].map(() => (
          <div>
            <img
              src="/icons/diamond.png"
              alt="inqueuestudio-linkedin"
              className="w-[15px] h-[15px] object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-3">
        <div className="mt-8 mb-4 text-center">
          <h1 className="text-3xl font-bold text-white">
            Looking to create a credible and relatable brand that
          </h1>
          <h1 className="text-3xl font-bold text-white">
            resonates with your target audience?
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="px-6 py-1 rounded-sm bg-[#F2B705] text-black text-sm mb-2">
          Let's connect and turn your vision into reality!
        </button>
      </div>
    </>
  );
};

export default TestimonialsSection;
