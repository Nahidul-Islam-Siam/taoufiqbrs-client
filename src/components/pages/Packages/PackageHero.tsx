import fruits from "@/assets/shop/fruits.png";
import hero from "@/assets/shop/hero.png";
import { Button } from "antd";
import Image from "next/image";

const PackageHero = () => {
  return (
    <div
      className="relative w-full md:h-[600px] h-[700px] bg-cover bg-center pt-[80px] md:pt-0"
      style={{ backgroundImage: `url(${hero.src})` }}
    >
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 items-center px-4 sm:px-6 lg:px-8">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-6 md:px-0 space-y-4 md:space-y-6 text-white">
          <div>
            <Button
              type="primary"
              size="small"
              className="rounded-full bg-green-600 hover:!bg-green-700 shadow-lg"
            >
              Find Your Choice
            </Button>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-black drop-shadow-lg">
            Find Best Packages
          </h1>
          <p className="text-base md:text-xl leading-relaxed max-w-lg text-black drop-shadow-md">
            Saveurs Provençales brings you the authentic taste of Provence —
            delivering fresh, seasonal fruits and vegetables to meet the needs
            of your business.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end px-6 md:px-0 mt-6 md:mt-0">
          <Image
            src={fruits}
            alt="fruits"
            width={554}
            height={355}
            className="rounded-2xl transform hover:scale-105 transition duration-500 max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default PackageHero;
