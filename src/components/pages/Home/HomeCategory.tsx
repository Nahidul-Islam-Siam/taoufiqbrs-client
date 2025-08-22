import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import img1 from "@/assets/home/Frame 56.png"
import img2 from "@/assets/home/Frame 59.png"

export function HomeCategorySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Explore <span className="text-green-600">Category</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Fruits */}
          <Card className="relative w-full h-40 overflow-hidden rounded-xl shadow-md">
            <Image
              src={img1}
              alt="Fruits"
			  width={400}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <CardContent className="relative flex items-end justify-center h-full p-4">
              <h3 className="text-white font-semibold text-base">Fruits</h3>
            </CardContent>
          </Card>

          {/* Vegetables */}
          <Card className="relative w-full h-40 overflow-hidden rounded-xl shadow-md">
            <Image
              src={img2}
              alt="Vegetables"
              fill
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <CardContent className="relative flex items-end justify-center h-full p-4">
              <h3 className="text-white font-semibold text-base">Vegetables</h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
