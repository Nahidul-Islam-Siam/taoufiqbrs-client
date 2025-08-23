import CommonHero from "@/components/ui/CommonHero/CommonHero";
import img from "@/assets/cart/11.png";
import { Button } from "antd";
import Link from "next/link";

const OrderConformation = () => {
  return (
    <div>
      <CommonHero
        btnTitle="Saveurs Provencales"
        title="Order Placed"
        description="Bring Provence to your doorstep today! Place your order now and enjoy fresh, seasonal fruits and vegetables delivered straight to your business by Saveurs Provençales."
      />

      <div
        style={{
          backgroundImage: `url(${img.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          position: "relative",
        }}
      >
        {/* Overlay for background dim effect */}
        <div className="absolute inset-0 bg-black opacity-10"></div>

        {/* Content */}
        <div className="relative flex flex-col justify-center items-center h-full text-center space-y-20">
          <p className="text-lg text-gray-800">Thank you for your order!</p>
          <h1 className="text-green-700 text-4xl font-bold">
            We Will Confirm Your Order <br /> As Soon As Possible...
          </h1>
          <h2 className="text-xl font-semibold">
            Order #1254RHJKH55 <span className="text-red-500">Pending</span>
          </h2>
          <Link href="/">
            <Button type="primary" size="small" className="bg-green-700 px-4 py-5 hover:!bg-green-800">
              Go Back Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConformation;
