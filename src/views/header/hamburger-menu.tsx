"use client";

import { useState, useEffect } from "react";

import Link from "next/link";

import ArrowRightIcon from "#/public/icon/arrow-right.svg";
import MenuIcon from "#/public/icon/bars.svg";
import CloseIcon from "#/public/icon/xmark.svg";
import DiscordLogo from "#/public/logo/discord.svg";
import PolygonLogo from "#/public/logo/polygon.svg";
import XLogo from "#/public/logo/x.svg";
import SolutionsImgIcon from "#/public/ui/header-solutions-1.svg";

import { headerTitleList } from "#/constants/mock-data";

interface MenuItemProps {
  title: string | null;
  onBack: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, onBack }) => (
  <div className="bg-black h-full w-full p-6 transform transition-transform duration-700">
    <button
      type="button"
      onClick={onBack}
      className="text-white flex gap-2 items-center justify-center rounded-full bg-white bg-opacity-5 py-2 px-4 border border-gray-200 mb-4"
    >
      <ArrowRightIcon width={15} height={15} className="rotate-180" />
      <span className="text-sm font-bold">Back</span>
    </button>
    <div className="mb-10">
      <h3 className="text-white text-4xl mb-4 font-medium">{title}</h3>
      <div className="flex items-center">
        <SolutionsImgIcon height={48} width={48} />
        <div className="text-white p-4 text-sm">
          <h3 className="font-semibold mb-1">AggLayer</h3>
          <p className="font-medium opacity-50">
            The trustless, cross-chain interoperability protocol
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <SolutionsImgIcon height={48} width={48} />
        <div className="text-white p-4 text-sm">
          <h3 className="font-semibold mb-1">AggLayer</h3>
          <p className="font-medium opacity-50">
            The trustless, cross-chain interoperability protocol
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <SolutionsImgIcon height={48} width={48} />
        <div className="text-white p-4 text-sm">
          <h3 className="font-semibold mb-1">AggLayer</h3>
          <p className="font-medium opacity-50">
            The trustless, cross-chain interoperability protocol
          </p>
        </div>
      </div>
    </div>
    <div className="flex gap-4 items-center">
      <Link
        className="flex items-center justify-center w-[2.1875rem] h-[2.1875rem] rounded-full hover:bg-gray-900 hover:outline hover:outline-1 hover:outline-gray-1000"
        href="https://polygon.technology/"
      >
        <XLogo className="text-white" />
      </Link>
      <Link
        className="flex items-center justify-center w-[2.1875rem] h-[2.1875rem] rounded-full hover:bg-gray-900 hover:outline hover:outline-1 hover:outline-gray-1000"
        href="https://polygon.technology/"
      >
        <DiscordLogo className="text-white" />
      </Link>
    </div>
  </div>
);

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  const toggleMenu = () => {
    if (selectedTitle) {
      setSelectedTitle(null);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const handleTitleClick = (title: string) => {
    setSelectedTitle(title);
  };

  useEffect(() => {
    if (isOpen || selectedTitle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen, selectedTitle]);

  return (
    <header className="hidden tablet:block w-full">
      <div className="flex justify-between items-center bg-black h-[70px] px-10 mobile:px-5">
        <PolygonLogo width={143} height={25} className="mr-6" />
        <button type="button" onClick={toggleMenu} className="cursor-pointer">
          {isOpen || selectedTitle ? (
            <CloseIcon width={40} height={30} />
          ) : (
            <MenuIcon width={40} height={30} />
          )}
        </button>
      </div>
      <div
        className={`absolute top-0 z-50 w-full h-full overflow-hidden transition-all duration-300 ease-in-out ${isOpen || selectedTitle ? " opacity-100 pointer-events-auto" : " opacity-0 pointer-events-none"}`}
      >
        <div className="flex justify-between items-center bg-black h-[70px] px-10">
          <PolygonLogo width={143} height={25} className="mr-6" />
          <button type="button" onClick={toggleMenu} className="cursor-pointer">
            {isOpen || selectedTitle ? (
              <CloseIcon width={40} height={30} />
            ) : (
              <MenuIcon width={40} height={30} />
            )}
          </button>
        </div>
        {selectedTitle ? (
          <MenuItem
            title={selectedTitle}
            onBack={() => setSelectedTitle(null)}
          />
        ) : (
          <div className="w-full h-screen z-50 bg-black px-10 pt-2">
            {headerTitleList.map((header) => (
              <button
                type="button"
                key={header}
                className="text-white w-full flex justify-between items-center py-4 border-b border-gray-100 cursor-pointer"
                onClick={() => handleTitleClick(header)}
              >
                <span className="font-medium text-[2rem]">{header}</span>
                <ArrowRightIcon width={20} height={20} />
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default HamburgerMenu;
