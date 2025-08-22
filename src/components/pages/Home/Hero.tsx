
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import fruitImag from "@/assets/hero/fruit-bucket.png"
import bgImg from "@/assets/hero/Mask group.png"
import Apple from "@/assets/icon/apple"

export function HeroSection() {
  return (
    <section
      className="
        relative flex items-center justify-center md:justify-start px-4 py-16
        min-h-screen sm:min-h-screen lg:min-h-[80vh] xl:min-h-[100vh] 
        overflow-hidden
      "
    >
      {/* background image */}
      <div className="absolute inset-0">
        <Image
          src={bgImg}
          alt="background image"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <Badge className="bg-green-600 text-white mb-4 px-3 py-1 text-sm">
              Explore Your Choice
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Trusted Partner For{" "}
              <span className="text-green-600">Organic Produce</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Saveurs Provençales brings you the authentic taste of Provence — 
              delivering fresh, seasonal fruits and vegetables to meet the needs of your business.
            </p>

            {/* Search Bar */}
            <div className="relative mb-8 max-w-md mx-auto lg:mx-0 flex">
              <Input
                type="text"
                placeholder="Search Your Product"
                className=" pl-4 pr-32 py-4 text-base bg-white  sm:text-lg border-1 border-green-200 focus:border-green-500 focus:ring-green-500 rounded-l-full"
              />
              <button
                className=" rounded-r-full bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 text-sm sm:text-base"
              >
                Search
              </button>
            </div>

            {/* App Badges */}
            <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
              <Apple/>
              <Image
                src="/google-play-badge.png"
                alt="Google Play"
                width={130}
                height={40}
                className="w-28 sm:w-36 lg:w-40 h-auto"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center items-center">
            <Image
              src={fruitImag}
              alt="Basket of organic vegetables"
              width={500}
              height={400}
              className="w-64 sm:w-80 md:w-[709px] lg:w-[624px] h-auto relative z-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
