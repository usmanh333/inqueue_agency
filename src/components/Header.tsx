import React from "react";
import Image from 'next/image';
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-custom"
        data-bs-theme="dark"
      >
        <div className="container mx-auto">
          <div className="container p-8" id="navbarSupportedContent">
            <ul className="flex justify-center items-center gap-6 mb-2 mb-lg-0 header-mob">
              <li className="nav-item mx-2">
                <Link
                  className="nav-link text-[#C9C9C9] font-[400] text-sm"
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link text-[#C9C9C9] font-[400] text-sm"
                  href="/ourteam"
                >
                  Team
                </Link>
              </li>
              <li>
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
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link text-[#C9C9C9] font-[400] text-sm"
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link text-[#C9C9C9] font-[400] text-sm"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
