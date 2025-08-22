"use client";

import { useState } from "react";
import { ChevronLeft, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import img1 from "@/assets/cart/1.png";
import img2 from "@/assets/cart/2.png";
import img3 from "@/assets/cart/3.png";

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
}

export default function CartDetails() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Vegetable",
      description:
        "Tomato(1kg), Black Olive(5kg), Black Olive(5kg), Tomato(1kg)",
      price: 345000,
      quantity: 2,
      image: img1,
    },
    {
      id: 2,
      name: "Vegetable",
      description:
        "Tomato(1kg), Black Olive(5kg), Black Olive(5kg), Tomato(1kg)",
      price: 345000,
      quantity: 1,
      image: img2,
    },
    {
      id: 3,
      name: "Vegetable",
      description:
        "Tomato(1kg), Black Olive(5kg), Black Olive(5kg), Tomato(1kg)",
      price: 345000,
      quantity: 1,
      image: img3,
    },
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.quantity * 70, 0);
  const tax = 7;
  const total = subtotal + tax;

  return (
    <div className="mt-10 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="sm" className="p-2">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold">Shopping Continue</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems?.map((item) => (
              <Card key={item?.id} className="p-4">
                <div className="flex items-center gap-4">
                  {/* Product Image */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      width={500}
                      height={300}
                      src={item?.image || "/placeholder.svg"}
                      alt={item?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{item?.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {item?.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-lg font-semibold">
                    ${item?.price?.toLocaleString()}
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-8 h-8 p-0 bg-red-500 hover:bg-red-600 text-white border-red-500"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center font-medium">
                      {item?.quantity?.toString().padStart(2, "0")}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-8 h-8 p-0 bg-green-500 hover:bg-green-600 text-white border-green-500"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Delete Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-2 text-gray-400 hover:text-red-500"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

              {/* Summary Header */}
              <div className="grid grid-cols-3 gap-4 mb-4 text-sm font-medium text-gray-600">
                <div>Name</div>
                <div className="text-center">Quantity</div>
                <div className="text-right">Money</div>
              </div>

              {/* Summary Items */}
              <div className="space-y-3 mb-6">
                {cartItems.map((item, index) => (
                  <div key={item.id} className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      {index + 1}. {item.name}
                    </div>
                    <div className="text-center">
                      {item.quantity.toString().padStart(2, "0")}
                    </div>
                    <div className="text-right">{item.quantity * 70}$</div>
                  </div>
                ))}
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>3. Tax</div>
                  <div className="text-center"></div>
                  <div className="text-right">{tax}$</div>
                </div>
              </div>

              {/* Total */}
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center text-xl font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Place Order Button */}
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-medium">
                Place Order
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
