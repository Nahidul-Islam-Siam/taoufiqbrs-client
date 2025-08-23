import Image from "next/image"
import about from "@/assets/about/abouthero.png"

export default function AboutHeroSection() {

  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 ">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h2 className=" font-bold mb-6  text-black text-center md:text-3xl text-2xl md:mb-10">What Our <span className="text-green-600">Works</span> Is?</h2>

            {/* Store Image */}
            <div className="mb-6">
              <Image
                src={about}
                alt="Markt store exterior at night"
                width={600}
                height={300}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Every year, over 40 tons of produce reaches our store via road transport. Once we get it here, we sort
                it and store it, and we display what we might consider the best produce for our customers. We are
                committed to the freshest food, and we do our best to ensure that our customers get the best quality
                produce at the most competitive prices.
              </p>
              <p>
                We have been in business for over 20 years, and we have built a reputation for quality and service. We
                are proud to be a family-owned business, and we are committed to serving our community with the best
                possible products and service.
              </p>
              <p>
                Our produce comes from local farms and suppliers, and we work closely with them to ensure that we get
                the freshest and highest quality products. We also work with international suppliers to bring you exotic
                fruits and vegetables that you might not find elsewhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
