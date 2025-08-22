import { Button } from "@/components/ui/button"
import { ProductCard } from "./ProductCard"
import image from "@/assets/home/Frame 70.png"


interface ProductGridProps {
  title: string
  subtitle: string
  backgroundColor?: string
  showViewMore?: boolean
}

export function ProductGrid({ title, subtitle, backgroundColor = "bg-white", showViewMore = true }: ProductGridProps) {
  const products = [
    {
      name: "Vegetables",
      price: 20.0,
      originalPrice: 25.0,
      rating: 5,
      image: image,
      description: "Fresh organic vegetables from local farms",
    },
    {
      name: "Vegetables",
      price: 20.0,
      originalPrice: 25.0,
      rating: 5,
      image: image,
      description: "Fresh organic vegetables from local farms",
    },
    {
      name: "Vegetables",
      price: 20.0,
      originalPrice: 25.0,
      rating: 5,
      image: image,
      description: "Fresh organic vegetables from local farms",
    },
    {
      name: "Vegetables",
      price: 20.0,
      originalPrice: 25.0,
      rating: 5,
      image: image,
      description: "Fresh organic vegetables from local farms",
    },
    {
      name: "Vegetables",
      price: 20.0,
      originalPrice: 25.0,
      rating: 5,
      image: image,
      description: "Fresh organic vegetables from local farms",
    },
  ]

  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              rating={product.rating}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
        {showViewMore && (
          <div className="text-center">
            <Button variant="outline" className="bg-green-600 text-white rounded-full">
              View More
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
