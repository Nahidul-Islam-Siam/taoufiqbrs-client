"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  image?: string;
  name: string;
  Weight: number;
  description: string;
  origin: string;
}

const ProductDetailsCard = ({
  image,
  name,
  Weight,
  description,
  origin,
}: ProductCardProps) => {
  const [quantity, setQuantity] = useState(3);
  const pricePerUnit = 50.0;
  const totalPrice = quantity * pricePerUnit;

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left side - Images */}
        <div className="space-y-4">
          {/* Main image */}
          <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
            <Image
              src={image || "placeholder-blur.png"}
              width={400}
              height={400}
              alt="Fresh cabbage"
              className="w-full h-full object-fit"
            />
          </div>

          {/* Thumbnail images */}
          <div className="flex gap-4">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className={`w-24 h-24 rounded-lg overflow-hidden border-2 ${
                  index === 1 ? "border-green-600" : "border-gray-200"
                } cursor-pointer`}
              >
                <Image
                  src={image || "placeholder-blur.png"}
                  width={96}
                  height={96}
                  alt={`Cabbage thumbnail ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Product details */}
        <div className="space-y-6">
          {/* Product title and price */}
          <div className="flex justify-between items-start">
            <h2 className="text-4xl font-bold text-gray-900">{name}</h2>
            <div className="text-right">
              <p className="text-sm text-gray-500 mb-1">Including Tax</p>
              <p className="text-3xl font-bold">${pricePerUnit.toFixed(2)}</p>
            </div>
          </div>

          {/* Origin and Weight */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-gray-700">Origin:</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-3 bg-red-500 relative">
                  <div className="absolute inset-0 bg-white rounded-full w-3 h-3 left-0.5 top-0 border border-gray-300"></div>
                </div>
                <span className="text-gray-900">{origin}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-700">Weight:</span>
              <span className="text-gray-900">{Weight}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-gray-700 mb-2">Descriptions:</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          {/* Quantity and Total Price */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-700 mb-2">Quantity</p>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-10 h-10 bg-green-600 border-green-600 text-white hover:bg-green-700"
                  onClick={decreaseQuantity}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-xl font-semibold w-8 text-center">
                  {quantity.toString().padStart(2, "0")}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-10 h-10 bg-green-600 border-green-600 text-white hover:bg-green-700"
                  onClick={increaseQuantity}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="text-right">
              <p className="text-gray-700 mb-2">Total Price</p>
              <p className="text-3xl font-bold">${totalPrice.toFixed(2)}</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-4 pt-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-full text-lg font-semibold">
              Buy Now
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 px-6 py-6 rounded-full text-lg font-semibold flex items-center gap-2 bg-transparent hover:bg-green-700 hover:text-white"
            >
              Add To Cart
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
