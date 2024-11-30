import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-custom"
        data-bs-theme="dark"
      >
        <div className="container mx-auto">
          <div className="container p-8" id="navbarSupportedContent">
            <ul className="flex justify-center items-center gap-6 mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a
                  className="nav-link text-[#C9C9C9] font-[400] text-sm"
                  href="#"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link text-[#C9C9C9] font-[400] text-sm"
                  href="#"
                >
                  Team
                </a>
              </li>
              <li>
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
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link text-[#C9C9C9] font-[400] text-sm"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link text-[#C9C9C9] font-[400] text-sm"
                  href="/contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
