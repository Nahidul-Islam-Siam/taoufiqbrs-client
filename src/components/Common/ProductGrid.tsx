import { Button } from "@/components/ui/button";
import image from "@/assets/home/Frame 70.png";
import { ProductCard } from "@/components/Common/ProductCard";

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
      image: image,
      origin: "Japan",
      description: "Fresh organic vegetables from local farms",
      type: "Piece",
      Weight: 17,
    },
  ];

  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title + Subtitle */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            {title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:max-w-lg">
            {subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {products?.map((product) => (
            <ProductCard
              key={product.id}
              id={product?.id}
              name={product?.name}
              price={product?.price}
              originalPrice={product?.originalPrice}
              image={product.image}
              description={product.description}
              origin={product.origin}
              type={product.type}
              weight={product.Weight}
            />
          ))}
        </div>

        {/* View More Button */}
        {showViewMore && (
          <div className="text-center">
            <Button
              variant="outline"
              className="bg-green-600 text-white rounded-full px-6 py-2"
            >
              View More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
