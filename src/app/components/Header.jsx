import Link from "next/link";
import React from "react";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About us" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/products", label: "Products" },
]

const Header = () => {
  return (
    <header className="fixed w-full bg-yellow-300 border-b-4 border-blue-400 shadow-md z-50">
      <div className="container px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/svg-icons/gym-logo.webp"
            width={60}
            height={60}
            alt="Gym Logo"
            className="rounded-full"
          />
        </Link>

        <nav className="flex space-x-6 items-center text-lg">
          {navItems?.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-300 hover:underline"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/free-trial"
            className="bg-amber-600 hover:bg-amber-700 hover:text-black transition-colors duration-300 text-white font-semibold px-4 py-2 rounded-full"
          >
            Free Trial
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
