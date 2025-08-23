import {
  LocationEditIcon,
  MessageCircleHeartIcon,
  PhoneCallIcon,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-[#FEF4E8] py-16 h-full md:h-[518px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
          Contact Us
        </h1>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {/* Location */}
          <div className="flex flex-col items-center text-center p-6  rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <LocationEditIcon className="w-10 h-10 text-green-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Our Location</h2>
            <p className="text-gray-500 text-sm">
              3456, Lorem Ipsum Street, USA
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center p-6  rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <PhoneCallIcon className="w-10 h-10 text-green-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Call Us</h2>
            <p className="text-gray-500 text-sm">
              +1 (234) 567-890
            </p>
          </div>

          {/* Message */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <MessageCircleHeartIcon className="w-10 h-10 text-green-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-black">Email Us</h2>
            <p className="text-gray-500 text-sm">
              contact@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
