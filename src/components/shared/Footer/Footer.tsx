import Gmail from "@/assets/icon/gmail";
import Location from "@/assets/icon/location";
import Telephone from "@/assets/icon/telephone";
import logo from "@/assets/logo/footer-logo.png";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-black text-white nunito">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center">
            <Image width={200} height={200}  src={logo} alt="Saveurs Provençales Logo" className="w-14 h-14" />
          </div>
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-[#328736]  font-normal md:text-lg text-base  mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 md:text-base text-sm font-normal hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 md:text-base text-sm font-normal hover:text-white transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 md:text-base text-sm font-normal hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
              <h3 className="text-[#328736]  font-normal md:text-lg text-base  mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 md:text-base text-sm font-normal hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 md:text-base text-sm font-normal hover:text-white transition-colors">
                  Delivery Information
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 md:text-base text-sm font-normal hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 md:text-base text-sm font-normal hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 md:text-base text-sm font-normal hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
    <h3 className="text-[#328736]  font-normal md:text-lg text-base  mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 md:text-base text-sm font-normal hover:text-white transition-colors">
                  Fruits
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 md:text-base text-sm font-normal hover:text-white transition-colors">
                  Vegetables
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
           <h3 className="text-[#328736]  font-normal md:text-lg text-base  mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
          <Location />
                <p className="text-gray-300 text-sm">
                  Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
                </p>
              </div>

              <div className="flex items-center gap-3">
         <Telephone />
                <p className="text-gray-300">+91 987 654 3210</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-green-400">
            <Gmail />
                </div>
                <p className="text-gray-300">dummyemail@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {/* Facebook */}
          <a
            href="#"
            className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="#"
            className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
          </a>

          {/* X (Twitter) */}
          <a
            href="#"
            className="w-12 h-12 bg-black border border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <p className="text-center text-white text-base">All rights reserved @Saveurs Provençales 2025</p>
        </div>
      </div>
    </footer>
  )
}
