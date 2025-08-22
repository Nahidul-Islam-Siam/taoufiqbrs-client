import { ProductGrid } from "@/components/Common/ProductGrid";
import { HeroSection } from "@/components/pages/Home/Hero";
import { HomeCategorySection } from "@/components/pages/Home/HomeCategory";
import { TrustIndicators } from "@/components/pages/Home/TrustIndicators";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <TrustIndicators />
      <HomeCategorySection />
      <ProductGrid
        title="Best Selling Products"
        subtitle="Get the best quality organic produce from our farm to your table"
        backgroundColor="bg-white"
      />
      <ProductGrid
        title="Our Products"
        subtitle="Explore Farmstand brings you the authentic taste of freshness"
        backgroundColor="bg-white"
      />
    </div>
  );
};

export default HomePage;
