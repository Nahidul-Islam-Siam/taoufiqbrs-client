import Image from "next/image"
import fruitBox from "@/assets/about/fruiteBox.png"

export default function AboutSection() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
 <h2 className=" font-bold mb-3  text-black  md:text-3xl text-2xl md:mb-6">What <span className="text-green-600">We Are?</span></h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We are a family-owned grocery store that has been serving our community for over two decades. Our
                commitment to quality, freshness, and customer service has made us a trusted name in the neighborhood.
              </p>
              <p>
                From fresh produce to specialty items, we carefully select every product that goes on our shelves. We
                believe that good food brings people together, and we&lsquo;re proud to be part of your family&lsquo;s daily life.
              </p>
              <p>
                Whether you&lsquo;re looking for everyday essentials or something special for a celebration, our knowledgeable
                staff is here to help you find exactly what you need.
              </p>
            </div>
          </div>
          <div>
            <Image
              src={fruitBox}
              alt="Fresh produce display"
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-lg shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
