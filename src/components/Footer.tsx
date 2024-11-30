// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto py-8 border-t border-b border-[#C9C9C9]">
      <div className="container px-[8%] text-center">
        <div className="flex justify-between items-center">
          <div>
            <a
              className="navbar-brand mx-auto d-none d-lg-block text-center"
              href="/"
            >
              <img
                src={"/images/logo.png"}
                alt="inqueuestudio"
                className="w-[146px] h-[36px] object-contain"
              />
            </a>
          </div>
          <div>
            <p className="text-[#818181] font-[400] text-xs uppercase">
              Need Support?
            </p>
            <p className="text-[#C9C9C9] font-[400] text-xs">
              Inqueue@gmail.com
            </p>
          </div>
          <div>
            <p className="text-[#818181] font-[400] text-xs   ">Follow us On</p>
            <p className="flex justify-between mt-1 items-center text-[#C9C9C9] font-[400] text-xs">
              <img
                src={"/social-icons/insta.png"}
                alt="inqueuestudio-instagram"
                className="w-[15px] h-[15px] object-contain"
              />
              <img
                src={"/social-icons/linkidin.png"}
                alt="inqueuestudio-linkidin"
                className="w-[15px] h-[15px] object-contain"
              />
              <img
                src={"/social-icons/fb.png"}
                alt="inqueuestudio-facebook"
                className="w-[15px] h-[15px] object-contain"
              />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
