import hero from "@/assets/shop/details-hero.png";
import { Button } from "antd";
const ProductDetailsHero = () => {
  return (
    <div
      className="relative w-full md:h-[600px] h-[600px] bg-cover bg-center "
      style={{
        backgroundImage: `url(${hero.src})`,
      }}
    >
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 ">
        {/* Left Content */}
        <div className="flex flex-col justify-center px-8 md:px-0 space-y-6 text-white">
          <div>
            <Button
              type="primary"
              size="small"
              className="rounded-full bg-green-600 hover:!bg-green-700 shadow-lg"
            >
              Saveurs Provencales{" "}
            </Button>
          </div>
          <h1 className="text-5xl text-black md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Know The Details
          </h1>
          <p className="text-lg text-black md:text-xl leading-relaxed max-w-lg drop-shadow-md">
            Saveurs Provençales brings you the authentic taste of Provence —
            delivering fresh, seasonal fruits and vegetables to meet the needs
            of your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsHero;
