// src/components/Footer.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container mx-auto py-8 border-t border-b border-[#C9C9C9] footer-main-mob">
      <div className="container px-[8%] text-center">
        <div className="flex justify-between items-center">
          <div>
            <Link
              className="navbar-brand mx-auto d-none d-lg-block text-center"
              href="/"
            >
              <Image
                src={"/images/logo.png"}
                alt="inqueuestudio"
                className="w-[146px] h-[36px] object-contain inqueue"
                width={146}
                height={36}
              />
            </Link>
          </div>
          <div>
            <p className="text-[#818181] font-[400] text-xs uppercase footer-text">
              Need Support?
            </p>
            <p className="text-[#C9C9C9] font-[400] text-xs footer-text">
              Inqueue@gmail.com
            </p>
          </div>
          <div>
            <p className="text-[#818181] font-[400] text-xs footer-text">
              Follow us On
            </p>
            <p className="flex justify-between mt-1 items-center text-[#C9C9C9] font-[400] text-xs">
              <Image
                src={"/social-icons/insta.png"}
                alt="inqueuestudio-instagram"
                className="w-[15px] h-[15px] object-contain"
                width={15}
                height={15}
              />
              <Image
                src={"/social-icons/linkidin.png"}
                alt="inqueuestudio-linkidin"
                className="w-[15px] h-[15px] object-contain"
                width={15}
                height={15}
              />
              <Image
                src={"/social-icons/fb.png"}
                alt="inqueuestudio-facebook"
                className="w-[15px] h-[15px] object-contain"
                width={15}
                height={15}
              />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
