import React, { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className="text-[#330d6b] transition-colors  rounded hover:bg-[#330d6b8d] hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute -right-28 mt-2 w-48 border-[2px] bg-[#330d6bef]  border-[#b997ec] rounded-md shadow-lg z-50 box-border transition-colors">
          <div className="py-1 ">
            <a
              href="/category/jewelery"
              className="block px-4 py-2 rounded-md text-[#b997ec] hover:bg-transparent hover:text-[#f9f9f9] hover:border- hover:border-[#b997ec] transition-colors"
            >
              Jewelery
            </a>
            <a
              href="/category/electronics"
              className="block px-4 py-2 text-[#b997ec] rounded-md hover:bg-transparent hover:text-[#f9f9f9] hover:border- hover:border-[#b997ec] transition-colors"
            >
              Electronics
            </a>
            <div className="relative group">
              <a
                href="#"
                className="group overflow-hidden rounded-md block px-4 py-2 hover:bg-transparent text-[#b997ec] hover:text-[#f9f9f9] hover:border- hover:border-[#b997ec] transition-colors"
              >
                Clothes
              </a>
              <div className="hidden group-hover:block absolute text-center group-hover:m-auto rounded-md m-0 p-0 bg-[#b997ecea] w-[50%] right-1 border-sky-900 border transition-colors ">
                <a
                  className="block p-0 rounded-md text-[#330d6b] hover:bg-[#330d6b8d] hover:text-[#f9f9f9] transition-colors"
                  href="/category/man_clothes"
                >
                  Man
                </a>
                <a
                  className="block p-0  rounded-md  text-[#330d6b] hover:bg-[#330d6b8d] hover:text-[#f9f9f9] transition-colors"
                  href="/category/women_clothes"
                >
                  Women
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
