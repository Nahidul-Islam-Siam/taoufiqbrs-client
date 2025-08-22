"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id?: number;
  name?: string;
  price?: number;
  originalPrice?: number;
  image?: StaticImageData;
  inStock?: boolean;
  description?: string;
  origin?: string;
  type?: string;
  weight?: number;
  packages?: string;
}

export function ProductCard({
  name,
  price,
  image,
  inStock = true,
  description,
  origin,
  type,
  weight,
  packages
}: ProductCardProps) {
  const [quantity, setQuantity] = useState<number>(1);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <Card className="overflow-hidden rounded-2xl shadow-md max-w-xs w-full mx-auto">
      <CardContent className="p-4 relative">
        {/* Top badge */}
        {inStock && (
          <div className="absolute top-2 right-2 flex items-center space-x-2 bg-[#FEF4E8] px-2 py-1 rounded-md">
            <span className="text-xs bg-black text-white px-1.5 py-0.5 rounded-sm">
              NEW
            </span>
            <span className="text-xs text-black">In stock</span>
          </div>
        )}

        {/* Product Image */}
        <div className="mb-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={'name'}
            width={300}
            height={300}
            className="w-full h-40 object-contain rounded-lg"
          />
        </div>

        {/* Product Title */}
        <h3 className="font-bold text-lg mb-1">{name}</h3>

        {/* Description */}
        {packages && (
          <p className="text-xs text-gray-500 mb-2">
            {" "}
            Packages: {packages}
          </p>
        )}
        {description && (
          <p className="text-sm text-gray-500 mb-2">
            <span className="font-medium">Description:</span> {description}
          </p>
        )}

        {/* Origin */}
        {origin && (
          <p className="text-sm text-gray-500">
            <span className="font-medium">Origin:</span> 🇯🇵 {origin}
          </p>
        )}

        {/* Type */}
        {type && (
          <p className="text-sm text-gray-500">
            <span className="font-medium">Type:</span> {type}
          </p>
        )}

        {/* Weight */}
        {weight && (
          <p className="text-sm text-gray-500 mb-2">
            <span className="font-medium">Weight:</span> {weight}kg
          </p>
        )}

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-md font-semibold text-green-600">
            Price: $ {price?.toFixed(2) || 0}
          </span>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center justify-center gap-6 mb-4">
          <Button
            onClick={decrement}
            className="w-8 h-8 rounded-full bg-red-500 text-white hover:bg-red-600 flex items-center justify-center text-lg"
          >
            -
          </Button>
          <span className="text-lg font-semibold">{quantity}</span>
          <Button
            onClick={increment}
            className="w-8 h-8 rounded-full bg-green-600 text-white hover:bg-green-700 flex items-center justify-center text-lg"
          >
            +
          </Button>
        </div>

        {/* Add to Cart Button */}
        <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold text-md py-3 rounded-full">
          Add To Cart
        </Button>
      </CardContent>
    </Card>
  );
}
