// src/components/ProjectsSection.js
import React from "react";
import Image from 'next/image';

const ProjectsSection = () => {
  return (
    <>
      <section className="text-center flex justify-center relative mt-4 mb-8 mob-proj-init">
        <div className="w-2/4 text-white relative z-10 mob-proj">
          <h1 className="text-5xl text-left font-bold text-white">
            Our Projects
          </h1>
        </div>
        <div className="flex justify-center absolute bottom-[-4px] left-0 right-[23%] z-0 mob-proj-img">
          <Image
            src="/label/bottom-shade.png"
            alt="inqueuestudio-linkedin"
            id="inqueuestudio-image"
            className="w-[25%] max-w-[175px] sm:max-w-[178px] md:max-w-[178px] object-cover"
            width={175}
            height={175}
          />
        </div>
      </section>

      <section className="text-center flex justify-center ">
        <div className="w-2/4 text-white relative z-10 mob-proj-section">
          {[0, 1, 2, 3].map((_, index: number) => (
            <div
              className={`text-left border border-[#C7C7C7] p-4 rounded-3xl ${
                index % 2 === 0 ? "bg-[#323232]" : "bg-[#323232]/20"
              } mb-10 cards-mob`}
              key={index}
            >
              <h1 className="text-3xl font-bold">Logo and Branding</h1>
              <span className="text-xs px-2 py-1 bg-[#7E7E7E] rounded-sm mr-3">
                Logo design
              </span>
              <span className="text-xs px-2 py-1 bg-[#7E7E7E] rounded-sm">
                Brand Identity
              </span>

              <section className="flex mt-8 gap-2">
                <div className="w-[75%] rounded-sm break-all block-mob-1">
                  <p className="text-xs font-light text-[#C9C9C9] mb-1 cards-mob-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor inci-
                  </p>
                  <p className="text-xs font-light text-[#C9C9C9] mb-1 cards-mob-para">
                    didunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida.
                  </p>
                </div>
                <div className="w-[25%] rounded-sm flex justify-end items-end  block-mob-2">
                  <button className="px-2.5 py-1 rounded-sm bg-[#F2B705] text-black text-xs mb-2 cards-mob-para">
                    More About the project
                  </button>
                </div>
              </section>

              <section className="flex mt-1 gap-2">
                <div
                  className={`${
                    index % 2 === 0 ? "w-[70%]" : "w-[30%]"
                  }  h-[220px] bg-[#444444] p-4 rounded-sm block-mob-3`}
                >
                  <p>{index % 2 === 0 ? "Brading SlideShow" : "Main Logo"}</p>
                </div>
                <div
                  className={`${
                    index % 2 === 0 ? "w-[30%]" : "w-[70%]"
                  }  h-[220px] bg-[#444444] p-4 rounded-sm block-mob-4`}
                >
                  <p>{index % 2 === 0 ? "Main Logo" : "Brading SlideShow"}</p>
                </div>
              </section>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
