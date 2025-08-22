import Image from "next/image";
import imgEE from "@/assets/home/Image 7.png";

export function PromotionalBanner() {
  return (
    <section className="max-w-7xl mx-auto py-16 bg-orange-50 rounded-xl shadow-sm">
      <div className="px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Image */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <Image
              src={imgEE}
              alt="Fresh Organic Apples"
              width={400}
              height={300}
              className="rounded-lg w-full max-w-sm md:max-w-full h-auto"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col items-center md:justify-between md:text-center md:w-1/2">
            <p className="text-[#000000] mb-2 text-lg">SUMMER SALE</p>
            <span className="text-[#517907] text-3xl md:text-4xl font-bold mb-4">
              40% OFF
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">
              Fresh Organic
            </h2>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
              Fruit 100%
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
