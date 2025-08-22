import { Button } from "@/components/ui/button";
import { ProductCard } from "./ProductCard";
import image from "@/assets/home/Frame 70.png";

interface ProductGridProps {
  title: string;
  subtitle: string;
  backgroundColor?: string;
  showViewMore?: boolean;
}

export function ProductGrid({
  title,
  subtitle,
  backgroundColor = "bg-white",
  showViewMore = true,
}: ProductGridProps) {
  const products = [
    {
	id: 1,
      name: "Vegetables",
      price: 20.0,
      originalPrice: 25.0,
      image: image,
      description: "Fresh organic vegetables from local farms",
    },
    {
		id: 2,
      name: "Vegetables",
      price: 20.0,
      originalPrice: 25.0,
      image: image,
      description: "Fresh organic vegetables from local farms",
    },
    {
		id: 3,
      name: "Vegetables",
      price: 20.0,
      originalPrice: 25.0,
      image: image,
      description: "Fresh organic vegetables from local farms",
    },
    {
		id: 4,
      name: "Vegetables",
      price: 20.0,
      originalPrice: 25.0,
      image: image,
      description: "Fresh organic vegetables from local farms",
    },
  ];

  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
          {products?.map((product, index) => (
            <ProductCard
              key={index}
              name={product?.name}
              price={product?.price}
              originalPrice={product?.originalPrice}
              image={product?.image}
              description={product?.description}
            />
          ))}
        </div>
        {showViewMore && (
          <div className="text-center">
            <Button
              variant="outline"
              className="bg-green-600 text-white rounded-full"
            >
              View More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
