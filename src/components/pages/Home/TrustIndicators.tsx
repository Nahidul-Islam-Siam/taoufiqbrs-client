import Image from "next/image";

import img3 from "@/assets/icon/gg.png";
import Microphone from "@/assets/icon/microphone";
import Invoice from "@/assets/icon/invoice";
import QualitySvg from "@/assets/icon/qualitySvg";

export function TrustIndicators() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="group flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md text-gray-700 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600">
            <div className="text-gray-500 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
              <Microphone />
            </div>
            <span className="mt-3 text-sm font-medium text-center group-hover:text-white transition-colors duration-300">
              Available Monday to Saturday
            </span>
          </div>

          {/* Card 2 */}
          <div className="group flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md text-gray-700 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600">
            <div className="text-gray-500 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
              <Invoice />
            </div>
            <span className="mt-3 text-sm font-medium text-center group-hover:text-white transition-colors duration-300">
              Pay With Invoice
            </span>
          </div>

          {/* Card 3 - Logo */}
          <div className="group flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600">
            <Image
              src={img3}
              alt="Region Sud"
              width={100}
              height={100}
              className="h-full w-auto object-contain mb-3 transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Card 4 */}
          <div className="group flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md text-gray-700 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600">
            <div className="text-gray-500 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
              <QualitySvg />
            </div>
            <span className="mt-3 text-sm font-medium text-center group-hover:text-white transition-colors duration-300">
              Quality Guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
