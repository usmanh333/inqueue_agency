import Image from "next/image";

export default function Main() {
  return (
    <>
      <div>
        <section className="text-center flex justify-center relative mt-8">
          <div className="text-4xl md:text-6xl font-bold w-[60%] text-white relative z-10 about-mob-head-2">
            <h1 className="text-4xl md:text-6xl font-bold text-white relative">
              Hi, We Are The Team Behind
            </h1>
            <h1 className="relative z-10">Inqueue</h1>
          </div>
          <div className="absolute inset-0 flex justify-center items-end pointer-events-none z-0 team-mob">
            <Image
              src="/label/bottom-shade.png"
              alt="inqueuestudio-linkedin"
              className="w-[110px] sm:w-[110px] md:w-[110px] object-cover"
              width={110}
              height={110}
            />
          </div>
        </section>
      </div>

      <div>
        <div className="flex justify-center my-12 sect-two-mob">
          <div className="w-[70%] border border-[#CE9E0B] p-10 rounded-3xl sect-main-mob">
            <div className="flex gap-4 mt-6 mb-10 sect-submain-mob">
              <div className="w-[40%] wid-sec-one">
                <div className="h-full bg-white rounded-xl wid-sec-one-sub"></div>
                <div className="flex justify-between items-center">
                  <h1 className="mt-2 text-start text-[#C9C9C9] font-semibold text-sm">
                    CEO Name
                  </h1>
                  <h1 className="mt-2 text-start text-[#C9C9C9] text-sm text-[16px]">
                    Founder & CEO / Inqueue
                  </h1>
                </div>
              </div>

              <div className="w-[60%] wid-sec-one">
                <h1 className="text-start mt-2 text-[#C9C9C9] font-light text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </h1>
                <h1 className="text-start mt-2 text-[#C9C9C9] font-light text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </h1>
                <h1 className="text-start mt-2 text-[#C9C9C9] font-light text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </h1>
                <h1 className="text-start mt-2 text-[#C9C9C9] font-light text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center mt-8 mb-24 gap-5 team-job-mob flex-wrap">
          {[0, 1, 2, 3].map((_, index) => (
            <div className="bg-[#323232] p-6 rounded-xl mapped-mob" key={index}>
              <div className="gap-4">
                <div className="text-center mx-auto flex justify-center">
                  <div className="h-[170px] w-[170px] bg-white rounded-xl team-pic-mob"></div>
                </div>
                <div className=" items-center">
                  <h1 className="mt-3 text-center text-[#C9C9C9] font-semibold text-sm team-head">
                    Name
                  </h1>
                  <h1 className="mt-1 text-center text-[#C9C9C9] text-xs text-[16px] team-para">
                    JOb Description
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
