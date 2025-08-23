import Image from "next/image";
import image1 from "@/assets/about/g1.png";
import image2 from "@/assets/about/g2.png";
import image3 from "@/assets/about/g3.png";
import image4 from "@/assets/about/g4.png";
import image5 from "@/assets/about/g5.png";
import image6 from "@/assets/about/g6.png";

export default function MemoriesSection() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
         <h2 className=" font-bold mb-6  text-black text-center md:text-3xl text-2xl md:mb-10">Our <span className="text-green-600">Memories</span> </h2>


        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { src: image1, alt: "Store aisles" },
            { src: image2, alt: "Produce section" },
            { src: image3, alt: "Happy customers" },
            { src: image4, alt: "Staff helping customers" },
            { src: image5, alt: "Fresh herbs display" },
            { src: image6, alt: "Bakery section" },
          ].map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={250}
                height={250}
                className="w-full h-full object-cover rounded-lg 
                           transform transition-transform duration-500 
                           group-hover:scale-105 
                           group-hover:shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}