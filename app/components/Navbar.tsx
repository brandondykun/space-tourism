"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../public/shared/logo.svg";
import hamburger from "../../public/shared/icon-hamburger.svg";
import close from "../../public/shared/icon-close.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openClass, setOpenClass] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null!);

  const currentRoute = usePathname();

  const openMenu = () => {
    setOpen(true);
    setTimeout(() => {
      setOpenClass(true);
    }, 100);
  };

  const closeMenu = () => {
    setOpenClass(false);
    setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  const closeMenuOnOutsideClick = (e: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      open &&
      !mobileMenuRef.current.contains(e.target as Node)
    ) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", closeMenuOnOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", closeMenuOnOutsideClick);
    };
  }, [open]);

  type NavLinkProps = {
    text: string;
    num: string;
    route: string;
  };
  const NavLink = ({ text, num, route }: NavLinkProps) => {
    const currentRoute = usePathname();

    return (
      <Link
        href={route}
        className={`h-full py-6 border-t-[3px] flex flex-col items-center justify-center border-b-[3px] border-solid border-transparent ${
          currentRoute !== route
            ? "hover:border-b-white hover:border-opacity-50"
            : ""
        } ${
          currentRoute === route
            ? "border-b-[3px] border-solid border-b-white"
            : ""
        }`}
      >
        <div>
          <span className="font-bold mr-2 hidden lg:inline">{num}</span>
          {text}
        </div>
      </Link>
    );
  };

  return (
    <div className="flex flex-row items-center absolute top-0 right-0 left-0 justify-between lg:top-8 p-6 md:p-0">
      <Image
        src={logo}
        alt="Logo"
        className="h-10 w-10 md:h-12 md:w-12 md:ml-8 lg:mx-16"
      />
      <div className="hidden lg:block h-[1px] bg-white opacity-25 flex-1 -mr-10 z-10"></div>
      <nav className=" text-white bg-black-transparent backdrop-blur-xl font-barlow md:block hidden px-12 lg:px-32 h-24">
        <ul className="md:flex flex-row gap-14 items-center h-full">
          <li className="h-full">
            <NavLink text="HOME" route="/" num="00" />
          </li>

          <li className="h-full">
            <NavLink text="DESTINATION" route="/destination" num="01" />
          </li>
          <li className="h-full">
            <NavLink text="CREW" route="/crew" num="02" />
          </li>
          <li className="h-full">
            <NavLink text="TECHNOLOGY" route="/technology" num="03" />
          </li>
        </ul>
      </nav>
      <button onClick={openMenu} className="md:hidden">
        <Image src={hamburger} alt="menu" className="h-[21px] w-6" />
      </button>
      <div
        className={`${
          open ? "" : "hidden"
        } fixed top-0 bottom-0 w-60 bg-black-transparent backdrop-blur-xl text-white md:hidden transition-all duration-500 ${
          openClass ? "right-0" : "-right-64"
        }`}
        ref={mobileMenuRef}
      >
        <div className="flex justify-end pr-6 pt-8">
          <button onClick={closeMenu}>
            <Image src={close} alt="Close Menu" />
          </button>
        </div>
        <nav className="font-barlow mt-6">
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/"
                className={`h-full block py-1 my-1 px-6 font-extralight tracking-widest ${
                  currentRoute === "/"
                    ? "border-r-4 border-solid border-light-blue"
                    : ""
                }`}
              >
                <span className="font-bold mr-2">00</span>HOME
              </Link>
            </li>

            <li>
              <Link
                href="/destination"
                className={`h-full block py-1 my-1 px-6 font-extralight tracking-widest ${
                  currentRoute === "/destination"
                    ? "border-r-4 border-solid border-light-blue"
                    : ""
                }`}
              >
                <span className="font-bold mr-2">01</span>DESTINATION
              </Link>
            </li>
            <li>
              <Link
                href="/crew"
                className={`h-full block py-1 my-1 px-6 font-extralight tracking-widest ${
                  currentRoute === "/crew"
                    ? "border-r-4 border-solid border-light-blue"
                    : ""
                }`}
              >
                <span className="font-bold mr-2">02</span>CREW
              </Link>
            </li>
            <li>
              <Link
                href="/technology"
                className={`h-full block py-1 my-1 px-6 font-extralight tracking-widest ${
                  currentRoute === "/technology"
                    ? "border-r-4 border-solid border-light-blue"
                    : ""
                }`}
              >
                <span className="font-bold mr-2">03</span>TECHNOLOGY
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
