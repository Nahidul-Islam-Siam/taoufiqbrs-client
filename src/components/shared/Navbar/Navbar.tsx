"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, User } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo/footer-logo.png";
import Cart from "@/assets/icon/cart";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const cartCount = 3; // Example static value

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node)
      ) {
        setProfileDropdownOpen(false);
      }
    };

    if (profileDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileDropdownOpen]);

  // Helper to determine active link
  const isActive = (href: string) => {
    return href === "/" ? pathname === href : pathname.startsWith(href);
  };

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/packages", label: "Packages" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
      {/* Main Navbar */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 bg-[#FEF4E8]" aria-label="Home">
          <Image
            src={logo}
            alt="Company Logo"
            width={50}
            height={40}
            priority
            className="h-[66] w-full"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigationItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-medium transition-colors duration-200 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:rounded-sm ${
                isActive(href)
                  ? "text-green-600  font-semibold border-b-2 border-green-600"
                  : "text-gray-700"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop Right Icons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Cart */}
          <div className="flex items-center gap-2">
            <Link
              href="/add-to-cart/"
              className="relative r gap-2 p-2 hover:bg-gray-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label="View shopping cart"
            >
              <Cart />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            <span className="text-green-600 font-normal font-inter">Cart </span>
          </div>

          {/* Profile Dropdown */}
          <div ref={profileDropdownRef} className="relative">
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2  border border-[#D4D4D4] focus:ring-green-500"
              aria-haspopup="true"
              aria-expanded={profileDropdownOpen}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <span className="text-gray-700 text-sm font-medium">
                John Doe
              </span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  profileDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {profileDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden z-50"
                role="menu"
              >
                <div className="py-1 text-sm">
                  <Link
                    href="/my-profile"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                    onClick={() => setProfileDropdownOpen(false)}
                    role="menuitem"
                  >
                    View Profile
                  </Link>
                  <Link
                    href="/orders"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                    onClick={() => setProfileDropdownOpen(false)}
                    role="menuitem"
                  >
                    My Orders
                  </Link>
                  <Link
                    href="/settings"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                    onClick={() => setProfileDropdownOpen(false)}
                    role="menuitem"
                  >
                    Settings
                  </Link>
                  <hr className="my-1 border-gray-200" />
                  <button
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                    onClick={() => setProfileDropdownOpen(false)}
                    role="menuitem"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Open navigation menu"
        >
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {/* Backdrop Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="font-semibold text-lg text-green-600"
          >
            Home
          </Link>
          <button
            onClick={closeMobileMenu}
            className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {navigationItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={closeMobileMenu}
                  className={`block px-3 py-2 rounded-md transition-colors ${
                    isActive(href)
                      ? "bg-green-50 text-green-700 font-semibold"
                      : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}

            <li className="pt-4 mt-2 border-t border-gray-200">
              <Link
                href="/cart"
                onClick={closeMobileMenu}
                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md"
              >
                <Cart />
                <span>Cart ({cartCount})</span>
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                onClick={closeMobileMenu}
                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md"
              >
                <User className="h-4 w-4" />
                <span>Profile</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </nav>
  );
}
