"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
import { IoStatsChartOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();


  const navLinks = [
    {
      name: "Home",
      href: "/",
      icon: <GoHome className="text-lg" />,
    },
    {
      name: "Timeline",
      href: "/timeline",
      icon: <CiClock2 className="text-lg" />,
    },
    {
      name: "Stats",
      href: "/stats",
      icon: <IoStatsChartOutline className="text-lg" />,
    },
  ];

  return (
    <header className="w-full border-b border-gray-200 bg-[#f3f3f3]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold">
          <span className="text-slate-800">Keen</span>
          <span className="text-[#245b4b]">Keeper</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-3 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-2 rounded-md px-5 py-2.5 text-base transition ${
                  isActive
                    ? "bg-[#245b4b] text-white"
                    : "text-slate-500 hover:bg-white hover:text-slate-800"
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl text-slate-700 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`mb-2 flex items-center gap-2 rounded-md px-4 py-3 text-base transition ${
                    isActive
                      ? "bg-[#245b4b] text-white"
                      : "text-slate-600 hover:bg-gray-100 hover:text-slate-900"
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
