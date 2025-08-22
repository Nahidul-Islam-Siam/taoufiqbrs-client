"use client";
import { FilterOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import image from "@/assets/home/Frame 70.png";
import { ProductCard } from "@/components/Common/ProductCard";

const products = [
  {
    id: 1,
    name: "Vegetables",
    price: 20.0,
    originalPrice: 25.0,
    image: image,
    origin: "Japan",
    description: "Fresh organic vegetables from local farms",
    type: "Piece",
    weight: 17,
  },
  {
    id: 2,
    name: "Vegetables",
    price: 20.0,
    originalPrice: 25.0,
    image: image,
    origin: "Japan",
    description: "Fresh organic vegetables from local farms",
    type: "Piece",
    weight: 17,
  },
  {
    id: 3,
    name: "Vegetables",
    price: 20.0,
    originalPrice: 25.0,
    image: image,
    origin: "Japan",
    description: "Fresh organic vegetables from local farms",
    type: "Piece",
    weight: 17,
  },
  {
    id: 4,
    name: "Vegetables",
    price: 20.0,
    originalPrice: 25.0,
    image: image,
    origin: "Japan",
    description: "Fresh organic vegetables from local farms",
    type: "Piece",
    weight: 17,
  },
  {
    id: 5,
    name: "Vegetables",
    price: 20.0,
    originalPrice: 25.0,
    image: image,
    origin: "Japan",
    description: "Fresh organic vegetables from local farms",
    type: "Piece",
    weight: 17,
  },
  {
    id: 6,
    name: "Vegetables",
    price: 20.0,
    originalPrice: 25.0,
    image: image,
    origin: "Japan",
    description: "Fresh organic vegetables from local farms",
    type: "Piece",
    weight: 17,
  },
  {
    id: 7,
    name: "Vegetables",
    price: 20.0,
    originalPrice: 25.0,
    image: image,
    origin: "Japan",
    description: "Fresh organic vegetables from local farms",
    type: "Piece",
    weight: 17,
  },
  {
    id: 8,
    name: "Vegetables",
    price: 20.0,
    originalPrice: 25.0,
    image: image,
    origin: "Japan",
    description: "Fresh organic vegetables from local farms",
    type: "Piece",
    weight: 17,
  },
  {
    id: 9,
    name: "Vegetables",
    price: 20.0,
    originalPrice: 25.0,
    image: image,
    origin: "Japan",
    description: "Fresh organic vegetables from local farms",
    type: "Piece",
    weight: 17,
  },
  {
    id: 10,
    name: "Vegetables",
    price: 20.0,
    originalPrice: 25.0,
    image: image,
    origin: "Japan",
    description: "Fresh organic vegetables from local farms",
    type: "Piece",
    weight: 17,
  },
  {
    id: 11,
    name: "Vegetables",
    price: 20.0,
    originalPrice: 25.0,
    image: image,
    origin: "Japan",
    description: "Fresh organic vegetables from local farms",
    type: "Piece",
    weight: 17,
  },
  {
    id: 12,
    name: "Vegetables",
    price: 20.0,
    originalPrice: 25.0,
    image: image,
    origin: "Japan",
    description: "Fresh organic vegetables from local farms",
    type: "Piece",
    weight: 17,
  },
];

const AllProducts = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      {/* Wrapper for Search + Filter */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        {/* Search Bar */}
        <div className="flex w-full md:max-w-md">
          <Input
            placeholder="Search Your Product"
            className="pl-4 pr-24 py-3 text-base sm:text-lg border border-green-300 focus:border-green-500 focus:ring-green-500 rounded-l-full"
          />
          <button className="rounded-r-full bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 text-sm sm:text-base">
            Search
          </button>
        </div>

        {/* Filter Button */}
        <Button
          type="default"
          icon={<FilterOutlined />}
          className="border border-green-400 text-green-600 hover:!bg-green-600 hover:!text-white rounded-full px-6 py-6"
        >
          Filter
        </Button>
      </div>

      {/* Title + Dropdown */}
      <div className="flex mt-5 flex-col md:flex-row justify-between items-center bg-white rounded-2xl p-4 md:p-6 mb-6">
        <h1 className="text-xl md:text-3xl font-semibold text-gray-800">
          All <span className="text-green-600">Products</span>
        </h1>
        <select
          name="category"
          id="category"
          className="mt-3 md:mt-0 px-4 py-2 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        >
          <option value="all">All Categories</option>
          <option value="tomato">Tomato</option>
          <option value="potato">Potato</option>
          <option value="onion">Onion</option>
          <option value="cabbage">Cabbage</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            originalPrice={product.originalPrice}
            image={product.image}
            description={product.description}
            origin={product.origin}
            type={product.type}
            weight={product.weight}
          />
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-8 flex justify-center items-center mb-8">
        <Button
          type="primary"
          size="small"
          className="px-4 py-4 bg-green-600 text-white hover:!bg-green-700 hover:text-white p-2 rounded-full"
        >
          View More
        </Button>
      </div>
    </div>
  );
};

export default AllProducts;
