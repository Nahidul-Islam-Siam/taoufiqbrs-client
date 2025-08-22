import { FilterOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

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
    </div>
  );
};

export default AllProducts;
