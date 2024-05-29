"use client";
import { useState } from "react";
import {
  BurgermenuIcon,
  CloseIcon,
  GitHubIcon,
  LinkedInIcon,
  LogoIcon64,
  MailIcon,
} from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import DropdownLink from "./DropdownLink";
import DarkModeToggler from "./DarkModeToggler";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      path: "/portfolio",
      label: "Portfolio",
    },
    {
      path: "/blog",
      label: "Blog",
    },
    {
      path: "/about",
      label: "Über Mich",
    },
  ];
  return (
    <nav className="flex h-20 w-full items-center justify-between bg-slate-100 px-4 dark:bg-slate-950">
      <div className="flex items-center space-x-16">
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          <Image src={LogoIcon64} alt="Logo" />
        </Link>
        <ul className="hidden space-x-12 text-xl text-blue-700 dark:text-sky-500 md:flex">
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <NavLink href={navLink.path}>{navLink.label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <DarkModeToggler />
      <button
        className="block md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <CloseIcon className="text-5xl" />
        ) : (
          <BurgermenuIcon className="text-5xl" />
        )}
      </button>

      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } dropdownSize absolute left-0 top-20 z-10 flex-col space-y-4 bg-slate-100 p-4 text-xl text-blue-700 dark:bg-slate-950 dark:text-sky-500 md:hidden`}
      >
        {navLinks.map((navLink, index) => (
          <li key={index} onClick={() => setIsMenuOpen(false)}>
            <DropdownLink href={navLink.path}>{navLink.label}</DropdownLink>
          </li>
        ))}
        <div className="flex items-center justify-center gap-4 p-5">
          <a href="https://www.github.com/Dasajton" target="_blank">
            <GitHubIcon className="text-7xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/david-sajitz-748b831a4"
            target="_blank"
          >
            <LinkedInIcon className="text-7xl" />
          </a>
          <a href="mailto:davidsajitz@gmail.com" target="_blank">
            <MailIcon className="text-7xl" />
          </a>
        </div>
      </ul>
    </nav>
  );
}
