import fruits from "@/assets/shop/fruits.png";
import hero from "@/assets/shop/hero.png";
import { Button } from "antd";
import Image from "next/image";
interface props {
    btnTitle: string;
    title: string;
    description: string;
}
const CommonHero = ({btnTitle, title, description}:props) => {
  return (
    <div
      className="relative w-full md:h-[600px] h-[900px] bg-cover bg-center "
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
              {btnTitle}
            </Button>
          </div>
          <h1 className="text-5xl text-black md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            {title}
          </h1>
          <p className="text-lg text-black md:text-xl leading-relaxed max-w-lg drop-shadow-md">
            {description}
          </p>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-end p-6 mr-[-170px]">
          <Image
            src={fruits}
            width={554}
            height={355}
            alt="fruits"
            className="rounded-2xl  transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default CommonHero;
