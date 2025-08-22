import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import imgEE from "@/assets/home/Image 7.png"

export function PromotionalBanner() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src={imgEE}
              alt="Fresh Organic Apples"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div>
            <Badge className="bg-orange-100 text-orange-600 mb-4">SUMMER SALE</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-orange-500">40% OFF</span>
              <br />
              Fresh Organic
              <br />
              Fruit 100%
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
