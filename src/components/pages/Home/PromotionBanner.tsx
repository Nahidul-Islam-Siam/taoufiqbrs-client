import Image from "next/image";
import imgEE from "@/assets/home/Image 7.png";

export function PromotionalBanner() {
  return (
    <section className="max-w-7xl mx-auto py-16 bg-orange-50 rounded-xl shadow-sm">
      <div className="px-6">
        <div className="flex items-center justify-between">
          <div className="relative">
            <Image
              src={imgEE}
              alt="Fresh Organic Apples"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className=" text-[#000000] mb-4">SUMMER SALE</p>
            <span className="text-[#517907] text-4xl font-bold mb-4">40% OFF</span>
            <h2 className="text-6xl font-bold text-gray-900 mb-4">
              Fresh Organic
            </h2>
            <h2 className="text-6xl font-bold text-gray-900 mb-4">
              Fruit 100%
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
