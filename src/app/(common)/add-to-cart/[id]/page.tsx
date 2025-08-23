import { ProductGrid } from "@/components/Common/ProductGrid";
import CartDetails from "@/components/pages/Cart/CartDetails";
import CommonHero from "@/components/ui/CommonHero/CommonHero";

export default function page() {
  return (
    <div>
      <CommonHero
        btnTitle="Saveurs Provencales"
        title="Your Selected Product"
        description="You’re just one step away from enjoying the authentic taste of Provence.
Saveurs Provençales delivers fresh, seasonal fruits and vegetables straight to your business."
      />
      <CartDetails />
      <div>
        <ProductGrid
          title="Related Products"
          subtitle=""
          backgroundColor="bg-white"
        />
      </div>
    </div>
  );
}
