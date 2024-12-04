export default function Main() {
  return (
    <>
      <div>
        <section className="text-center flex justify-center relative mt-8">
          <div className="text-4xl md:text-6xl font-bold w-2/4 text-white relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Let’s make it a reality!{" "}
            </h1>
          </div>
          <div className="flex justify-end absolute bottom-0 left-0 right-[27%] z-0">
            <img
              src="/label/bottom-shade.png"
              alt="inqueuestudio-linkedin"
              className="w-[24%] object-cover"
            />
          </div>
        </section>
        <h1 className="text-center mt-2 text-[#C9C9C9] font-light text-[16px]">
          We’re excited to collaborate with you! Please share your details, &
          we’ll get
        </h1>
        <h1 className="text-center mt-2 text-[#C9C9C9] font-light text-[16px]">
          back to you within 2-3 business days.
        </h1>
      </div>

      <div className="flex justify-center items-center gap-4 my-4">
        <div className="flex items-center gap-2">
          <img
            src="/icons/phone.png"
            alt="phone-icon"
            className="w-[12px] object-cover"
          />
          <div className="text-[#C9C9C9]">123-456-789-0</div>
        </div>
        <div className="flex gap-2 items-center ">
          <img
            src="/icons/mail.png"
            alt="mail-icon"
            className="w-[15px] object-cover"
          />
          <div className="text-[#C9C9C9]">Inqueue@gmail.com</div>
        </div>
      </div>

      <div className="flex justify-center mb-12">
        <div className="w-[50%] border border-[#CE9E0B] p-10 rounded-3xl">
          <div className="flex justify-center">
            <h1 className="text-2xl font-medium text-white ">GET IN TOUCH</h1>
          </div>
          <div className="mt-8 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-[#A1A1A1] focus:border-[#CE9E0B] focus:outline-none placeholder-gray-400 text-white"
            />
          </div>
          <div className="my-10">
            <input
              type="text"
              placeholder="Your Phone Number"
              className="w-full bg-transparent border-b border-[#A1A1A1] focus:border-[#CE9E0B] focus:outline-none placeholder-gray-400 text-white"
            />
          </div>
          <div className="my-10">
            <input
              type="text"
              placeholder="Your E-Mail Address "
              className="w-full bg-transparent border-b border-[#A1A1A1] focus:border-[#CE9E0B] focus:outline-none placeholder-gray-400 text-white"
            />
          </div>
          <div className="my-10">
            <input
              type="text"
              placeholder="Message"
              className="w-full bg-transparent border-b border-[#A1A1A1] focus:border-[#CE9E0B] focus:outline-none placeholder-gray-400 text-white"
            />
          </div>
          <div className="flex justify-center my-10">
            <button className="px-8 rounded-md py-2 text-black bg-[#CE9E0B] text-lg">Let"s Connect!</button>
          </div>
        </div>
      </div>
    </>
  );
}
