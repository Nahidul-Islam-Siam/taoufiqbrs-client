"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { Star } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: StaticImageData;
  inStock?: boolean;
  description?: string;
  origin?: string;
  type?: string;
  Weight?: number;
}

export function ProductCard({
  name,
  price,
  originalPrice,
  image,
  inStock = true,
  description,
  origin,
  type,
  Weight,
}: ProductCardProps) {
  const [quantity, setQuantity] = useState<number>(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="relative mb-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={150}
            height={150}
            className="w-full h-32 object-cover rounded-lg"
          />
          {inStock && (
            <Badge className="absolute top-2 left-[180] bg-[#FEF4E8] text-black hover:text-white hover:bg-green-500 text-xs">
              IN STOCK
            </Badge>
          )}
        </div>
        <h3 className="font-semibold text-sm mb-1">{name}</h3>

        {description && (
          <p className="text-xs text-gray-500 mb-2">
            {" "}
            Description: {description}
          </p>
        )}
        {origin && (
          <p className="text-xs text-gray-500 mb-2">Origin: {origin}</p>
        )}
        {type && <p className="text-xs text-gray-500 mb-2">Type: {type}</p>}
        {Weight && (
          <p className="text-xs text-gray-500 mb-2">Weight: {Weight}</p>
        )}
        {/* <div className="flex items-center mb-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-3 h-3 ${
                  star <= rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({rating}.0)</span>
        </div> */}

        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-bold text-green-600">
            ${price?.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${originalPrice?.toFixed(2)}
            </span>
          )}
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center justify-evenly gap-3 mb-3">
          <Button
            onClick={decrement}
            className="px-3 py-1 rounded-full bg-red-500 text-white hover:bg-red-600"
          >
            -
          </Button>
          <span className="text-lg font-medium">{quantity}</span>
          <Button
            onClick={increment}
            className="px-3 py-1 rounded-full bg-green-500 text-white hover:bg-green-500"
          >
            +
          </Button>
        </div>
        <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm py-2 rounded-full">
          Add {quantity} to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
