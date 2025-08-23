import { Card, CardContent } from "@/components/ui/card";
import Qualiaty from "../../../assets/about/Qualiaty";
import Delivery from "@/assets/about/Delivery";
import CustomerService from "@/assets/about/customerService";

export default function WhyChooseSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-bold mb-2 text-black text-center md:text-3xl text-2xl md:mb-4">
          Why Choose{" "}
          <span className="text-green-600">Saveours Provencales?</span>
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We are committed to providing you with the freshest, highest quality
          products at competitive prices. Our dedication to excellence and
          customer service sets us apart from the competition.
        </p>

        {/* Left-aligned grid with slight spacing */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {/* Card 1: Quality */}
          <Card className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardContent className="pt-0">
              <div className="flex  mb-4">
                <Qualiaty  />
              </div>
              <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                Quality You Can Trust
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our produce is carefully selected to ensure freshness and flavor.
                We go above and beyond to bring you the best quality fruits and
                vegetables, so you can enjoy each bite.
              </p>
            </CardContent>
          </Card>

          {/* Card 2: Delivery */}
          <Card className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardContent className="pt-0">
              <div className="flex  mb-4">
                <Delivery />
              </div>
              <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                Convenience at Your Doorstep
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We know your time is valuable. With our easy online ordering and
                home delivery service, Fresh Harvest makes it simple to shop for
                fresh produce from the comfort of your home.
              </p>
            </CardContent>
          </Card>

          {/* Card 3: Customer Service */}
          <Card className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardContent className="pt-0">
              <div className="flex  mb-4">
                <CustomerService />
              </div>
              <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                Exceptional Customer Service
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your satisfaction is our priority. Our team is always ready to
                assist you with any questions or requests, ensuring a smooth and
                enjoyable shopping experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}