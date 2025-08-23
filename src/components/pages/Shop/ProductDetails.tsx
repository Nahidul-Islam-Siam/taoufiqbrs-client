"use client";
import { useParams } from "next/navigation";
import ProductDetailsHero from "./ProductDetailsHero";
import image from "@/assets/home/Frame 70.png";
import ProductDetailsCard from "@/components/Common/ProductDetailsCard";
import { ProductGrid } from "@/components/Common/ProductGrid";

const products = [
  {
    id: 1,
    name: "Vegetables",
    price: 20.0,
    originalPrice: 25.0,
    rating: 5,
    image: image,
    origin: "Japan",
    description: "Fresh organic vegetables from local farms",
    type: "Piece",
    Weight: 17,
  },
  {
    id: 2,
    name: "Vegetables",
    price: 20.0,
    originalPrice: 25.0,
    rating: 5,
    image: image,
    origin: "Japan",
    description: "Fresh organic vegetables from local farms",
    type: "Piece",
    Weight: 17,
  },
  {
    id: 3,
    name: "Vegetables",
    price: 20.0,
    originalPrice: 25.0,
    rating: 5,
    image: image,
    origin: "Japan",
    description: "Fresh organic vegetables from local farms",
    type: "Piece",
    Weight: 17,
  },
  {
    id: 4,
    name: "Vegetables",
    price: 20.0,
    originalPrice: 25.0,
    rating: 5,
    image: image,
    origin: "Japan",
    description: "Fresh organic vegetables from local farms",
    type: "Piece",
    Weight: 17,
  },
  {
    id: 5,
    name: "Vegetables",
    price: 20.0,
    originalPrice: 25.0,
    rating: 5,
    image: image,
    origin: "Japan",
    description: "Fresh organic vegetables from local farms",
    type: "Piece",
    Weight: 17,
  },
  {
    id: 6,
    name: "Vegetables",
    price: 20.0,
    originalPrice: 25.0,
    rating: 5,
    image: image,
    origin: "Japan",
    description: "Fresh organic vegetables from local farms",
    type: "Piece",
    Weight: 17,
  },
  {
    id: 7,
    name: "Vegetables",
    price: 20.0,
    originalPrice: 25.0,
    rating: 5,
    image: image,
    origin: "Japan",
    description: "Fresh organic vegetables from local farms",
    type: "Piece",
    Weight: 17,
  },
  {
    id: 9,
    name: "Vegetables",
    price: 20.0,
    originalPrice: 25.0,
    rating: 5,
    image: image,
    origin: "Japan",
    description: "Fresh organic vegetables from local farms",
    type: "Piece",
    Weight: 17,
  },
  {
    id: 10,
    name: "Vegetables",
    price: 20.0,
    originalPrice: 25.0,
    rating: 5,
    image: image,
    origin: "Japan",
    description: "Fresh organic vegetables from local farms",
    type: "Piece",
    Weight: 17,
  },
  {
    id: 11,
    name: "Vegetables",
    price: 20.0,
    originalPrice: 25.0,
    rating: 5,
    image: image,
    origin: "Japan",
    description: "Fresh organic vegetables from local farms",
    type: "Piece",
    Weight: 17,
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto mt-20 text-center text-red-500">
        <h1>Product not found 🚫</h1>
      </div>
    );
  }

  return (
    <div>
      <ProductDetailsHero />
      <div className="max-w-7xl mx-auto mt-20">
        <h1 className="text-xl md:text-5xl font-semibold text-gray-800">
          Product <span className="text-green-500">Information</span>
        </h1>
      </div>
      <ProductDetailsCard
        id={product?.id}
        image={
          typeof product?.image === "string"
            ? product.image
            : product?.image?.src
        }
        name={product?.name}
        Weight={product?.Weight}
        description={product?.description}
        origin={product?.origin}
      />
      <ProductGrid
        title="Related Products"
        subtitle=""
        backgroundColor="bg-white"
      />
    </div>
  );
};

export default ProductDetails;
