"use client";
import { FilterOutlined } from "@ant-design/icons";
import { Button, Card, Input, Select } from "antd";
import image from "@/assets/home/Frame 70.png";
import { ProductCard } from "@/components/Common/ProductCard";
import { useState } from "react";

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
    packages: "Tomate(1kg), Black Olive(5kg) Black Olive(5kg), Tomate(1kg)",
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
const AllPackage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
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
        <div className="relative">
          <Button
            type="default"
            icon={<FilterOutlined />}
            className="border border-green-400 text-green-600 hover:!bg-green-600 hover:!text-white rounded-full px-6 py-6"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            Filter
          </Button>

          {/* Custom Dropdown Modal */}
          {filterOpen && (
            <Card
              className="absolute right-0 mt-2 w-64 rounded-2xl shadow-lg z-50"
              bodyStyle={{ padding: "16px" }}
            >
              <div className="flex flex-col gap-4">
                <Select placeholder="By Category" className="w-full" allowClear>
                  <Select.Option value="tomato">Tomato</Select.Option>
                  <Select.Option value="potato">Potato</Select.Option>
                  <Select.Option value="onion">Onion</Select.Option>
                  <Select.Option value="cabbage">Cabbage</Select.Option>
                </Select>

                <Select placeholder="By Origin" className="w-full" allowClear>
                  <Select.Option value="japan">Japan</Select.Option>
                  <Select.Option value="india">India</Select.Option>
                  <Select.Option value="china">China</Select.Option>
                </Select>

                <div>
                  <label className="block mb-1 text-sm text-gray-600">
                    Price
                  </label>
                  <div className="flex gap-2">
                    <Input placeholder="Min amount" />
                    <Input placeholder="Max amount" />
                  </div>
                </div>

                <Button
                  type="primary"
                  className="bg-green-600 hover:!bg-green-700 rounded-full"
                  block
                  onClick={() => setFilterOpen(false)}
                >
                  Search
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>

      <div className="flex mt-5 flex-col md:flex-row justify-between items-center bg-white rounded-2xl p-4 md:p-6 mb-6">
        {/* Title */}
        <div>
          <h1 className="text-xl md:text-3xl font-semibold text-gray-800">
            All <span className="text-green-500">Products</span>
          </h1>
        </div>

        {/* Dropdown */}
        <div className="mt-3 md:mt-0">
          <select
            name="category"
            id="category"
            className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value="all">All Categories</option>
            <option value="tomato">Tomato</option>
            <option value="potato">Potato</option>
            <option value="onion">Onion</option>
            <option value="cabbage">Cabbage</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
        {products?.map((product) => (
          <ProductCard
            id={product?.id}
            key={product?.id} 
            name={product?.name}
            price={product?.price}
            originalPrice={product?.originalPrice}
            image={product?.image}
            description={product?.description}
            origin={product?.origin}
            type={product?.type}
            weight={product?.Weight}
          />
        ))}
      </div>
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

export default AllPackage;
